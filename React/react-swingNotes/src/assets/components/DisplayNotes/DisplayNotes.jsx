import { useContext, useEffect, useState } from 'react';
import './DisplayNotes.css';
import Note from '../Note/Note';
import { LightContext } from '../../../App';
import { NotesData } from '../../../App';

function DisplayNotes(props){

  const lightMode = useContext(LightContext);
  const notesData = useContext(NotesData);

  const { fetchData, searchInput } = props;

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if(notesData && notesData.length > 0){
      const loop = notesData.map((obj) => {
        return <Note key={obj.id}  id={obj.id} username={obj.username} createdAt={obj.createdAt} title={obj.title} note={obj.note} notesData={notesData} fetchData={fetchData} searchInput={searchInput} />
      });  
      setNotes(loop);
    } else {
      setNotes([]);
    }
  }, [notesData]);

  return(
    <>
      <section className={`${lightMode ? 'lightModeNoteSectionOn' : ''} noteSection`}>{ notes }</section>
    </>
  );
}

export default DisplayNotes;