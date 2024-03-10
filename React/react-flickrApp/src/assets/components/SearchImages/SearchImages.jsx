import { useState, useEffect } from "react";
import './SearchImages.css';
import searchIcon from '../../icons/magnifyingGlassWhite.svg';




function SearchImages(props){

  const { setSearchData } = props;
  console.log(props);

  const [searchInput, setSearchInput] = useState([]);

  
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  }

  async function fetchData(page){

    const API_key = 'e2cc8fbc680581edce8d7e5877514a60';
    const flickrURL = 'https://api.flickr.com/services/rest'
    try {
      const response = await fetch(
        `${flickrURL}?method=flickr.photos.search&api_key=${API_key}&text=${searchInput}&per_page=20&page=${page ?? 1}&format=json&nojsoncallback=1&sort=interestingness-desc`);
      const data = await response.json();
      console.log(data.photos.photo);
      setSearchData(data.photos.photo);
      return data.photos.photo;
    } catch (error) {
      console.log('Failed to fetch data. ' + error); 
    }
  }

  
  useEffect(() => {
    fetchData()
  }, [searchInput]);


  return(
    <section className="searchSection">
      <img src={ searchIcon } alt="" srcset="" />
      <input type="text" id="searchInput" className="searchInput" placeholder="Search photos" onChange={ handleSearchInput }/>
    </section>
  );
}


export default SearchImages;
