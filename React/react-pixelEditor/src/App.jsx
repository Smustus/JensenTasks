
import React, { useState, useEffect } from 'react'
import Editor from "./assets/components/Editor/Editor.jsx";
import StartInput from './assets/components/StartInput/StartInput.jsx';

function App() {

  const [columns, setColumns] = useState(16);

  const [rows, setRows] = useState(16);

  const [showInput, setShowInput] = useState(true);

  const [showEditor, setShowEditor] = useState(false);


  const handleCInput = (e) => {
    console.log(e.target.value);
    setColumns(e.target.value);
  }

  const handleRInput = (e) => {
    console.log(e.target.value);
    setRows(e.target.value);
  }

  const handleOnSubmit = () => {
    setShowInput(false);
    setShowEditor(true);
  }


  return (
    <>
      <h1>Pixel Editor</h1>

      {showInput && <StartInput handleCInput={ handleCInput } handleRInput={ handleRInput } handleOnSubmit={ handleOnSubmit }/>}

      {showEditor && <Editor columns={columns} rows={rows} />}
    
    </>
  )
}

export default App;
