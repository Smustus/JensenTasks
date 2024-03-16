import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home/Home'
import ErrorPage from './routes/ErrorPage/ErrorPage'
import Registration from './routes/Registration/Registration'
import Account from './routes/Account/Account'


function App() {

  const [formInput, setFormInput] = useState({
    name: null,
    email: null,
    password: null
  });
  

  return (
    <>
      <section className="welcomeContainer">
          <h3 className="welcomeContainer__title">Välkommen!</h3>
      </section>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/registration' element={ <Registration formInput={ formInput } setFormInput={ setFormInput }/> } />
        <Route path='/account' element={ <Account formInput={ formInput } /> } />
        <Route path='*' element={ <ErrorPage /> } />
      </Routes>
    </>
  )
}

export default App
