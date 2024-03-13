import { useEffect, useState } from 'react'
import './App.css'
import SearchNote from './assets/components/SearchNotes/SearchNotes.jsx';
import DisplayNotes from './assets/components/DisplayNotes/DisplayNotes.jsx';
import CreateNote from './assets/components/CreateNote/CreateNote.jsx';
import UpdateNote from './assets/components/UpdateNote/UpdateNote.jsx';
import RemoveNote from './assets/components/RemoveNote/RemoveNote.jsx';
import Note from './assets/components/Note/Note.jsx';

function App() {

  
  const [notesData, setNotesData] = useState([]);

  const [searchInput, setSearchInput] = useState('');
  

  async function fetchData(meth, endpoint, note){
    const BASE_URL = 'https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com'
    try {
      const response = await fetch(`${BASE_URL}/api/notes/${endpoint}`, {
        method: meth,
        body: JSON.stringify(note), 
        headers: {
          'Content-Type': 'application/json'
        
        }})
      const data = await response.json();
      console.log(data.notes);
      data ? setNotesData(data.notes) : 'No data found'
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <SearchNote  setSearchInput={ setSearchInput } searchInput={ searchInput } fetchData={ fetchData } />
      <DisplayNotes searchInput={ searchInput } notesData={ notesData } fetchData={ fetchData } setNotesData={ setNotesData }/>
    </>
  )
}

export default App
