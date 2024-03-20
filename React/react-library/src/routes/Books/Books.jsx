import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Books.css';
import Book from '../../components/Book/Book';

function Books() {

  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);

  async function fetchData(){
    const response = await fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books');
    const data = await response.json();
    setBookData(data);
  }

  const books = bookData.map((obj) => {
    return <Book key={ obj.id } data={ obj }/>
  });

  return(
    <>
     <h1>8 Classic Childrens books</h1>
     <section className="bookSection">
        { books }
     </section>
     <Link to="/">Home</Link>
    </>
  );
}

export default Books; 