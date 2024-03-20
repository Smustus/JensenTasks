import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import EventsPage from './routes/EventsPage/EventsPage';
import OrderPage from './routes/OrderPage/OrderPage';
import OrderConfirm from './routes/OrderConfirm/OrderConfirm';



function App() {

  return (
    <>
    <Routes>
      <Route path={ '/' } element={ <Home /> } />
      <Route path={ '/events' } element={ <EventsPage /> } />
      <Route path={ '/buy' } element={ <OrderPage  /> } />
      <Route path={ '/tickets' } element={ <OrderConfirm  /> } />
    </Routes>
      
    </>
  )
}

export default App;
