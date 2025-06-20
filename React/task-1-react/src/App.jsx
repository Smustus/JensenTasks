import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import AdaInfoText from './about.jsx'
import ImageAda from './image.jsx'
import BasicExample from './example.jsx'
import AdvancedExample from './example2.jsx'

function App() {

  return (
    <>
      <div className='wrapper'>
        <ImageAda />
        <AdaInfoText />
        <BasicExample />
        <AdvancedExample />
      </div>
      
      
    </>
  )
}

export default App
