const storyTitle = document.querySelector('.storyTitle');
const storyText = document.querySelector('.storyText');
const btnContainer = document.querySelector('.btnContainer');
const startBtn = document.querySelector('.startBtn');
const backBtn1 = document.querySelector('.backBtn1');
const continueBtn1 = document.querySelector('.continueBtn-option-1');
const continueBtn2 = document.querySelector('.continueBtn-option-2');
const continueBtn3 = document.querySelector('.continueBtn-option-3');
const continueBtn4 = document.querySelector('.continueBtn-option-4');
const goBackBtn = document.querySelector('.goBackBtn');
const resetBtn = document.querySelector('.resetBtn');

let storyProgress = 0;

startBtn.addEventListener('click', () => {
  resetText();
  storyProgress++
  console.log(storyProgress);
  updateAll()
});

function progress_one(){
  storyProgress++
  console.log(storyProgress);
  updateAll()
};

function progress_two(){
  storyProgress += 2
  console.log(storyProgress);
  updateAll()
};

function progress_three(){
  storyProgress += 3
  console.log(storyProgress);
  updateAll()
};

function goBack(){
  storyProgress--
  console.log(storyProgress);
  updateAll()
};

function toEnd(){
  storyProgress = 16;
  console.log(storyProgress);
  updateAll()
};

function resetText(){
  storyTitle.textContent = '';
  storyText.textContent = '';
  startBtn.style.display = 'none';
  continueBtn1.style.display = 'inline';
  continueBtn2.style.display = 'inline';
  continueBtn3.style.display = 'inline';
  goBackBtn.style.display = 'inline';
  resetBtn.style.display = 'inline';
};

function removeEventListeners() {
  for(let i = 1; i < 4; i++){
    const button = document.querySelector(`.continueBtn-option-${i}`);
    button.removeEventListener('click', progress_one);
    button.removeEventListener('click', progress_two);
    button.removeEventListener('click', progress_three);
    button.removeEventListener('click', toEnd);
  }
};

function loadEventListeners(){
  backBtn1.addEventListener('click', goBack);
  continueBtn1.addEventListener('click', progress_one);
  continueBtn2.addEventListener('click', progress_two);
  continueBtn3.addEventListener('click', progress_three);
  continueBtn4.addEventListener('click', toEnd);
  goBackBtn.addEventListener('click', goBack);
  resetBtn.addEventListener('click', () => {
    window.location.reload();
  });
};

function updateAll(){
  storyProgession();
  removeEventListeners();
  loadEventListeners()
};

