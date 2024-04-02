import './Note.css';
import RemoveNote from '../RemoveNote/RemoveNote.jsx';
import UpdateNote from '../UpdateNote/UpdateNote.jsx';
import { useContext } from 'react';
import { LightContext } from '../../../App.jsx';


function Note(props){

  const { username, createdAt, title, note, id, notesData, fetchData, searchInput } = props;

  const lightMode = useContext(LightContext);

  return(
    <>
      <article className={`${lightMode ? 'lightModeNoteOn' : ''} note`}>
        <section className="note__infoSection">
          <h3 className="info__username">{username[0].toUpperCase() + username.slice(1)}</h3>
          <p className="info__createdDate">Posted:{createdAt}</p>
        </section>
        
        <section className='note__textSection'>
          <h3 className="textSection__noteTitle">{title[0].toUpperCase() + title.slice(1)}</h3>
          <p className="textSection__noteText">{note}</p>
        </section>

        <section className="note__btnSection">
          <RemoveNote id={id} fetchData={ fetchData } searchInput={ searchInput }  />
          <UpdateNote id={id} fetchData={ fetchData } searchInput={ searchInput } notesData={ notesData }  />
        </section>


      </article>
    </>
  );
}

export default Note;