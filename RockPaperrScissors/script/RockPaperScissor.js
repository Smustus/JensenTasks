const winCounter = document.querySelector('.winCounter');
const drawCounter = document.querySelector('.drawCounter');
const loseCounter = document.querySelector('.loseCounter');

const resultMsg = document.querySelector('.resultMsg');

const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const scissorsBtn = document.querySelector('.scissorsBtn');
const resetBtn = document.querySelector('.resetBtn');

const resetQuestion = document.querySelector('.resetQuestion');

let winCount = 0;
let drawCount = 0;
let loseCount = 0;

rockBtn.addEventListener('click', () => {
  playGame('Rock');
});

paperBtn.addEventListener('click', () => {
  playGame('Paper');
});

scissorsBtn.addEventListener('click', () => {
  playGame('Scissors');
});

resetBtn.addEventListener('click', () => {
  resetScore();
});

function resetScore(){
  resetQuestion.innerHTML = `<div>Would you like to reset the score? <button class="resetYes">Yes</button> <button class="resetNo">No</button></div>`
  
  const resetScoreYes = document.querySelector('.resetYes');
  resetScoreYes.addEventListener('click', () => {
    winCount = 0;
    drawCount = 0;
    loseCount = 0;
    winCounter.textContent = 'Wins: 0';
    drawCounter.textContent = 'Draws: 0';
    loseCounter.textContent = 'Losses: 0';
    resultMsg.textContent = 'Pick a move then';
    resetQuestion.innerHTML = '';
});

  const resetScoreNo = document.querySelector('.resetNo');
  resetScoreNo.addEventListener('click', () => {
    resetQuestion.innerHTML = '';
  });
  }

function computerMove(){
  let computerMove = Math.ceil(Math.random()*9);
  console.log(computerMove);
  if(computerMove <= 3){
    computerMove = 'Rock'
  }else if(computerMove >= 7){
    computerMove = 'Paper'
  }else {
    computerMove = 'Scissors'
  }
  return computerMove;
}

function playGame(playerMove){
  let compMove = computerMove();
  console.log(compMove);
  if(compMove === playerMove){
    resultMsg.textContent = 'It´s a draw!'
    drawCount++
    drawCounter.textContent = `Draws: ${drawCount}`;
    } else if (compMove === 'Rock' && playerMove === 'Paper'){
      resultMsg.textContent = 'You win!'
      winCount++
      winCounter.textContent = `Wins: ${winCount}`;
    } else if (compMove === 'Rock' && playerMove === 'Scissors'){
      resultMsg.textContent = 'You lose! nub'
      loseCount++
      loseCounter.textContent = `Losses: ${loseCount}`;
    } else if (compMove === 'Paper' && playerMove === 'Rock'){
      resultMsg.textContent = 'You lose! nub'
      loseCount++
      loseCounter.textContent = `Losses: ${loseCount}`;
    } else if (compMove === 'Paper' && playerMove === 'Scissors'){
      resultMsg.textContent = 'You win!'
      winCount++
      winCounter.textContent = `Wins: ${winCount}`;
    } else if (compMove === 'Scissors' && playerMove === 'Rock'){
      resultMsg.textContent = 'You win!'
      winCount++
      winCounter.textContent = `Wins: ${winCount}`;
    } else if (compMove === 'Scissors' && playerMove === 'Paper'){
      resultMsg.textContent = 'You lose! nub'
      loseCount++
      loseCounter.textContent = `Losses: ${loseCount}`;
    } 
  }

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r'){
    playGame('Rock')
    } else if (event.key === 'p'){
        playGame('Paper');
    } else if (event.key === 's') {
        playGame('Scissors');
}});