import { useState } from 'react'
import './App.css'
import routes from './routes/Routes'
import { RouterProvider } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={ routes }/>
    </>
  )
}

export default App
