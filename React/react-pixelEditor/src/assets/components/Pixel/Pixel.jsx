import { useState } from 'react';
import './Pixel.css'

function Pixel(props){

  const { color } = props;
  console.log(color);

  const handleClick = (e) => {
    e.target.style.backgroundColor = color;
  }

  return(
    <div className="pixel" onClick={ handleClick }></div>
  );
}

export default Pixel;