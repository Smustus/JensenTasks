import { useEffect, useState } from "react";
import './DrawingPanel.css';
import Row from "../Row/Row.jsx";

function DrawingPanel(props){

  console.log(props);
  

  const {columns, rows, color} = props;

  const arr = new Array(rows).fill(0);
  console.log(arr);
 
  const drawingPanel = arr.map(() => {
    return <Row columns={columns} color={color} />;
  });

  console.log(drawingPanel);


  return(
    <>
      <section className="drawingPanel">
        {drawingPanel}
      </section>
    </>
  );
}

export default DrawingPanel;