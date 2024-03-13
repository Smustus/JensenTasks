import './CreateNote.css';
import { useEffect, useState } from 'react'

function CreateNote(props){
  
  const { fetchData, searchInput } = props;

  const [note, setNote] = useState({
    username: null, 
    title: null, 
    note: null
  });

  useEffect(() => {
    console.log(note);
  }, [note]);

  const handleNoteInput = (e) => {

    let { id, value } = e.target
 
    setNote(n => ({
      ...n, 
      [id]: value.toLowerCase()
    }));
  }

  const registerNote = () => {
    fetchData('POST', '', note)
    .then(() => {
      console.log('Note added');
      fetchData('GET', `/${searchInput}`);
    })
    .catch(error => console.log(error));
  }


  return(
    <>
      <section className="createNoteSection">
        <h3 className="createNoteSection">Post a note</h3>
        <section className="createNoteSection__inputSection">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" className="createNoteSection__username" placeholder='Enter username' onChange={ handleNoteInput } />
          <label htmlFor="title">Note&nbsp;title:</label>
          <input type="text" id="title" className="createNoteSection__title" placeholder='Enter title' onChange={ handleNoteInput } />
          <label htmlFor="note">Note&nbsp;text:</label>
          <input type="text" id="note" className="createNoteSection__note" placeholder='Enter note' onChange={ handleNoteInput } />
          <button className="createNoteSection__registerNoteBtn" onClick={ registerNote }>Register</button>
        </section>
      </section>
    </>
  );
}

export default CreateNote;