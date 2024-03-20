import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return(
    <>
      <h1>Home</h1>
      <Link to="/Books">To Books</Link>
    </>
  );
}

export default Home;