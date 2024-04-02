import { createContext, useEffect, useState } from 'react'
import './App.css'
import SearchNote from './assets/components/SearchNotes/SearchNotes.jsx';
import DisplayNotes from './assets/components/DisplayNotes/DisplayNotes.jsx';
import CreateNote from './assets/components/CreateNote/CreateNote.jsx';
import ToggleLightMode from './assets/components/ToggleLightMode/ToggleLightMode.jsx';

export const LightContext = createContext();
export const ChangeLightModeContext = createContext();
export const NotesData = createContext();

function App() {

  const [lightMode, setLightMode] = useState(false);
  
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

  lightMode ? document.body.classList.add('lightModeBodyOn') : document.body.classList.remove('lightModeBodyOn');

  return (
    <>
      <LightContext.Provider value={ lightMode }>
      <ChangeLightModeContext.Provider value={ setLightMode }>
        <header className={`${lightMode ? 'lightModeHeaderOn' : ''} header`}>
          <h1 className="pageTitle">SwingNotes in react</h1>
          <ToggleLightMode />
        </header>
        <main className={`${lightMode ? 'lightModeMainOn' : ''} main`}>
          <CreateNote searchInput={ searchInput } fetchData={ fetchData } />
          <NotesData.Provider value={ notesData }>
            <section className={`${lightMode ? 'lightModeSearchOn' : ''} main__searchNdisplay`}>
              <SearchNote  setSearchInput={ setSearchInput } searchInput={ searchInput } fetchData={ fetchData } />
              <DisplayNotes searchInput={ searchInput } fetchData={ fetchData } setNotesData={ setNotesData }/>
            </section>
          </NotesData.Provider>
        </main>
      </ChangeLightModeContext.Provider>
      </LightContext.Provider>
    </>
  )
}

export default App;
