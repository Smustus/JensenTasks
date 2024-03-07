import { useState, useEffect } from 'react';
import './Row.css';
import Pixel from "../Pixel/Pixel.jsx";

function Row(props){

  const { columns, color } = props;

  
  const arr = new Array(columns).fill(0);
 
  const column = arr.map(() => {
    return <Pixel color={color}/>;
  });

  return(
    <>
      <section className="row">
        {column}
      </section>
    </>
  );
}

export default Row;