function storyProgession() {
  if(storyProgress === 0){
    window.location.reload();

  } else if(storyProgress === 1){
    storyText.textContent = 
    'Once upon a time, there was a little girl named Goldilocks. She went for a walk in the forest. Pretty soon, she came upon a house. She knocked and, when no one answered'
    backBtn1.style.display = 'none';
    continueBtn1.textContent = 'Open the door and walk in anyway';
    continueBtn1.style.display = 'inline';
    continueBtn2.style.display = 'none';
    continueBtn3.style.display = 'none';
    continueBtn4.textContent = 'Leave the house';
    continueBtn4.style.display = 'inline';
    
  } else if (storyProgress === 2) {
    storyText.textContent = 
    'At the table in the kitchen, there were three bowls of porridge. Goldilocks was hungry.'
    backBtn1.style.display = 'none';
    continueBtn1.textContent = 'Try the first bowl';
    continueBtn1.style.display = 'inline';
    continueBtn2.textContent = 'Try the second bowl';
    continueBtn2.style.display = 'inline';
    continueBtn3.textContent = 'Try the third bowl';
    continueBtn3.style.display = 'inline';
    continueBtn4.style.display = 'none';

  } else if (storyProgress === 3) {
    storyText.textContent = 
    'She tasted the porridge from the first bowl. "This porridge is too hot!" she exclaimed.'
    backBtn1.style.display = 'none';
    continueBtn1.textContent = 'Try the second bowl';
    continueBtn1.style.display = 'inline';
    continueBtn2.textContent = 'Try the third bowl';
    continueBtn2.style.display = 'inline';
    continueBtn3.textContent = 'Try the third bowl';
    continueBtn3.style.display = 'none';
    continueBtn4.style.display = 'none';
  
  } else if (storyProgress === 4) {
    storyText.textContent = 
    'She tasted the porridge from the second bowl. "This porridge is too cold," she said.'
    backBtn1.textContent = 'Try the first bowl';
    backBtn1.style.display = 'inline';
    continueBtn1.textContent = 'Try the third bowl';
    continueBtn1.style.display = 'inline';
    continueBtn2.textContent = 'Try the second bowl';
    continueBtn2.style.display = 'none';
    continueBtn3.textContent = 'Try the third bowl';
    continueBtn3.style.display = 'none';
    continueBtn4.style.display = 'none';

  } else if (storyProgress === 5) {
    storyText.textContent = 
    'So, she tasted the last bowl of porridge. "Ahhh, this porridge is just right," she said happily and she ate it all up.'
    backBtn1.style.display = 'none';
    continueBtn1.textContent = 'Continue';
    continueBtn1.style.display = 'inline';
    continueBtn2.textContent = 'Try the second bowl';
    continueBtn2.style.display = 'none';
    continueBtn3.textContent = 'Try the third bowl';
    continueBtn3.style.display = 'none';
    continueBtn4.style.display = 'none';

  } else if (storyProgress === 6) {
    storyText.textContent = 
    'After she´d eaten the three bears´ breakfasts, she decided she was feeling a little tired. So, she walked into the living room where she saw three chairs.'
    backBtn1.style.display = 'none';
    continueBtn1.textContent = 'Try the first chair';
    continueBtn1.style.display = 'inline';
    continueBtn2.textContent = 'Try the second chair';
    continueBtn2.style.display = 'inline';
    continueBtn3.textContent = 'Try the third chair';
    continueBtn3.style.display = 'inline';
    continueBtn4.style.display = 'none';

  } else if (storyProgress === 7) {
    storyText.textContent = 
    'This chair is too big!" she exclaimed.'
    backBtn1.style.display = 'none';
    continueBtn1.textContent = 'Try the second chair';
    continueBtn1.style.display = 'inline';
    continueBtn2.textContent = 'Try the third chair';
    continueBtn2.style.display = 'inline';
    continueBtn3.textContent = 'Try the third chair';
    continueBtn3.style.display = 'none';
    continueBtn4.style.display = 'none';

  } else if (storyProgress === 8) {
    storyText.textContent = 
    'So she sat in the second chair. "This chair is too big, too!" she whined.'
    backBtn1.textContent = 'Try the first chair';
    backBtn1.style.display = 'inline';
    continueBtn1.textContent = 'Try the third chair';
    continueBtn1.style.display = 'inline';
    continueBtn2.textContent = 'Try the second chair';
    continueBtn2.style.display = 'none';
    continueBtn3.textContent = 'Try the third chair';
    continueBtn3.style.display = 'none';
    continueBtn4.style.display = 'none';

  } else if (storyProgress === 9) {
    storyText.textContent = 
    'So she tried the last and smallest chair. "Ahhh, this chair is just right," she sighed. But just as she settled down into the chair to rest, it broke into pieces!'
    backBtn1.style.display = 'none';
    continueBtn1.textContent = 'Continue your search the house';
    continueBtn1.style.display = 'inline';
    continueBtn2.style.display = 'none';
    continueBtn3.style.display = 'none';
    continueBtn4.textContent = 'Run away!';
    continueBtn4.style.display = 'inline';

  } else if(storyProgress === 10){
    storyText.textContent = 
    'Goldilocks was very tired by this time, she went upstairs to the bedroom. There she found 3 beds'
    backBtn1.style.display = 'none';
    continueBtn1.textContent = 'Try the first bed';
    continueBtn1.style.display = 'inline';
    continueBtn2.textContent = 'Try the second bed';
    continueBtn2.style.display = 'inline';
    continueBtn3.textContent = 'Try the third bed';
    continueBtn3.style.display = 'inline';
    continueBtn4.style.display = 'none';

  } else if(storyProgress === 11){
    storyText.textContent = 
    'She lay down in the first bed, but it was too hard. '
    backBtn1.style.display = 'none';
    continueBtn1.textContent = 'Try the second bed';
    continueBtn1.style.display = 'inline';
    continueBtn2.textContent = 'Try the third bed';
    continueBtn2.style.display = 'inline';
    continueBtn3.style.display = 'none';
    continueBtn4.style.display = 'none';

  } else if(storyProgress === 12){
    storyText.textContent = 
    'Then she lay in the second bed, but it was too soft. '
    backBtn1.textContent = 'Try the first bed';
    backBtn1.style.display = 'inline';
    continueBtn1.textContent = 'Try the third bed';
    continueBtn1.style.display = 'inline';
    continueBtn2.style.display = 'none';
    continueBtn3.style.display = 'none';
    continueBtn4.style.display = 'none';

  } else if(storyProgress === 13){
    storyText.textContent = 
    'Then she lay down in the third bed and it was just right. Goldilocks fell asleep.'
    backBtn1.style.display = 'none';
    continueBtn1.textContent = 'Continue';
    continueBtn1.style.display = 'inline';
    continueBtn2.style.display = 'none';
    continueBtn3.style.display = 'none';
    continueBtn4.style.display = 'none';

  } else if(storyProgress === 14){
    storyText.textContent = 
    'As she was sleeping, the three bears came home. "Someone´s been eating my porridge," growled the Papa bear. "Someone´s been eating my porridge," said the Mama bear."Someone´s been eating my porridge and they ate it all up!" cried the Baby bear. "Someone´s been sitting in my chair," growled the Papa bear. "Someone´s been sitting in my chair," said the Mama bear. "Someone´s been sitting in my chair and they´ve broken it to pieces," cried the Baby bear.'
    backBtn1.style.display = 'none';
    continueBtn1.textContent = 'Continue';
    continueBtn1.style.display = 'inline';
    continueBtn2.style.display = 'none';
    continueBtn3.style.display = 'none';
    continueBtn4.style.display = 'none';

  } else if(storyProgress === 15){
    storyText.textContent = 
    'They decided to look around some more and when they got upstairs to the bedroom, Papa bear growled, "Someone´s been sleeping in my bed.” "Someone´s been sleeping in my bed, too" said the Mama bear. "Someone´s been sleeping in my bed and she´s still there!" exclaimed the Baby bear. Just then, Goldilocks woke up. She saw the three bears. She screamed, "Help!" And she jumped up and ran out of the room. Goldilocks ran down the stairs, opened the door, and ran away into the forest. She never returned to the home of the three bears.'
    backBtn1.style.display = 'none';
    continueBtn1.textContent = 'Continue';
    continueBtn1.style.display = 'inline';
    continueBtn2.style.display = 'none';
    continueBtn3.style.display = 'none';
    continueBtn4.style.display = 'none';

  } else if(storyProgress === 16){
    storyText.textContent = 
    'The End'
    backBtn1.style.display = 'none';
    continueBtn1.style.display = 'none';
    continueBtn2.style.display = 'none';
    continueBtn3.style.display = 'none';
    continueBtn4.style.display = 'none';
    goBackBtn.style.display = 'none';
  }
};

