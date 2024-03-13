import './SearchNotes.css';
import { useEffect, useState } from 'react'

function SearchNote(props){

  const { fetchData, searchInput, setSearchInput } = props;


  useEffect(() => {
    fetchData('GET', `/${searchInput}`)
  }, [searchInput]);


  const handleSearchInput = (e) => {
    setSearchInput((e.target.value).toLowerCase());
  }

  return(
    <section className='searchInputContainer'>
      <label htmlFor="searchInput">Search:</label>
      <input type="text" id='searchInput' className="searchInput" placeholder="Enter username" onChange={ handleSearchInput }/>
    </section>
  );
}

export default SearchNote;