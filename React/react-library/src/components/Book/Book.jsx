import './Book.css';
import { useNavigate } from 'react-router-dom';

function Book(props) {

  const { id, title, author, color } = props.data;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/books/${id}`, { state: props.data });
  }


  return(
    <article className='book' style={{background: `linear-gradient(200deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)), ${color}`}} onClick={ handleClick }>
      <div className='book__authorAndTitleContainer'>
        <h4 className="book__title">{ title }</h4>
        <p className="book__author">{ author }</p>
      </div>
    </article>
  );
}

export default Book;