import './DetailedBookView.css';
import { useLocation, Link } from 'react-router-dom';

function DetailedBookView(){

  const data = useLocation();
  console.log(data.state);

  const { id, title, author, color, audience, plot, pages, publisher, year } = data.state;

  

  return(
    <>
      <section className="detailedBookSection">
        <article className='bookDetailed' style={{backgroundColor: color }} >
          <div className='bookDetailed__authorAndTitleContainer'>
            <h4 className="bookDetailed__title">{ title }</h4>
            <p className="bookDetailed__author">{ author }</p>
          </div>
        </article>
        <article className="bookInfo">
          <div className='bookDetailed__authorAndTitleContainer'>
            <h4 className="bookDetailed__title">{ title }</h4>
            <p className="bookDetailed__author">{ author }</p>
          </div>
          <p className="bookDetailed__description">{ plot }</p>
          <section className="bookInfo__randomInfo">
            <p className="randomInfo__audience">Audience: { audience }</p>
            <p className="randomInfo__year">First published: { year }</p>
            <p className="randomInfo__pages">Pages: { pages }</p>
            <p className="randomInfo__publisher">Publisher: { publisher }</p>
          </section>
          <button className="bookInfo__btn">Oh, I want to read it!</button>
        </article>
      </section>
      <Link to="/books">Back to books</Link>
    </>
  );
}

export default DetailedBookView;