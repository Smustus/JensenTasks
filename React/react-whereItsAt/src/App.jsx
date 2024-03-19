import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import EventsPage from './routes/EventsPage/EventsPage';
import OrderPage from './routes/OrderPage/OrderPage';
import OrderConfirm from './routes/OrderConfirm/OrderConfirm';



function App() {
  
  const [clickedEvent, setClickedEvent] = useState([])

  return (
    <>
    <Routes>
      <Route path={ '/' } element={ <Home /> } />
      <Route path={ '/events' } element={ <EventsPage clickedEvent={ clickedEvent } setClickedEvent={ setClickedEvent }/> } />
      <Route path={ '/buy' } element={ <OrderPage clickedEvent={ clickedEvent } /> } />
      <Route path={ '/tickets' } element={ <OrderConfirm clickedEvent={ clickedEvent } /> } />
    </Routes>
      
    </>
  )
}

export default App;
