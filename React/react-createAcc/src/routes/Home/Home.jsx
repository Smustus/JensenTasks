import './Home.css';
import { Link } from 'react-router-dom'

function Home(){
  return(
    <section className="home">
      <h3 className="home__text"></h3>
      <Link to="/registration"><button className='registerBtn'>Register account</button></Link>
    </section>
  );
}

export default Home;