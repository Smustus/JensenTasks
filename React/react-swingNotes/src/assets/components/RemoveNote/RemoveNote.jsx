import { useEffect } from 'react';
import './RemoveNote.css';

function RemoveNote(props){

  const { id, fetchData, searchInput } = props;

  const deleteNote = () => {
    fetchData('DELETE', `/${id}`).then(() => {
      console.log('Note removed');
      fetchData('GET', `/${searchInput}`)
      .catch(error => console.log(error));
    });
  }

  return(
    <>
      <button className="btnSection__deleteNoteBtn" onClick={ deleteNote }>Delete</button>
    </>
  );
}

export default RemoveNote;