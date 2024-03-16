import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './routes/Home/Home';
import About from './routes/About/About';
import Products from './routes/Products/Products';
import Product from './routes/Product/Product';
import ErrorPage from './routes/ErrorPage/ErrorPage';


function App() {

  return (
    <>
      <Header />
  
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/products' element={ <Products /> }>
            </Route>
            <Route path='/products/product/:id' element={ <Product /> } />
            <Route path='*' element={ <ErrorPage /> } />
        </Routes>
      
      <Footer />
    </>
  )
}

export default App
