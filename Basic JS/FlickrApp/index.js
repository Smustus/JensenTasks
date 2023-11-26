const searchSection = document.querySelector('.searchSection');
const searchInput = document.querySelector('.searchSection_input');
const searchBtn = document.querySelector('.searchSection_btn');
const imgSection = document.querySelector('.imgSection');
const nav = document.querySelector('.navSection');

const API_key = 'e2cc8fbc680581edce8d7e5877514a60';
const flickrURL = 'https://api.flickr.com/services/rest'

searchBtn.addEventListener('click', () => {
  if(searchInput.value.length){
    imgSection.classList.remove('hidden');
    genHTML();
  } else {
    nav.classList.add('hidden');
    imgSection.classList.add('hidden');
    imgSection.innerHTML = '';
    nav.innerHTML = '';
  }
});

searchInput.addEventListener('keyup', (e) => {
  if(e.key === 'Enter'){
    if(searchInput.value.length){
      imgSection.classList.remove('hidden');
      genHTML();
    } else {
      nav.classList.add('hidden');
      imgSection.classList.add('hidden');
      imgSection.innerHTML = '';
      nav.innerHTML = '';
    }
  }
});

//Get API data
async function getData(page){
  try {
    const response = await fetch(
      `${flickrURL}?method=flickr.photos.search&api_key=${API_key}&text=${searchInput.value}&per_page=15&page=${page ?? 1}&format=json&nojsoncallback=1&sort=interestingness-desc`);
    const data = await response.json();
    return data;
  } catch (error) {
    return 'Failed to fetch API'
  }
}

//Generate and display the HTML on the site after search
async function genHTML(page){
  try {
    imgSection.innerHTML = '';
    nav.innerHTML = '';
    const data = await getData(page);

    //Generate nav HTML
    const pages = data.photos.pages;
    const perPage = data.photos.perpage;
    const navAmount = Math.ceil(pages / perPage);
    if(navAmount > 50){
      for(let i = 1; i <= 50; i++){
        nav.classList.remove('hidden');
        new genNav(i);
      }
    } else {
      for(let i = 1; i <= navAmount; i++){
        nav.classList.remove('hidden');
        new genNav(i);
      }
    }

    //Generate images HTML
    const img = data.photos.photo;
    
    return img.map((photo) => {
      const imgURL = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`
      return new GenImage(imgURL);
    });
  } catch (error) {
    console.error('Error generating HTML:', error);
  }  
}

//Frame for generating images
class GenImage {
  constructor(srcURL){
    this.element = document.createElement('img');
    this.element.src = srcURL;
    this.element.addEventListener('click', () => {
      openModal(srcURL);
    });
    imgSection.append(this.element);
  }
}

//Frame for generating navigation elements
class genNav {
  constructor(page){
    this.element = document.createElement('a');
    this.element.textContent = `${page}`;
    this.element.classList.add('navElement');
    this.element.addEventListener('click', () => {
      genHTML(page)
    });
    nav.append(this.element);
  }
}

//Modal
function openModal(srcURL) {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.addEventListener('click', () => {
    modal.remove();
  });

  const modalContent = document.createElement('img');
  modalContent.src = srcURL;
  modalContent.classList.add('modalContent');

  modal.append(modalContent);
  document.body.append(modal);
  modal.style.display = 'block';
}


