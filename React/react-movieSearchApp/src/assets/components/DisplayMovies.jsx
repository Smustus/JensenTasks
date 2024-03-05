import MovieCard from "./MovieCard/MovieCard.jsx";

function DisplayMovies(props) {

  const { Poster, Title, Year, imdbID } = props;

  return (
      <>
        <MovieCard Poster={Poster} Title={Title} Year={Year} imdbID={imdbID}/>
      </>
  );
}

export default DisplayMovies;