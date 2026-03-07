// async function so page doesnt stop when audio is being generated
async function readFlashcard(textOnScreen) { 

    const response = await fetch("/speak", {
        method : "POST", // sending data
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({text : textOnScreen})
        });
// raw audio sent back from python
    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);
    // internal audio link
    const audio = new Audio(audioUrl);
    audio.play();
}
