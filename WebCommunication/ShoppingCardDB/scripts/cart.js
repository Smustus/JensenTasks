//----------------------------------------------------------------------------
import { getDocs, collection, addDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { db } from "./main.js";

const cartCount = document.querySelector('.cartSection__cartCount');

const cartProducts = document.querySelector('.prodContainer__products');
const totalPriceContainer = document.querySelector('.prodContainer__price');
//----------------------------------------------------------------------------
//Products in cart template
class CartProductUI {
  constructor(id, title, price, parent) {
    this.productArticle = document.createElement('article');
    this.productArticle.classList.add('cartProductBox');
    parent.append(this.productArticle);

    this.title = document.createElement('h4');
    this.title.textContent = title;

    this.price = document.createElement('p');
    this.price.textContent = '$' + price;

    this.removeBtn = document.createElement('button');
    this.removeBtn.classList.add('removeBtn');
    this.removeBtn.textContent = 'X';
    this.removeBtn.addEventListener('click', () => {
      removeFromCart('cart', id)
    });

    this.productArticle.append(
      this.title,
      this.price,
      this.removeBtn
    );
  }
}
//----------------------------------------------------------------------------
//Add respective product to the cart collection in the DB
async function addToCart(title, description, price, dataCollection){
  const product = {
      title,
      description,
      price
    }
  await addDoc(collection(db, dataCollection), product);
  generateCartHTML()
}
//----------------------------------------------------------------------------
//Generate the HTML for the products in the cart
async function generateCartHTML() {
  try {
    const response = await getDocs(collection(db, 'cart'));
    cartProducts.textContent = '';
    const cartArr = [];
    response.forEach((prodInfo) => {
      cartArr.push({
        id: prodInfo.id,
        product: prodInfo.data()
      });
    });
    cartCount.textContent = cartArr.length; 
    let totalPrice = 0;

    for(const { id, product } of cartArr){
      totalPrice += Number(product.price * 100);
      new CartProductUI(id, product.title, product.price, cartProducts);
    }
    totalPriceContainer.textContent = 'Total cost: $' + totalPrice / 100;

  } catch (error) {
    console.log(error);
  }
}
//----------------------------------------------------------------------------
//Remove an item from the cart collection in the DB
async function removeFromCart(dataCollection, id){
  try {
    await deleteDoc(doc(db, dataCollection, id));
    generateCartHTML()
  } catch (error) {
    console.log(error);
  }
}
//----------------------------------------------------------------------------
export { addToCart, generateCartHTML };