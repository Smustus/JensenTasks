import { useEffect, useState } from 'react'
import './App.css'
import SearchNote from './assets/components/SearchNotes/SearchNotes.jsx';
import DisplayNotes from './assets/components/DisplayNotes/DisplayNotes.jsx';
import CreateNote from './assets/components/CreateNote/CreateNote.jsx';

function App() {
  
  const [notesData, setNotesData] = useState([]);

  const [searchInput, setSearchInput] = useState('');
  
  async function fetchData(meth, endpoint, note){
    const BASE_URL = 'https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com'
    try {
      const response = await fetch(`${BASE_URL}/api/notes${endpoint}`, {
        method: meth,
        body: JSON.stringify(note), 
        headers: {
          'Content-Type': 'application/json'
        }})
      const data = await response.json();
      console.log(data.notes);
      data.notes ? setNotesData(data.notes) : setNotesData([])
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <header className="header">
        <h1 className="pageTitle">SwingNotes in react</h1>
      </header>
      <main className="main">
        <CreateNote searchInput={ searchInput } fetchData={ fetchData } />
        <section className='main__searchNdisplay'>
          <SearchNote  setSearchInput={ setSearchInput } searchInput={ searchInput } fetchData={ fetchData } />
          <DisplayNotes searchInput={ searchInput } fetchData={ fetchData } notesData={ notesData } setNotesData={ setNotesData }/>
        </section>
      </main>
    </>
  )
}

export default App
