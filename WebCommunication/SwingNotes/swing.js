import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, query, where, updateDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { firebaseConfig } from "./firebase.js";

const nameInput = document.querySelector('.nameInput');
const searchNoteBtn = document.querySelector('.searchNoteBtn');

const noteUser = document.querySelector('.inputUser');
const noteTitle = document.querySelector('.inputTitle');
const noteInput = document.querySelector('.inputNote');
const postNoteBtn = document.querySelector('.postNoteBtn');
const postText = document.querySelector('.postText');

const noteContainer = document.querySelector('.noteContainer');

let updatedContent = '';

  // Initialize Firebase DB
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


//--------------------------------------------------------
searchNoteBtn.addEventListener('click', () => {
  getUsernameData('notes');
});

postNoteBtn.addEventListener('click', () => {
  generateNote();
});

nameInput.addEventListener('keyup', (e) => {
  if(e.key === 'Enter'){
    getUsernameData('notes');
  }
});
 
noteUser.addEventListener('keyup', (e) => {
  if(e.key === 'Enter'){
    generateNote();
  }
});
//--------------------------------------------------------
//Generate a note, post it and fetch it from the DB

async function generateNote(){
  const userValue = noteUser.value.toLowerCase();
  const titleValue = noteTitle.value;
  const inputValue = noteInput.value;

  const note = {
    username: userValue,
    title: titleValue,
    note: inputValue
  }

  await postNote('notes', note);
  await getUsernameData('notes');

  showAction('Post added', 2000)
}

//--------------------------------------------------------
//Post the note to DB

async function postNote(dataCollection, note){
  note.username = document.querySelector('.nameInput').value.toLowerCase();
  await addDoc(collection(db, dataCollection), note);
}
//--------------------------------------------------------
//Fetch notes from the DB

async function getUsernameData(dataCollection) {

  const username = document.querySelector('.nameInput').value.toLowerCase();
  const usernameQuery = query(collection(db, dataCollection), where('username', '==', username));
  const userData = await getDocs(usernameQuery);
  const dataArr = [];
  userData.forEach((data) => {
      console.log(data.id);
      dataArr.push({
        id: data.id,
        note: data.data()
      });
  });
  generateNoteHTML(dataArr)
}
console.log(getUsernameData('notes'));

//--------------------------------------------------------
//Generate the corresponding HTML for the note

function generateNoteHTML(data){

  noteContainer.innerHTML = '';

  for(const { id, note } of data){
    console.log(id);
    console.log(note);
    const noteDiv = document.createElement('div');

    noteDiv.innerHTML = `
      <section class="noteSection">
      <h4>Author: ${note.username[0].toUpperCase() + note.username.substring(1)}</h4>
      <p>Title: ${note.title}</p>
      <p class="${id}">${note.note}</p>
      </section>
      <section class="btnSection">
      <button class="changeBtn">Change</button>
      <button class="removeBtn">Remove</button>
      </section>`;
    
    const changeBtn = noteDiv.querySelector('.changeBtn');
    const removeBtn = noteDiv.querySelector('.removeBtn');

    //Change note button
    changeBtn.addEventListener('click', () => {
      const noteContentP = document.querySelector(`.${id}`);
      noteContentP.innerHTML = `<input type="text" class="inputNote" id="note" placeholder="${note.note}">`;
      const input = noteContentP.querySelector('.inputNote');
      
      input.addEventListener('keyup', (e) => {
        if(e.key === 'Enter'){
          updatedContent = input.value;
          if (!updatedContent) {
            noteContentP.textContent = note.note;
          } else {
            console.log(updatedContent)
            noteContentP.textContent = updatedContent;
            changeNote('notes', id);
          }
        }
      });
    });
    //Remove note button
    removeBtn.addEventListener('click', () => {
      deleteNote('notes', id);
    });

    noteContainer.appendChild(noteDiv);
  }
}
//--------------------------------------------------------
//Modification of a current note in the DB

async function changeNote(dataCollection, noteID){
  const updatedNote = {
    note: updatedContent,
  };
  await updateDoc(doc(db, dataCollection, noteID), updatedNote);
  await getUsernameData('notes');
  showAction('Post changed', 2000);
}
//--------------------------------------------------------
//Delete a note in the DB

async function deleteNote(dataCollection, noteID){
  await deleteDoc(doc(db, dataCollection, noteID));
  await getUsernameData('notes');
  showAction('Post removed', 2000)
}

//--------------------------------------------------------
//Display text with action taken

function showAction(text, delay){
  setTimeout(() => {
    postText.textContent = text;
    postText.classList.remove('hidden');
  }, 0);
  
  setTimeout(() => {
    postText.classList.add('hidden');
  }, delay);
}