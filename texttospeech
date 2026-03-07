from flask import Flask, request, Response
import requests

app = Flask(__name__)

#flashcard sent from javascript to python
@app.route("/speak", methods=["POST"])
def speak():
    data = request.json
    flashcard_text = data.get("text")
#text to speech api
    API_KEY = #api key
#voice chosen
    VOICE_ID = #voice

    url = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}"

    notes_to_text = {"text" : flashcard_text, "model_id": "eleven_multilingual_v2"
}

#create dictionary
    headers = {"Content-Type" : "application/json", 
          "xi-api-key" : API_KEY

}
    response = requests.post(url, json = notes_to_text, headers = headers)

    return Response(response.content, mimetype="audio/mpeg")
