import React, { useState, useEffect } from 'react';
import DisplayMovies from '../DisplayMovies.jsx';
import './SearchMovies.css'


async function fetchData(search){

  const BASE_URL = 'http://www.omdbapi.com/?apikey=37fe945a&'  

  try {
    const response = await fetch(`${BASE_URL}s=${search}}`);
    const data = await response.json(); 
    return data.Search;
  } catch (error) {
    console.log(error);
  }
}


function SearchMovies() {

  const [searchResults, setSearchResults] = useState([]);

  const [searchMsg, setSearchMsg] = useState('Search for a movie');

  let movies = [];

  const handleSearchInput = async () => {
    const search = document.querySelector('.searchSection__searchInput').value;

    if(!search){
      return
    } else {
      const searchData = await fetchData(search);
      console.log(searchData);
      setSearchResults(searchData);

      if (!searchData || searchData.length === 0) {
        setSearchMsg('Nothing found zZZ, try again');
      } else {
        setSearchMsg('');
      }
    }
  }

  if(searchResults){
    movies = searchResults.map((obj) => {
      return <DisplayMovies key={obj.imdbID} Poster={obj.Poster} Title={obj.Title} Year={obj.Year} imdbID={obj.imdbID} />;
    })
  }
 
  return(
    <>
      <section className="searchSection">
        <input type="text" className="searchSection__searchInput" placeholder='Search movie' /* onChange={handleSearchInput} *//>
        <button className="searchSection__searchBtn" onClick={handleSearchInput}>Search</button>
      </section>
      <p className='searchMessage'>{searchMsg}</p>
      <section className="movieSection">
        {movies}
      </section>
    </>
  );
}

export default SearchMovies;
