
let words = ['Banan', 'Äppelpaj', 'Skruvmejsel', 'Potatismos', 'Korvkiosk'];

const bodyElem = document.querySelector('body');
const spellingSection = document.querySelector('.spellingSection');
const wrongGuesses = document.querySelector('.wrongGuesses');
const correctGuesses = document.querySelector('.correctGuesses');
const resetBtn = document.querySelector('.resetBtn');
const wordInfo = document.querySelector('.wordInfo');
const guessesInfo = document.querySelector('.guessesInfo');
const gameEndScreen = document.querySelector('.gameEndScreen');

let randomWord;
let randomWordSplit;
let randomWordSplitCopy;
const guess = [];
const correctGuess = [];
const wrongGuess = [];
let chanceCounter = 5;

resetBtn.addEventListener('click', () => resetGame());


generateWord(words);

//Generate a word and related variables
function generateWord(words){
    randomWord = getRandomWord(words)
    randomWordSplit = randomWord.split('');
    randomWordSplitCopy = randomWordSplit.slice(0);
    console.log(randomWordSplitCopy);
    console.log(randomWord);
    generateWordPage(randomWord);
}

//Pick random word from array
function getRandomWord(words){
    const randomPosition = Math.floor(Math.random() * words.length);
    return words[randomPosition].toLowerCase();
}

//Generate and update HTML
function generateWordPage(word){
    wordInfo.textContent = `Word length: ${randomWordSplit.length}`
    guessesInfo.textContent = `Guesses left: ${chanceCounter}`;

    for(let i = 0; i < word.length; i++){
        const container = document.createElement('div');
        container.classList.add('letterGuess', 'hidden');
        container.innerHTML = word[i];
        spellingSection.append(container);

        const letterUnderscore = document.createElement('div');
        letterUnderscore.classList.add('letterUnderscore');
        letterUnderscore.innerHTML = '.'
        spellingSection.append(letterUnderscore);
    }
}

//Eventlistener on body for keypresses to make guesses 
bodyElem.addEventListener('keyup', (event) => {
    console.log(event.key);
    if (chanceCounter < 1) {
        return; 
    }

    let matches = [];

    //Iterate through array and check if key is included, push to respective array if included
    for(let i = 0; i < randomWordSplitCopy.length; i++) {
        if (event.key ===  randomWordSplitCopy[i]) {
            guess.push(randomWordSplitCopy[i]);
            correctGuess.push(event.key);
            matches.push(i);
        }
    }
    //Check if matches.length equals a falsy value, if falsy and key isnt already in the arrays of guesses -> Add to array of wrong
    if(!matches.length){
        if(!wrongGuess.includes(event.key) && !correctGuess.includes(event.key)){
            wrongGuess.push(event.key);
            chanceCounter--
            generateHangman(chanceCounter)
        } 
    }
    //Iterate and remove matched indices
    //Iterating backward when removing elements from an array to avoid index-related issues
    for (let j = matches.length - 1; j >= 0; j--) {
        randomWordSplitCopy.splice(matches[j], 1);
    }
    console.log(!matches.length)
    console.log(matches.length)

    updatePage()
    setTimeout(() => winCondition(), 1200)
});

//Update hangman status
function generateHangman(chances){
    if(chances < 5){
        document.querySelector('figure').classList.add('scaffold')
    }
    if(chances < 4){
        document.querySelector('figure').classList.add('head')
    }
    if(chances < 3){
        document.querySelector('figure').classList.add('body')
    }
    if(chances < 2){
        document.querySelector('figure').classList.add('arms')
    }
    if(chances < 1){
        document.querySelector('figure').classList.add('legs')
    }
}

//Win condition
function winCondition(){
    if(chanceCounter < 1){
        gameEndScreen.classList.remove('hidden');
        gameEndScreen.innerHTML = `
        <p>To bad, you lost. Wanna play again?</p>
        <button class="playAgainBtn">Yes!</button>
        `;
        const playAgainBtn = document.querySelector('.playAgainBtn');
        playAgainBtn.addEventListener('click', () => resetGame());
    } else if(randomWord.split('').sort().join('') === guess.sort().join('')) {
        gameEndScreen.classList.remove('hidden');
        gameEndScreen.style.backgroundColor = '#9662e0';
        gameEndScreen.innerHTML = `
        <p>Congratulations you won! Wanna play again?</p>
        <button class="playAgainBtn">Yes!</button>
        `;
        const playAgainBtn = document.querySelector('.playAgainBtn');
        playAgainBtn.addEventListener('click', () => resetGame());
    }
}

//Update status
function updatePage(){
    wrongGuesses.textContent = 'Wrong: ' + wrongGuess.join(' ').toUpperCase();
    correctGuesses.textContent = 'Correct: ' + Array.from(new Set(correctGuess.join('').toUpperCase())).join(' ');
    wordInfo.textContent = `Word length: ${randomWordSplit.length} `
    guessesInfo.textContent = `Guesses left: ${chanceCounter}`;

    for (let i = 0; i < randomWordSplit.length; i++) {
        if (correctGuess.includes(randomWordSplit[i])) {
            const letterContainers = document.querySelectorAll('.letterGuess');
            letterContainers[i].classList.remove('hidden');
            const letterUnderscore = document.querySelectorAll('.letterUnderscore');
            letterUnderscore[i].classList.add('hidden');
        }
    }
}

//Lazy reset
function resetGame(){
    window.location.reload();
}

