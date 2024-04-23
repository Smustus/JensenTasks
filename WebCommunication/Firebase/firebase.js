/*
Skapa ett Firebaseprojekt och konfigurera upp er applikation så den ansluts mot ert Firebaseprojekt.

Tutorial: https://firebase.google.com/docs/web/setup?authuser=0&hl=en#create-firebase-project-and-app (Du behöver enbart göra steg 1: Create a Firebase project and register your app).

Tutorial för att sätta upp en databas: https://firebase.google.com/docs/firestore/quickstart#web-modular-api (Du kan följa enbart första steget Create a Cloud Firestore database).

Använd detta script för att interagera med databasen (här finns också alla metoder du behöver importera):

import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

Du ska fortsätta spelet sten, sax och påse (det finns det i detta repo o i mappen rock-paper-scissors) och lägga till en highscore-lista som ska sparas i en firestore databas. Spelet spelas i omgångar av 3 och efter tre matcher så ska användarens statistik sparas i din firestore databas tillsammans med ett användarnamn som användaren får mata in i ett inputfält.

Såhär ska det se ut i din databas när du har sparat (Number och String menas att det ska vara ett värde av typen nummer eller en sträng).

{
    wins: Number,
    loses: Number,
    draws: Number,
    username: String
}

Det ska även på din sida gå och se highscorelistan.
*/

  // Import the functions you need from the SDKs you need
  
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { firebaseConfig } from "./firebaseConfig.js"
  

// Your web app's Firebase configuration


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getData(db, dbName) {
  const data = collection(db, dbName);
  const dataObj = await getDocs(data);
  const dataArr = [];
  dataObj.forEach((item) => {
      const data = item.data(); // Hämtar ut vårt objekt från vår collection
      dataArr.push(data);
  });
  return dataArr;
}

async function addData(db, dataCollection, newData) {
  await addDoc(collection(db, dataCollection), newData)
}


getData(db, 'Scientists');

export {db, getData, addData};