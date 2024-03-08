import React, { useState, useEffect } from 'react'
import { TwitterPicker } from 'react-color';
import DrawingPanel from '../DrawingPanel/DrawingPanel.jsx';


function Editor(props){

  const [pixelColor, setPixelColor] = useState('#000000');

  const {columns, rows, handleReturn} = props;
  

  const selectPixelColor = (e) => {
    setPixelColor(e.hex);
  }

  useEffect(() => {
    console.log(pixelColor);
  }, [pixelColor]);

  return(
    <>
      <TwitterPicker onChangeComplete={ selectPixelColor } />
      <DrawingPanel columns={Number(columns)} rows={Number(rows)} color={pixelColor} />
      <button className="returnBtn" onClick={ handleReturn }>Return</button>
    </>
  );
}

export default Editor;