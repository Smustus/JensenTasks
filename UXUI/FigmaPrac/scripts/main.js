import { hoodies, caps, tshirts, skateboards, wheels} from './products.js';
import { ProductUI, SingleProductUI } from './classes.js';

console.log(hoodies, caps, tshirts, skateboards, wheels);

const products = [...hoodies, ...caps, ...tshirts, ...skateboards, ...wheels];
console.log(products);

const productSection = document.querySelector('.main__productSection');
const singleProductSection = document.querySelector('.main__singleProductSection');


const prodNav = document.querySelector('.main__prodNav');

prodNav.addEventListener('click', (e) => {
  if(e.target.classList.contains('prodNavBtn__hoodies')){
    generateProducts(hoodies);
  }
  if(e.target.classList.contains('prodNavBtn__caps')){
    generateProducts(caps);
  }
  if(e.target.classList.contains('prodNavBtn__tshirts')){
    generateProducts(tshirts);
  }
  if(e.target.classList.contains('prodNavBtn__skateboards')){
    generateProducts(skateboards);
  }
  if(e.target.classList.contains('prodNavBtn__wheels')){
    generateProducts(wheels);
  }
});


function generateProducts(array){
  productSection.textContent = '';
  for(let i = 0; i < array.length; i++){
    new ProductUI(array[i].image, array[i].title, array[i].price, i, array[i].size, array[i].description);
  }
}
/* generateProducts(products); */

export { productSection, singleProductSection };
