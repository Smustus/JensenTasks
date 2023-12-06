import { getDocs, collection, addDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { db } from "./main.js";

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
}

export { makeOrder };