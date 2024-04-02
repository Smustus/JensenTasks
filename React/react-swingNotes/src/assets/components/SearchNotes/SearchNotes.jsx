import './SearchNotes.css';
import { useEffect, useContext } from 'react'
import { LightContext } from '../../../App';
import { NotesData } from '../../../App';

function SearchNote(props){

  const { fetchData, searchInput, setSearchInput } = props;

  const lightMode = useContext(LightContext);
  const notesData = useContext(NotesData);

  useEffect(() => {
    fetchData('GET', `/${searchInput}`)
  }, [searchInput]);


  const handleSearchInput = (e) => {
    setSearchInput((e.target.value).toLowerCase());
  }

  return(
    <section className={`${lightMode ? 'lightModeSearchInputOn' : ''} ${notesData.length > 0 ? '' : 'empty'} searchInputContainer`}>
      <label htmlFor="searchInput">Search:</label>
      <input type="text" id='searchInput' className="searchInput" placeholder="Enter username" onChange={ handleSearchInput }/>
    </section>
  );
}

export default SearchNote;