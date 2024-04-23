const gameContainer = document.querySelector('.gameContainer');

const genBtn = document.querySelector('.genBtn');
const shuffleBtn = document.querySelector('.shuffleBtn');
const sortBtn = document.querySelector('.sortBtn');

const cardAmount = document.querySelector('.cardAmount');
const resetTime = document.querySelector('.resetTime');

let randomCards = [];

////  GENERATE RANDOM AMOUNT OF CARDS, OR A FULL DECK IF NO INPUT PROVIDED
genBtn.addEventListener('click', () => {
  startGame()
});

resetTime.addEventListener('keydown', (e) => {
  if(e.key === 'Enter'){
    startGame()
  }
});

cardAmount.addEventListener('keydown', (e) => {
  if(e.key === 'Enter'){
    startGame()
  }
});

///// SHUFFLE CARDS
shuffleBtn.addEventListener('click', () => {
  if(randomCards.length > 0){
    gameContainer.innerHTML = '';
    const shuffledRandomCards = shuffle(randomCards);
    generateCards(shuffledRandomCards);
  } else {
    gameContainer.innerHTML = '';
    generateCards(shuffle(generateDeck()));
  }
});

///// SORT CARDS 
sortBtn.addEventListener('click', () => {
  if(randomCards.length > 0){
    gameContainer.innerHTML = '';
    const sortedRandomCards = sort(randomCards);
    generateCards(sortedRandomCards);
  } else {
    gameContainer.innerHTML = '';
    generateCards(sort(shuffle(generateDeck())));
  }
});


//// START THE GAME
function startGame(){
  if(cardAmount.value){
    gameContainer.innerHTML = '';
    randomCards = generateRandomDeck2(cardAmount.value);
    generateCards(randomCards);
  } else {
    gameContainer.innerHTML = '';
    generateCards(generateDeck());
  }
}


/// WIN CONDITION
let turnedCards = 0;
let generatedCards = 0;

function winCondition(){
  if(generatedCards === turnedCards){
    const message = `Congratulations! You've won an orange iPhone 15 in the color of your choice. Click 'OK' to register delivery information.`;
    if (confirm(message)) {
      window.open('http://www.google.com', '_blank');
    gameContainer.innerHTML = '';
    }
  }
}


//// GENERATE A FULL DECK
function generateDeck(){
  const suit = ["&hearts;", "&diams;", "&clubs;", "&spades;"];
  const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const cardArr = [];

  for(const type of suit){
    for(let num of rank){

      let name;

      if(num >=2 && num <= 10){
        name = `${num}`;
      }else if(num === 11){
        name = 'J';
      }else if(num === 12){
        name = 'D';
      }else if(num === 13){
        name = 'K';
      }else if(num === 14){
        name = 'A';
      }
      cardArr.push(
        {
          suit: type,
          rank: num,
          name: name
        });
    }
  }
  generatedCards = cardArr.length;
  return cardArr;
};
/* console.log(generateDeck()); */
console.log('---------------');


//// GENERATE X RANDOM CARDS FUNCTION
function generateRandomDeck2(amount) {
  const cardArr = [];
  if(amount > 52 || amount < 1){
    return alert('Invalid input');
  }else{
  /* const  */
  const randomDeck = shuffle(generateDeck());
  for(const card of randomDeck){
    if (cardArr.length >= amount) {
      break; // When we've reached the desired amount -> Exit
    }
    cardArr.push(card);
  }
  generatedCards = cardArr.length;
  return cardArr;
  }
}
/* console.log(generateRandomDeck2(4)); */
console.log('---------------');


//// SHUFFLE FUNCTION
function genRandom(length){
  return Math.floor(Math.random()*length);
};

// Fisher-Yates shuffle algorithm
function shuffle(deck){
  const shuffledDeck = deck.slice();
  for(let i = 0; i < shuffledDeck.length; i++){
    const randomPlace = genRandom(deck.length);
    const randomCard = shuffledDeck[randomPlace];
    shuffledDeck[randomPlace] = shuffledDeck[i];
    shuffledDeck[i] = randomCard;
  }
  return shuffledDeck;
}
/* console.log(shuffle(generateDeck())); */
console.log('---------------');


