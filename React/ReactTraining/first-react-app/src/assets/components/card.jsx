import hamsterPic from '../pictures/goldenHamster.jpg'
import PropTypes from 'prop-types';

function Card(prop){
  return(
    <article className="card">
      <img src={hamsterPic} alt="Picture of a hamster" />
      <h2 className='card-title'>{prop.title[0].toUpperCase() + prop.title.slice(1)}</h2>
      <p className='card-year'>{prop.year}</p>
      <p className='card-text'>{prop.text}</p>
    </article>
  );
}
Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  year: PropTypes.number,
}
Card.defaultProps = {
  title: 'Card-title',
  text: 'Card text',
  year: 0,
}

export default Card;