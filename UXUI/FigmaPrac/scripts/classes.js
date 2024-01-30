import { productSection, singleProductSection } from "./main.js";

class ProductUI {
  constructor(image, title, price, index, size, description){
    this.product = document.createElement('article');
    this.product.classList.add('main__product');
    this.product.classList.add(`product-${index}`);

    this.picture = document.createElement('img');
    this.picture.src = image;

    this.title = document.createElement('h2');
    this.title.textContent = title;

    this.price = document.createElement('h4');
    this.price.textContent = price;

    this.product.append(
      this.picture,
      this.title,
      this.price
    );

    this.product.addEventListener('click', () => {
      window.location.href = 'singleProduct.html';
      /* singleProductSection.textContent = ''; */
      productSection.textContent = '';
      console.log(title);
      new SingleProductUI(image, title, price, size, description, 'Add to cart');
    });

    productSection.append(this.product);
  }
}

class SingleProductUI {
  constructor(image, title, price, size, description, btnText){
    this.product = document.createElement('article');
    this.product.classList.add('main__singleProduct');

    this.picture = document.createElement('img');
    this.picture.src = image;

    this.title = document.createElement('h2');
    this.title.textContent = title;

    this.price = document.createElement('h4');
    this.price.textContent = price;

    this.size = document.createElement('h4');
    this.size.textContent = size;

    this.description = document.createElement('p');
    this.description.textContent = description;

    this.cartBtn = document.createElement('button');
    this.cartBtn.textContent = btnText;
    this.cartBtn.classList.add('cartBtn');

    this.product.append(
      this.picture,
      this.title,
      this.price,
      this.size,
      this.description,
      this.cartBtn
    );

    /* singleProductSection.append(this.product); */
    productSection.append(this.product);
  }
}

export { ProductUI, SingleProductUI };