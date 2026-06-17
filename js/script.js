/*Create Global Variables - Lesson 13 Step 2*/ 
const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessBox = document.querySelector(".letter");
const wordProgress = document.querySelector(".word-in-progress");
const remainingGuessesParagraph = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const messages = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

/*Write a Function to Add Placeholders for Each Letter - Lesson 13 Step 2*/ 
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
            }
            wordProgress.innerText = placeholderLetters.join("");
};
placeholder(word);

/*Add an Event Listener for the Button - Lesson 13 Step 2*/ 

guessButton.addEventListener("click", function (e){
    e.preventDefault();
    const guess = guessBox.value;
    console.log(guess);
    guessBox.value = "";
    
});