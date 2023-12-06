  /*
  I denna övning ska du göra en webbsida enligt designen som du kan på bilden nedanför (du kan skippa bilden på Sherlock). Det ska gå och hämta produkter från din databas i Firebase (du kan lägga till produkterna direkt i gränsnittet i Firebase) och visa dessa på din sida. Du får själva bestämma vad produkterna ska vara för några (böcker, mobiltelefoner etc), se nedan vad varje produkt ska ha för fält.

  Därefter ska man kunna lägga till en produkt i en varukorg och denna varukorg ska också sparas i Firebase i en annan collection. Du ska alltså ha två collections en för produkterna och en för varukorgen.

  Det ska även gå att ta bort en produkt från varukorgen.

  Produkt (följande fält ska finnas för varje produkt)

      Titel
      Beskrivning
      Pris

  Level up

Lägg till en knapp så att man kan "lägga en beställning" denna beställning ska sparas i en ny collection in din databas med alla valda produkter samt totalsumman för alla produkter.
*/
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
  import { firebaseConfig } from "./firebaseConfig.js";

  import { getProductsData } from "./product.js";
  import { generateCartHTML } from "./cart.js";
  import { makeOrder } from "./orders.js";


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const cartSection = document.querySelector('.header__cartSection');

  const cartContainer = document.querySelector('.cartSection__prodContainer');
  
  const orderBtn = document.querySelector('.orderBtn');

//----------------------------------------------------------------------------
  //Event listeners 
  cartSection.addEventListener('click', () => {
    cartContainer.classList.toggle('hidden');
  });  
  
  orderBtn.addEventListener('click', async () => {
    await makeOrder();
    generateCartHTML();
  });

//----------------------------------------------------------------------------
  //Fetch the product data from the DB
 /*  async function getProductsData(dataCollection){
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
  } */

//----------------------------------------------------------------------------
/*   //Send the cart products to the order collection in the DB and then empty the current cart
  async function makeOrder() {
    try {
      const response = await getDocs(collection(db, 'cart')); //Take item collection in cart
      const dataArr = [];
      let totalPrice = 0;
      response.forEach((prodInfo) => {
        console.log(prodInfo.data());
        totalPrice += prodInfo.data().price * 100
        dataArr.push(prodInfo.data());
      });
      console.log(dataArr);
  
      await addDoc(collection(db, 'order'), {
        products: dataArr, 
        totalPrice: totalPrice / 100
      });

      response.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });

      alert(`Order confirmed. Your total was $${totalPrice / 100}`);
    } catch (error) {
      console.log(error);
    }
  } */

//----------------------------------------------------------------------------
//PRODUCT PAGE RELATED
  //Generate product HTML 
  /* 
  function generateProductHTML(dataArr) {
    for(const { id, product } of dataArr){
      new ProductUI(id, product.title, product.description, product.price, productContainer);
    }
  }
  //-------------------------------
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
  } */

  //----------------------------------------------------------------------------
  //CART RELATED
  
  /* //Add respective product to the cart collection in the DB
  async function addToCart(title, description, price, dataCollection){
    const product = {
        title,
        description,
        price
      }
    await addDoc(collection(db, dataCollection), product);
    generateCartHTML()
  }

//-------------------------------
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
  //-------------------------------
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
  //-------------------------------
  //Remove an item from the cart collection in the DB
  async function removeFromCart(dataCollection, id){
    try {
      await deleteDoc(doc(db, dataCollection, id));
      generateCartHTML()
    } catch (error) {
      console.log(error);
    }
  } */

//----------------------------------------------------------------------------

getProductsData('products');
generateCartHTML()

export { db };