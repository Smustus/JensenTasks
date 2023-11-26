const winCounter = document.querySelector('.winCounter');
const drawCounter = document.querySelector('.drawCounter');
const loseCounter = document.querySelector('.loseCounter');

const resultMsg = document.querySelector('.resultMsg');

const buttonSection = document.querySelector('.buttonSection');
const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const scissorsBtn = document.querySelector('.scissorsBtn');
const resetBtn = document.querySelector('.resetBtn');

const resetQuestion = document.querySelector('.resetQuestion');

let winCount = 0;
let drawCount = 0;
let loseCount = 0;

buttonSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('rockBtn')) {
    playGame('Rock');
  } else if (e.target.classList.contains('paperBtn')) {
    playGame('Paper');
  } else if (e.target.classList.contains('scissorsBtn')) {
    playGame('Scissors');
  } else if (e.target.classList.contains('resetBtn')) {
    resetScore();
}});

function resetScore(){
  resetQuestion.innerHTML = 
    `<div>
      Would you like to reset the score? 
      <button class="resetYes">Yes</button> 
      <button class="resetNo">No</button>
    </div>`
  
  const resetScoreYes = document.querySelector('.resetYes');

  resetScoreYes.addEventListener('click', () => {
    winCount = 0;
    drawCount = 0;
    loseCount = 0;
    scoreUpdate()
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
  const compMove = computerMove();
  console.log(compMove);
  if(compMove === playerMove){
    resultMsg.textContent = 'It´s a draw!'
    drawCount++
    } else if ((compMove === 'Rock' && playerMove === 'Paper') || (compMove === 'Paper' && playerMove === 'Scissors') || (compMove === 'Scissors' && playerMove === 'Rock')){
      resultMsg.textContent = 'You win!'
      winCount++
    } else {
      resultMsg.textContent = 'You lose! nub'
      loseCount++
  }
  scoreUpdate()
}

function scoreUpdate(){
  winCounter.textContent = `Wins: ${winCount}`;
  loseCounter.textContent = `Losses: ${loseCount}`;
  drawCounter.textContent = `Draws: ${drawCount}`;
}

document.body.addEventListener('keydown', (e) => {
  if (e.key === 'r'){
    playGame('Rock')
    } else if (e.key === 'p'){
        playGame('Paper');
    } else if (e.key === 's') {
        playGame('Scissors');
}});