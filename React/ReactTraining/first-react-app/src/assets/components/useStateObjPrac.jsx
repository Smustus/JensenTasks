import React, { useState } from 'react';

function ObjPrac(){

  const [movie, setMovie] = useState({
    genre: 'Action',
    releaseYear: 2000,
    title: 'James Bond',
    director: 'Lee Tamahori' 
    });

  function handleTitleChange(e){
    setMovie(m => ({...m, title: e.target.value}));
  }

  function handleYearChange(e){
    setMovie(m => ({...m, releaseYear: e.target.value}));
  }

  function handleDirectorChange(e){
    setMovie(m => ({...m, director: e.target.value}));
  }

  function handleGenreChange(e){
    setMovie(m => ({...m, genre: e.target.value}));
  }

  function handleInputChange(e, type){
    setMovie(m => ({
      ...m,
      [type]: e.target.value
    }));
  }


  return(<>

          <label htmlFor="">Title: 
            <input type="text" id="movieTitle" value={movie.title} /* onChange={handleTitleChange} */ onChange={e => handleInputChange(e, 'title')} />
          </label>
          <br />
          <label htmlFor="">Released: 
            <input type="number" value={movie.releaseYear} /* onChange={handleYearChange} */ onChange={e => handleInputChange(e, 'releaseYear')} />
          </label>
          <br />
          <label htmlFor="">Director: 
            <input type="text" value={movie.director} /* onChange={handleDirectorChange} */ onChange={e => handleInputChange(e, 'director')} />
          </label>
          <br />
          <label htmlFor="">Genre: 
            <input type="text" value={movie.genre} /* onChange={handleGenreChange} */ onChange={e => handleInputChange(e, 'genre')} />
          </label>
          <br />
          <p>You choose the movie: {movie.title}. Produced in {movie.releaseYear}, directed by {movie.director}. Movie is in the category "{movie.genre}"</p>

        </>);
}

export default ObjPrac;