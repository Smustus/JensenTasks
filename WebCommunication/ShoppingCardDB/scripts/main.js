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
//----------------------------------------------------------------------------
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
  import { firebaseConfig } from "./firebaseConfig.js";

  import { getProductsData } from "./product.js";
  import { generateCartHTML } from "./cart.js";
  import { makeOrder } from "./orders.js";
//----------------------------------------------------------------------------
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
getProductsData('products');
generateCartHTML()
//----------------------------------------------------------------------------
export { db };