import './SearchNotes.css';
import { useEffect, useState } from 'react'

function SearchNote(props){

  const { fetchData, searchInput, setSearchInput } = props;


  useEffect(() => {
    if(searchInput.length > 0){
      fetchData('GET', searchInput)
    }
  }, [searchInput]);


  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  }

  return(
    <>
      <input type="text" className="searchInput" placeholder="Search username" onChange={ handleSearchInput }/>
    </>
  );
}

export default SearchNote;