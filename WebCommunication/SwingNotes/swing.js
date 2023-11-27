const nameInput = document.querySelector('.nameInput');
const searchNoteBtn = document.querySelector('.searchNoteBtn');

const noteUser = document.querySelector('.inputUser');
const noteTitle = document.querySelector('.inputTitle');
const noteInput = document.querySelector('.inputNote');
const postNoteBtn = document.querySelector('.postNoteBtn');
const postText = document.querySelector('.postText');

const noteContainer = document.querySelector('.noteContainer');

let updatedContent = '';

BASE_URL = 'https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com';

//--------------------------------------------------------
searchNoteBtn.addEventListener('click', () => {
  fetchNotes(nameInput.value);
});

postNoteBtn.addEventListener('click', () => {
  generateNote();
});
//--------------------------------------------------------
//Generate a note, post it and fetch it
async function generateNote(){
  const userValue = noteUser.value;
  const titleValue = noteTitle.value;
  const inputValue = noteInput.value;

  const note = {
    username: userValue,
    title: titleValue,
    note: inputValue
  }

  await postNote(note);
  await fetchNotes(nameInput.value)

  showAction('Post added', 2000)
}
//--------------------------------------------------------
//Post the note to the API
async function postNote(note){
  try {
    const response = await fetch(`${BASE_URL}/api/notes`, {
      method: "POST",
      body: JSON.stringify(note), 
      headers: {
        'Content-Type': 'application/json' 
        }
      });
  } catch (error) {
    console.log(error);
  }
}
//--------------------------------------------------------
//Fetch notes from the API
async function fetchNotes(userName){
  try {
    const response = await fetch(`${BASE_URL}/api/notes/${userName}`);
    const data = await response.json();
    console.log(data);
    generateNoteHTML(data)
  } catch (error) {
    console.log(error);
  }
}
//--------------------------------------------------------
//Generate the corresponding HTML for the note
function generateNoteHTML(data){
  const notesObj = data;
  console.log(notesObj);

  noteContainer.innerHTML = '';

  for(const note of notesObj.notes){
    const noteDiv = document.createElement('div');

    noteDiv.innerHTML = `
      <section class="noteSection">
      <h4>Author: ${note.username.toUpperCase()}</h4>
      <p>Title: ${note.title}</p>
      <p class="${note.id}">${note.note}</p>
      </section>
      <section class="btnSection">
      <button class="changeBtn">Change</button>
      <button class="removeBtn">Remove</button>
      </section>`;
    
    const changeBtn = noteDiv.querySelector('.changeBtn');
    const removeBtn = noteDiv.querySelector('.removeBtn');

    //Change note button
    changeBtn.addEventListener('click', () => {
      const noteContentP = document.querySelector(`.${note.id}`);
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
            changeNote(note.id);
          }
        }
      });
    });
    //Remove note button
    removeBtn.addEventListener('click', () => {
      deleteNote(note.id);
    });

    noteContainer.appendChild(noteDiv);
  }
}
//--------------------------------------------------------
//Modification of a current note in the API
async function changeNote(noteId){
  const updatedNote = {
    note: updatedContent,
  };
  try {
    const response = await fetch(`${BASE_URL}/api/notes/${noteId}`, {
      method: "PUT",
      body: JSON.stringify(updatedNote), 
      headers: {
        'Content-Type': 'application/json' 
      }
    }); 
  } catch (error) {
    console.log(error);
  }

  showAction('Post changed', 2000);
}
//--------------------------------------------------------
//Delete a note in the API
async function deleteNote(noteId){
  try {
   const response = await fetch(`${BASE_URL}/api/notes/${noteId}`, {
      method: 'DELETE'
    }); 
    fetchNotes(nameInput.value);
  } catch (error) {
    console.log(error);
  }

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