import './Note.css';
import { useState } from 'react';
import RemoveNote from '../RemoveNote/RemoveNote.jsx';
import UpdateNote from '../UpdateNote/UpdateNote.jsx';


function Note(props){

  const { username, createdAt, title, note, id, notesData, setNotes, setNotesData, fetchData, searchInput } = props;

  /* const [noteText, setNoteText] = useState(note); */
  

  return(
    <>
      <article className="note">
        <section className="note__infoSection">
          <h3 className="info__username">{username}</h3>
          <p className="info__created">{createdAt}</p>
        </section>
        
        <section className='note__textSection'>
          <h3 className="textSection__noteTitle">{title}</h3>
          <p className="textSection__noteText">{note}</p>
        </section>

        <section className="note__btnSection">
          <RemoveNote id={id} fetchData={ fetchData } searchInput={ searchInput }  />
          <UpdateNote id={id} notesData={ notesData } setNotes={ setNotes } setNotesData={ setNotesData } fetchData={ fetchData } searchInput={ searchInput }  />
        </section>


      </article>
    </>
  );
}

export default Note;