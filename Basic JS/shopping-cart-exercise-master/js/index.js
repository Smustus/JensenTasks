let shoppingCart = [];

document.querySelector('#open-cart').addEventListener('click', () => {
  document.querySelector('#cart').classList.toggle('hide');
});

function updateCart() {

  let cartProducts = '';

  for(let i = 0; i < shoppingCart.length; i++) {
    cartProducts += `<li><span class="product-title">Titel: </span>${shoppingCart[i]} <button class="removeBtn" data-index="${i}">X</button></li>`;
  }
  document.querySelector('#products').innerHTML = cartProducts;
  document.querySelector('#productsInCart').innerHTML = shoppingCart.length;
  console.log(cartProducts);
  addRemoveBtn()
}

function addRemoveBtn(){
  
  const removeBtns = document.querySelectorAll('.removeBtn');
  
  for(const btn of removeBtns){
    btn.addEventListener('click', (e) => {
      const getIndex = e.target.getAttribute('data-index');
      console.log(`Hej-${getIndex}`);
      shoppingCart.splice(getIndex, 1);
      updateCart();
    });
  }
}

function listProductsInCart() {
  
  let products = document.getElementsByTagName('button');

  for(let i = 0; i < products.length; i++) {
    products[i].addEventListener('click', (event) => {
      let product = event.target.parentNode.getAttribute('data-product');
      if(!shoppingCart.includes(product)){
        shoppingCart.push(product);
      } else return alert('Item is already in the cart');
      updateCart();
    });
  } 
}

listProductsInCart();
