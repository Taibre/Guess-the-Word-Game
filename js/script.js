/*Create Global Variables - Lesson 13 Step 1*/ 
const guessedLettersElement = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessBox = document.querySelector(".letter");
const wordProgress = document.querySelector(".word-in-progress");
const remainingGuessesParagraph = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const messages = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

/*Write a Function to Add Placeholders for Each Letter - Lesson 13 Step 1*/ 
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
            }
            wordProgress.innerText = placeholderLetters.join("");
};
placeholder(word);

/*Add an Event Listener for the Button - Lesson 13 Step 1*/ 

guessButton.addEventListener("click", function (e){
    e.preventDefault();
     message.innerText = "";
  

  const guess = letterInput.value;
  
  const goodGuess = validateInput(guess);

  if (goodGuess) {
    
    makeGuess(guess);
  }
  letterInput.value = "";
    
});

/*Create a Function to Check Player’s Input - Lesson 13 Step 2*/ 

const validateInput = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
  if (input.length === 0) {
    
    message.innerText = "Please guess a letter.";
  } else if (input.length > 1) {
   
    message.innerText = "Please guess a single letter.";
  } else if (!input.match(acceptedLetter)) {
   
    message.innerText = "Please guess a letter from A to Z.";
  } else {
   
    return input;
  }
};

const makeGuess = function (guess) {
  guess = guess.toUpperCase();
  if (guessedLetters.includes(guess)) {
    message.innerText = "Letter already guessed. Please try a different letter.";
  } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
  }
};

