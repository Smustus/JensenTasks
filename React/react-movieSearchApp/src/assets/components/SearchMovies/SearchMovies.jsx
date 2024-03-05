import React, { useState } from 'react';
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


  const handleSearchInput = async () => {
    const search = document.querySelector('.searchSection__searchInput').value;
    console.log(search);
    if(!search){
      return
    } else {
      const searchData = await fetchData(search);
      console.log(searchData);
      setSearchResults(searchData);
    }
    
  }

  console.log(searchResults);

  const movies = searchResults.map((obj) => {
    return <DisplayMovies Poster={obj.Poster} Title={obj.Title} Year={obj.Year} imdbID={obj.imdbID}/>
  });
 

  return(
    <>
      <section className="searchSection">
        <input type="text" className="searchSection__searchInput" placeholder='Search movie' /* onChange={handleSearchInput} *//>
        <button className="searchSection__searchBtn" onClick={handleSearchInput}>Search</button>
      </section>
      <section className="movieSection">
        {movies}
      </section>
    </>
  );
}


export default SearchMovies;
