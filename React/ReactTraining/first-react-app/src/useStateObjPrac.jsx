import React, { useState } from 'react';

function ObjPrac(){

  const [movie, setMovie] = useState(
    {genre: 'Action',
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


  return(<>

          <label htmlFor="">Title: 
            <input type="text" id="movieTitle" value={movie.title} onChange={handleTitleChange}/>
          </label>
          <br />
          <label htmlFor="">Released: 
            <input type="number" value={movie.releaseYear} onChange={handleYearChange}/>
          </label>
          <br />
          <label htmlFor="">Director: 
            <input type="text" value={movie.director} onChange={handleDirectorChange}/>
          </label>
          <br />
          <label htmlFor="">Genre: 
            <input type="text" value={movie.genre} onChange={handleGenreChange}/>
          </label>
          <br />
          <p>You choose the movie: {movie.title}. Produced in {movie.releaseYear}, directed by {movie.director}. Movie is in category of {movie.genre}</p>

        </>);
}

export default ObjPrac;