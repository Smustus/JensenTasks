import {getData, addData, db} from "../firebase.js";

const highscoreContainer = document.querySelector('.highscoreContainer');
const highscoreDiv = document.querySelector('.highscoreDiv'); 

const winCounter = document.querySelector('.winCounter');
const drawCounter = document.querySelector('.drawCounter');
const loseCounter = document.querySelector('.loseCounter');
const wins = document.querySelector('.wins');
const draws = document.querySelector('.draws');
const losses = document.querySelector('.losses');

const resultMsg = document.querySelector('.resultMsg');

const buttonSection = document.querySelector('.buttonSection');
const modal = document.querySelector('[data-modal]');
const closeModalBtn = document.querySelector('.closeModalBtn'); 

const resetQuestion = document.querySelector('.resetQuestion');
const nameInput = document.querySelector('.nameInput');

const score = {
  winCount: 0,
  loseCount: 0,
  drawCount: 0,
}

const matchScore = {
  matchWinCount: 0,
  matchLoseCount: 0,
  matchDrawCount: 0,
}

const highscore = {
  win: 0,
  lose: 0,
  draw: 0,
  username: nameInput.value
}

let result = ' Woho';

//---------------------------------------
//Add eventlisteners to all buttons
buttonSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('rockBtn')) {
    playGame('Rock');
  } else if (e.target.classList.contains('paperBtn')) {
    playGame('Paper');
  } else if (e.target.classList.contains('scissorsBtn')) {
    playGame('Scissors');
  } else if (e.target.classList.contains('resetBtn')) {
    resetScoreQ();
  } else if (e.target.classList.contains('highscoreBtn')){
    showHighscore(db);
    highscoreDiv.textContent = '';
    modal.showModal();
  }
});

closeModalBtn.addEventListener('click', () =>  {
  modal.close();
});

//---------------------------------------
//Generate a question with alternatives to reset the game or not
function resetScoreQ(){
  resetQuestion.innerHTML = 
    `<div>
      Would you like to reset the score?
      <button class="resetYes">Yes</button> 
      <button class="resetNo">No</button>
    </div>`
  
  const resetScoreYes = document.querySelector('.resetYes');
  resetScoreYes.addEventListener('click', () => {
    highscore.win = 0;
    highscore.draw = 0;
    highscore.lose = 0;
    matchScore.matchWinCount = 0
    matchScore.matchDrawCount = 0;
    matchScore.matchLoseCount = 0;
    scoreReset();
    scoreUpdate();
  });

  const resetScoreNo = document.querySelector('.resetNo');
  resetScoreNo.addEventListener('click', () => {
    resetQuestion.innerHTML = '';
  });
}

//---------------------------------------
//Resets the match scores
function scoreReset(){
  score.winCount = 0;
  score.drawCount = 0;
  score.loseCount = 0;
  resetQuestion.innerHTML = '';
}

//---------------------------------------
//Reports the results of the game and resets it
function resetGame(result){
  alert(result);
  scoreReset()
  highscore.win = 0;
  highscore.draw = 0;
  highscore.lose = 0;
  matchScore.matchWinCount = 0
  matchScore.matchDrawCount = 0;
  matchScore.matchLoseCount = 0;
}

//---------------------------------------
//Play the game with respective move, check if someone won and update score
function playGame(playerMove){
  const compMove = computerMove();
  console.log(compMove);
  if(compMove === playerMove){
    resultMsg.textContent = `You picked ${playerMove}, computer picked ${compMove}. It´s a draw!`;
    score.drawCount++
    } else if ((compMove === 'Rock' && playerMove === 'Paper') || (compMove === 'Paper' && playerMove === 'Scissors') || (compMove === 'Scissors' && playerMove === 'Rock')){
      resultMsg.textContent = `You picked ${playerMove}, computer picked ${compMove}. You win!`;
      score.winCount++
    } else {
      resultMsg.textContent = `You picked ${playerMove}, computer picked ${compMove}. You lose! nub`;
      score.loseCount++
  }
  
  checkWinCondition()
  scoreUpdate()
}

//---------------------------------------
//Generate a random computer move
function computerMove(){
  let computerMove = Math.ceil(Math.random()*3);
  console.log(computerMove);
  if(computerMove === 1){
    computerMove = 'Rock'
    }else if(computerMove === 3){
      computerMove = 'Paper'
    }else {
      computerMove = 'Scissors'
    }
    return computerMove;
}

//---------------------------------------
//Update the score HTML
function scoreUpdate(){
  winCounter.textContent = `Wins: ${score.winCount}`;
  loseCounter.textContent = `Losses: ${score.loseCount}`;
  drawCounter.textContent = `Draws: ${score.drawCount}`;
  wins.textContent = `Match wins: ${matchScore.matchWinCount}`;
  losses.textContent = `Match losses: ${matchScore.matchLoseCount}`;
  draws.textContent = `Match draws: ${matchScore.matchDrawCount}`;
  console.log(score);
  console.log(highscore);
  checkWinCondition();
}

//---------------------------------------
//Check if someone won match/game and act accordingly
async function checkWinCondition(){
  highscore.username = nameInput.value
  if((matchScore.matchWinCount + matchScore.matchLoseCount + matchScore.matchDrawCount) === 3){
    if(matchScore.matchWinCount === matchScore.matchLoseCount){
      result = 'Match was a draw';
      highscore.draw++
    } else if(matchScore.matchWinCount > matchScore.matchLoseCount){
      result = 'You won the match';
      highscore.win++
    } else {
      result = 'You lose the match';
      highscore.lose++
    }
    await addData(db, 'RPS game', highscore);
    resetGame(result);
  } else if((score.winCount + score.loseCount + score.drawCount) === 3){
      if(score.winCount === score.loseCount){
        matchScore.matchDrawCount++
      } else if(score.winCount > score.loseCount){
        matchScore.matchWinCount++
      } else {
        matchScore.matchLoseCount++
      }
      console.log(score);
      scoreReset()
    }
}
//---------------------------------------
//Extract and accumulate statistics from each unique username
async function showHighscore(db){
  const data = await getData(db, 'RPS game');
  console.log(data);

    const userStats = {};
    data.forEach((highscore) => {
      const { win, lose, draw, username } = highscore;
      // If user already exists in the userStats object we add to object, otherwise create a new obj
      if (userStats[username]) {
        userStats[username].win += win;
        userStats[username].lose += lose;
        userStats[username].draw += draw;
      } else {
        userStats[username] = {
          win,
          lose,
          draw,
        };
      }
    });
   console.log(userStats);

    for (let name in userStats) {
      const statsDiv = document.createElement('div');
      highscoreDiv.append(statsDiv);
      const { win, lose, draw } = userStats[name];
      name = name[0].toUpperCase() + name.substring(1);
      statsDiv.textContent = (`${name}'s score: Wins - ${win}, Losses - ${lose}, Draws - ${draw}`);
    }
}
showHighscore(db)


