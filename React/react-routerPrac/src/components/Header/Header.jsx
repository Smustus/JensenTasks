import './Header.css';
import { BrowserRouter, Routes, Route, RouterProvider, Link } from 'react-router-dom';

import Home from '../../routes/Home/Home';
import About from '../../routes/About/About';
import Products from '../../routes/Products/Products';
import ErrorPage from '../../routes/ErrorPage/ErrorPage';

function Header(){
  return(
    <header>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;