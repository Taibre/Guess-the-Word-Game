const guessedLettersElement = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessBox = document.querySelector(".letter");
const wordProgress = document.querySelector(".word-in-progress");
const remainingGuessesParagraph = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const messages = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

let word = "magnolia";
const guessedLetters = [];
let remainingGuesses = 8;

const getWord = async function (){
    const response = await fetch ("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
    const words = await response.text();
    const wordArray = words.split("\n");
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    word = wordArray[randomIndex].trim();
    placeholder(word);

};
 getWord();

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        placeholderLetters.push("●");
            }
            wordProgress.innerText = placeholderLetters.join("");
            
};


guessButton.addEventListener("click", function (e){
    e.preventDefault();
     messages.innerText = "";
  

  const guess = guessBox.value;
  
  const goodGuess = validateInput(guess);

  if (goodGuess) {
    
    makeGuess(guess);
  }
  guessBox.value = "";
    
});


const validateInput = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
  if (input.length === 0) {
    
    messages.innerText = "Please guess a letter.";
  } else if (input.length > 1) {
   
    messages.innerText = "Please guess a single letter.";
  } else if (!input.match(acceptedLetter)) {
   
    messages.innerText = "Please guess a letter from A to Z.";
  } else {
   
    return input;
  }
};

const makeGuess = function (guess) {
  guess = guess.toUpperCase();
  if (guessedLetters.includes(guess)) {
    messages.innerText = "Letter already guessed. Please try a different letter.";
  } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
    showGuessedLetters();
    updateWordProgress(guessedLetters);
    updateGuessesRemaining(guess);
  }
};

const showGuessedLetters = function (){
    guessedLettersElement.innerHTML = "";
    for (const letter of guessedLetters){
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersElement.append(li);
    }
};

const updateWordProgress = function (guessedLetters){
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWord = [];
    for (const letter of wordArray){
      if (guessedLetters.includes(letter)){
          revealWord.push(letter.toUpperCase());
        
    } else {
        revealWord.push("●");
    }
}
wordProgress.innerText = revealWord.join("");
checkIfWin();
};

const updateGuessesRemaining = function (guess) {
  const upperWord = word.toUpperCase();
if (!upperWord.includes(guess)) {
    messages.innerText = `The word does not have the letter ${guess}.`;
    remainingGuesses -= 1;
} else {
    messages.innerText = "Yes! You got a letter!";
}
if (remainingGuesses === 0) {
    messages.innerHTML = `Game over! The word was <span = "highlight">${word}</span>.`;
    
} else if (remainingGuesses === 1) {
    remainingGuessesSpan.innerText = `${remainingGuesses} guess`;
} else {
    remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
}

};

const checkIfWin = function (){
    if (word.toUpperCase()=== wordProgress.innerText){
        messages.classList.add("win");
        messages.innerHTML = `<p class="highlight">You guessed to word! You win!</p>`
    }
};

