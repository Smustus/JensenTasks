import { useState } from 'react';
import SearchMovies from './assets/components/SearchMovies/SearchMovies.jsx'
import DisplayMovies from './assets/components/DisplayMovies.jsx';

function App() {

  const [movies, setMovies] = useState([]);
  

  return (
    <>
      <SearchMovies setMovies={ setMovies } />
      <DisplayMovies movies={ movies }/>
    </>
  )
}

export default App
