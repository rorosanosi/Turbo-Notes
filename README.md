# Turbo Notes

## Notes
This project was created for the Durham University Women in Tech Hackathon 2026, in 24 hours :)

## Inspiration
Active recall and spaced repetition are scientifically proven to be the most effective study methods [1]. They already form the basis of many popular study tools like Quizlet and Anki. While accessed by many, these study tools are unfortunately not accessible to all students, specifically those with certain disabilities like visual impairments, dyslexia, motor impairments, or attention-related conditions that make traditional flashcard interfaces difficult to use. We also have a duty to be as inclusive as possible so all students get access to the best study methods.

## What it does
Our study tool allows users to upload their notes, then it comes up with specific, targeted flashcard decks. This is then turned into a study schedule using the spaced repetition method. The main features of our tool are what make it accessible, they include text-to-speech, hands-free mode, contrast control, font size control. Users are also able to convert their flashcard decks into .csv files so they can be exported to any other study tool like Anki.

## How we built it
The UI is built using HTML/CSS/JavaScript. The core functionality of the AI-powered flashcard generation uses Gemini 2.5-flash. Once a pdf is uploaded the text is extracted using the pymupdf library and fed into Gemini, with the output being a JSON of front and back flashcards. Text-to-speech and hands-free navigation functionality relies on ElevenLabs.

## Challenges we ran into
The main challenge we ran into was fiddling with ElevenLabs APIs so we can implement hands-free navigation. It's always a journey when reading new API documentation, and after trail and error for hours we managed to get it functional but we unfortunately did not have enough time to integrate it properly with the rest of the website.

## Accomplishments that we're proud of
One of the accomplishments we are proud of is how quickly we were able to complete the AI flashcard generation logic. We got it working within about an hour of hacking!

## What we learned
We worked with many things we weren't familiar with previously, mainly ElevenLabs and how text-to-speech/hands free navigation works in practice. Figuring out the logic behind it was tricky but we feel confident now and are super proud of ourselves for how much we learned in just 24 hours!

## What's next for Turbo Notes
The next step in our development process is to create a leaderboard system so users can compare study scores with friends (we plan on calling it a score board to match the motorsport theme!). We originally set this as an extension task because it would involve creating a user login system, along with password security and database storage, and we chose to focus on the core functionality (NLP, AI-powered flashcard generation, accessibility features) of the app for the short duration of the hackathon instead.

## Meet the team
**Raghad**: Third-year Computer Science and Physics student. I worked on the backend functionality of the flashcard generation, using FastAPI and Gemini API. I also worked on documentation writing and some frontend functionality.  
**Daisy**: Third-year Theoretical Physics student. I worked on the backend functionality of text-to-speech, using ElevenLabs. I am also the lead creative director, which included all visual aspects of the project.  
**Nadia**: Second-year Mathematics student. I am the lead frontend developer for this project, which included animations, wireframes, and HTML/JavaScript/CSS development.  
**Sarah**: Third-year Computer Science and Mathematics student. I worked on the backend functionality of hands-free navigation and some frontend elements of the project.

## Reference
[1] Price, D. W., Wang, T., O'Neill, T. R., Morgan, Z. J., Chodavarapu, P., Bazemore, A., Peterson, L. E., & Newton, W. P. (2025). The Effect of Spaced Repetition on Learning and Knowledge Transfer in a Large Cohort of Practicing Physicians. Academic medicine : journal of the Association of American Medical Colleges, 100(1), 94–102. https://doi.org/10.1097/ACM.0000000000005856
