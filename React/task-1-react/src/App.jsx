import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import AdaInfoText from './about.jsx'
import ImageAda from './image.jsx'

function App() {

  return (
    <>
      <div className='wrapper'>
        <ImageAda />
        <AdaInfoText />
      </div>
      
      
    </>
  )
}

export default App
