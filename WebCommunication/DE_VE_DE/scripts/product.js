//----------------------------------------------------------------------------
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { db } from "./main.js";
import { addToCart } from "./cart.js";

const productContainer = document.querySelector('.main__productContainer');
//----------------------------------------------------------------------------
//PRODUCT PAGE RELATED
//Fetch the product data from the DB
async function getProductsData(dataCollection){
  try {
    const response = await getDocs(collection(db, dataCollection));
    const dataArr = [];
    response.forEach((prodInfo) => {
      console.log(prodInfo.data());
      dataArr.push({
        id: prodInfo.id,
        product: prodInfo.data()
      });
    });
    console.log(dataArr);
    generateProductHTML(dataArr);
    
  } catch (error) {
    console.log(error);
  }
}
//----------------------------------------------------------------------------
//Generate product HTML 
  function generateProductHTML(dataArr) {
    for(const { id, product } of dataArr){
      new ProductUI(id, product.title, product.description, product.price, productContainer);
    }
  }
//----------------------------------------------------------------------------
//Product template
class ProductUI {
  constructor(id, title, description, price, parent) {
    this.productArticle = document.createElement('article');
    this.productArticle.classList.add('productBox');
    parent.append(this.productArticle);

    this.title = document.createElement('h3');
    this.title.textContent = title;

    this.description = document.createElement('p');
    this.description.textContent = description;

    this.price = document.createElement('p');
    this.price.textContent = '$' + price;

    this.buyBtn = document.createElement('button');
    this.buyBtn.classList.add('buyBtn');
    this.buyBtn.textContent = 'Add to cart';
    this.buyBtn.addEventListener('click', () => {
      addToCart(title, description, price, 'cart');
    });

    this.productArticle.append(
      this.title,
      this.description,
      this.price,
      this.buyBtn
    );
  }
}
//----------------------------------------------------------------------------
export { getProductsData };