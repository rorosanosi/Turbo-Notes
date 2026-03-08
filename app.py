import os
import re
import json
import fitz
import google.generativeai as genai
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
# for m in genai.list_models():
#    print(m.name)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_methods=["*"],
    allow_headers=["*"],
)

def clean_json(raw_string):
    # removes markdown code blocks if Gemini adds them
    clean = re.sub(r"```json\n|\n```", "", raw_string).strip()
    return clean

@app.post("/generate")
async def generate_cards(file: UploadFile = File(...)):
    try:
        # read uploaded files into memory
        pdf_content = await file.read()

        # open pdf
        doc = fitz.open(stream=pdf_content, filetype="pdf")
        text="".join([page.get_text() for page in doc[:10]])

        if not text.strip():
            raise HTTPException(status_code=400, detail="PDF is empty or unreadable")
        
        # setup Gemini
        model = genai.GenerativeModel("models/gemini-2.5-flash")
        
        base_prompt = (
            "Pretend you are the best teacher in the world. Extract the most important concepts "
            "and format them into a JSON array of flashcards. Each object must have: "
            "'front': A concise, challenging question or term. "
            "'back': A clear, comprehensive explanation. "
            "Constraint: Avoid 'yes/no' questions. Focus on 'Why' and 'How'. Output Format: JSON only."
        )

        # combining prompt with the extracted text
        full_prompt = f"{base_prompt}\n\nText to process:\n{text}"

        response = model.generate_content(full_prompt)

        # parsing, cleaning and return
        cleaned_data = clean_json(response.text)
        flashcards = json.loads(cleaned_data)

        return {"flashcards": flashcards}

    except Exception as e:
        print(f"Error: {e}") # logging errors into terminal
        raise HTTPException(status_code=500, detail=str(e))
    
@app.get("/")
def read_root():
    return {"status": "Server is up and running!"}
    
