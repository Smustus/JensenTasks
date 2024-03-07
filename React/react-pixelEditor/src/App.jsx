
import React, { useState, useEffect } from 'react'
import Editor from "./assets/components/Editor/Editor.jsx";
import Pixel from "./assets/components/Pixel/Pixel.jsx";
import Row from './assets/components/Row/Row.jsx';


function App() {

  const [columns, setColumns] = useState(2);

  const [rows, setRows] = useState(2);

  return (
    <>
      <Editor columns={columns} rows={rows} />
      <Pixel />
      <Row columns={columns} />
    </>
  )
}

export default App;
