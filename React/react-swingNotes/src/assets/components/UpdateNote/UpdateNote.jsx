import './UpdateNote.css';
import { useEffect, useState } from 'react'

function UpdateNote(props){

  const { id, notesData, fetchData, searchInput } = props;

  const [note, setNote] = useState({});

  useEffect(() => {

    fetchData('PUT', id, note)
      .then(() => {
        fetchData('GET', searchInput);
      })
      .catch(error => console.log(error));
    
  }, [note]);

  const modifyNote = async () => {
    if(notesData && notesData.length > 0){
      const post = notesData.find((obj) => {
        return obj.id === id;
      });
      console.log(post);
      setNote(post);
    }
    const newText = prompt('Enter new note text');
    if (newText !== null && newText !== '') {
      setNote({note: newText});
    }
  };

  return(
    <>
      
      <button className="btnSection__modifyNoteBtn" onClick={ modifyNote }>Modify</button>

    </>
  );
}

export default UpdateNote;