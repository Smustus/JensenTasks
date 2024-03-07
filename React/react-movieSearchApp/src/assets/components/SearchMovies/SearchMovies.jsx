import React, { useState, useEffect } from 'react';
import DisplayMovies from '../DisplayMovies.jsx';
import './SearchMovies.css'



function SearchMovies(props) {

  const [search, setSearch] = useState('');

  const [searchResults, setSearchResults] = useState([]);

  const [searchMsg, setSearchMsg] = useState('Search for a movie');

  const { setMovies } = props;


  const handleInput = async (e) => {
    
    setSearch(e.target.value);

    const BASE_URL = 'http://www.omdbapi.com/?apikey=37fe945a&';
  
    if(!search){
      return
    } else {
    try {
      const response = await fetch(`${BASE_URL}s=${search}}`);
      const data = await response.json(); 
      setSearchResults(data.Search)
    } catch (error) {
      console.log(error);
      }
    }
  }

  const handleSearchInput = () => {
    if (!searchResults || searchResults.length === 0) {
      setSearchMsg('Nothing found zZZ, try again');
    } else {
      setSearchMsg('');
      setMovies(searchResults);
    }
  }

  useEffect(() => {
    console.log(searchResults);
  }, [search]);
 
  return(
    <>
      <section className="searchSection">
        <input type="text" className="searchSection__searchInput" placeholder='Search movie' onChange={handleInput} />
        <button className="searchSection__searchBtn" onClick={handleSearchInput}>Search</button>
      </section>
      <p className='searchMessage'>{searchMsg}</p>
    </>
  );
}

export default SearchMovies;
