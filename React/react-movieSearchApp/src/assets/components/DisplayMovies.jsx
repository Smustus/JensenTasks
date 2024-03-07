import MovieCard from "./MovieCard/MovieCard.jsx";

function DisplayMovies(props) {

  const { Poster, Title, Year, imdbID } = props;

  const { movies } = props;
  
  const movieCards = movies.map((obj) => {
      return <MovieCard key={obj.imdbID} Poster={obj.Poster} Title={obj.Title} Year={obj.Year} imdbID={obj.imdbID} />;
    })
 

  return (
      <>
        {/* <MovieCard Poster={Poster} Title={Title} Year={Year} imdbID={imdbID}/> */}
        {/* <p className='searchMessage'>{searchMsg}</p> */}
        <section className="movieSection">
          {movieCards}
        </section>
      </>
  );
}

export default DisplayMovies;