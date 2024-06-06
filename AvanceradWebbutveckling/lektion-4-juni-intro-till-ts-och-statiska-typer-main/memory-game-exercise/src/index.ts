document.addEventListener("DOMContentLoaded", function() {
  const cardContainer = document.querySelector('.memory-cards') as HTMLElement;
  const cardArr = Array.from(cardContainer.children) as HTMLElement[];
  console.log(cardArr);

  for (let i = 0; i < cardArr.length; i++) {
      const randomArrPos = Math.floor(Math.random() * cardArr.length);
      const saved = cardArr[i];
      cardArr[i] = cardArr[randomArrPos];
      cardArr[randomArrPos] = saved;
  }
  cardContainer.innerHTML = '';
  cardArr.forEach(card => {
      console.log(card);
      cardContainer.append(card);
      card.addEventListener('click', () => checkCard(card));
  });
});

let turnedCards = 0;
let cardOne: string = '';
let cardTwo: string = '';
let matchesFound: string[] = [];

function checkCard(card: HTMLElement): void {
  if (card.classList.contains('matched')) {
      return;
  }
  card.classList.toggle('back');
  card.classList.toggle('front');
  card.classList.toggle('flip');
  card.classList.toggle('matched');
  card.style.position = 'relative';
  addCard(card);
  const match = checkMatch();
  console.log(cardOne);
  console.log(cardTwo);
  if (match) {
      console.log('You got a match!');
      const num = card.getAttribute('data-card');
      if (num) addToMatchesFound(num);
      resetNonFoundCards();
      checkWinCondition();
  }
  console.log(matchesFound);
  if (checkWinCondition()) {
      document.querySelector('.close')?.addEventListener('click', () => {
          const overlay = document.querySelector('.overlay') as HTMLElement;
          overlay.classList.remove('show');
          resetCards();
      });
  }
}

function addToMatchesFound(num: string): void {
  if (!matchesFound.includes(num)) {
      matchesFound.push(num);
  }
}

function addCard(card: HTMLElement): void {
  turnedCards++;
  const cardNum = card.getAttribute('data-card');

  if (cardNum && !matchesFound.includes(cardNum)) {
      if (turnedCards <= 2 && !cardOne) {
          cardOne = cardNum;
          console.log('Card one picked!');
      } else if (turnedCards <= 2 && cardOne) {
          cardTwo = cardNum;
          console.log('Card two picked!');
      } else {
          turnedCards = 0;
          cardOne = '';
          cardTwo = '';
          resetNonFoundCards();
      }
  }
}

function checkMatch(): boolean {
  if (cardOne && cardOne === cardTwo) {
      return true;
  }
  return false;
}

function resetNonFoundCards(): void {
  const cards = document.querySelectorAll('.memory-card') as NodeListOf<HTMLElement>;
  turnedCards = 0;
  cardOne = '';
  cardTwo = '';
  cards.forEach(card => {
      if (!matchesFound.includes(card.getAttribute('data-card')!)) {
          if (card.classList.contains('front')) {
              card.classList.toggle('front');
          }
          if (card.classList.contains('back')) {
              card.classList.toggle('back');
          }
          if (card.classList.contains('flip')) {
              card.classList.toggle('flip');
          }
          if (card.classList.contains('matched')) {
              card.classList.toggle('matched');
          }
      }
  });
}

function resetCards(): void {
  const cards = document.querySelectorAll('.memory-card') as NodeListOf<HTMLElement>;
  cards.forEach(card => {
      if (card.classList.contains('front')) {
          card.classList.toggle('front');
      }
      if (card.classList.contains('back')) {
          card.classList.toggle('back');
      }
      if (card.classList.contains('flip')) {
          card.classList.toggle('flip');
      }
      if (card.classList.contains('matched')) {
          card.classList.toggle('matched');
      }
  });
}

function checkWinCondition(): boolean {
  const overlay = document.querySelector('.overlay') as HTMLElement;
  if (matchesFound.length === 8) {
      overlay.classList.add('show');
      return true;
  }
  return false;
}