//// SORTING FUNCTION
function sortRanks(deck){
  return deck.sort((a, b) => a.rank - b.rank);
}

function sort(deck) {
  const heartsDeck = [];
  const diamsDeck = [];
  const clubsDeck = [];
  const spadesDeck = [];

  for(const card of deck){

    switch(card.suit){
      case '&hearts;':
        heartsDeck.push(card);
        break;
      case '&diams;':
        diamsDeck.push(card);
        break;
      case '&clubs;':
        clubsDeck.push(card);
        break;
      case '&spades;':
        spadesDeck.push(card);
        break;
      default: 'Invalid suit found'
        break;
    } 
  }  

  const sortedHeartsDeck = sortRanks(heartsDeck);
  const sortedDiamsDeck = sortRanks(diamsDeck);
  const sortedClubsDeck = sortRanks(clubsDeck);
  const sortedSpadesDeck = sortRanks(spadesDeck);

  return sortedHeartsDeck.concat(sortedDiamsDeck, sortedClubsDeck, sortedSpadesDeck);
}
/* console.log(sort(shuffle(generateDeck()))); */
console.log('---------------');


//// GENERATE HTML + CSS
function generateCards(deck){

  for(const cards of deck){

    const card = document.createElement('article');
    card.classList.add('card');
    gameContainer.append(card);

    const titleTop = document.createElement('h1');
    titleTop.classList.add('cardTitle', 'titleTop', 'top');
    titleTop.innerHTML = cards.name;
    card.append(titleTop);

    const suitTop = document.createElement('figure');
    suitTop.classList.add('suit','suitTop', 'top');
    suitTop.innerHTML = cards.suit;
    card.append(suitTop);

    const suitMid = document.createElement('figure');
    suitMid.classList.add('suit', 'mid');
    suitMid.innerHTML = cards.suit;
    card.append(suitMid);

    const suitBottom = document.createElement('figure');
    suitBottom.classList.add('suit', 'suitBot', 'bottom');
    suitBottom.innerHTML = cards.suit;
    card.append(suitBottom);

    const titleBottom = document.createElement('h1');
    titleBottom.classList.add('cardTitle', 'titleBot', 'bottom');
    titleBottom.innerHTML = cards.name;
    card.append(titleBottom);    

    if((cards.suit === '&hearts;') || (cards.suit === '&diams;')){
      titleTop.style.color = 'brown';
      titleBottom.style.color = 'brown';
      suitTop.style.color = 'brown';
      suitMid.style.color = 'brown';
      suitBottom.style.color = 'brown';
    }

    let turned = false;

    const cardEventListener = () => {  
      deactivateEventListenerForDuration(card);
      if(!turned){
        setTimeout(() => {
          titleTop.innerHTML = '';
          suitTop.innerHTML = '';
          suitMid.innerHTML = '';
          suitBottom.innerHTML = '';
          titleBottom.innerHTML = '';
        }, 600)
        
        setTimeout(() => {
          card.classList.toggle('activeCard');
          turned = true;
          turnedCards++
          winCondition()
        }, 0);

        setTimeout(() => {
          card.classList.toggle('activeCardBackground');
        }, 600);

        setTimeout(() => {
          card.classList.toggle('activeCard');
          setTimeout(() => {
            card.classList.toggle('activeCardBackground');
          }, 600);
          setTimeout(() => {
            titleTop.innerHTML = cards.name;
            suitTop.innerHTML = cards.suit;
            suitMid.innerHTML = cards.suit;
            suitBottom.innerHTML = cards.suit;
            titleBottom.innerHTML = cards.name;
          }, 600)
          turned = false;
          turnedCards--
        }, resetTime.value * 1000 || 5000);
      }     
    };

    card.addEventListener('click', cardEventListener);

    function deactivateEventListenerForDuration(card){
      card.removeEventListener('click', cardEventListener);
        setTimeout(() => {
          card.addEventListener('click', cardEventListener);
        }, resetTime.value * 1000 || 5000);
    };
  }
}
console.log('---------------');