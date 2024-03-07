import React, { useState, useEffect } from 'react'
import { TwitterPicker } from 'react-color';
import DrawingPanel from '../DrawingPanel/DrawingPanel.jsx';


function Editor(props){

  const [pixelColor, setPixelColor] = useState('#000000');

  /* const [rows, setRows] = useState(1); */

  const {columns, rows} = props;
  

  const selectPixelColor = (e) => {
    setPixelColor(e.hex);
  }


  useEffect(() => {
    console.log(pixelColor);
  }, [pixelColor]);

  return(
    <>
      <TwitterPicker onChangeComplete={ selectPixelColor } />
      <DrawingPanel columns={columns} rows={rows} />
    </>
  );
}

export default Editor;