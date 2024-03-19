import './Home.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function Home(){
  return(
    <>
      <h1>Home Page</h1>
      <Link to={ '/events' }>See events</Link>
    </>
  );
}

export default Home;