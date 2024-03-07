import './MovieCard.css'

function MovieCard(props){

  const { Poster, Title, Year, imdbID } = props;

  return(
    <>
      <article className="movieCard">
        <img src={Poster} alt="Movie poster" />
        <section className="movieCard__titleAndText">
          <div>
            <h3>{Title}</h3>
            <p>Released: {Year}</p>
          </div>
          <a href={`https://www.imdb.com/title/${imdbID}`} className="movieCard__imdbLink">IMDb</a>
        </section>
      </article>
    </>
  );
}

export default MovieCard;