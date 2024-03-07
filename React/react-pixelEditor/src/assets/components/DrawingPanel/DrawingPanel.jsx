import { useEffect, useState } from "react";
import Row from "../Row/Row.jsx";

function DrawingPanel(props){

  console.log(props);
  const [panel, setPanel] = useState();

  const {columns, rows} = props;

  /* const drawPanel = () =>{
    for(let i = 0; i <= rows; i++){
      setPanel(prevState => prevState, <Row />);
    }
  } */

 /*  do {
    setPanel(prevState => prevState, <Row />);
  } while (condition)*/

  useEffect(() => {
    console.log(panel);
  }, [panel]);
  

  const drawingPanel = '';

  return(
    <>
      <section className="drawingPanel">
        {drawingPanel}
      </section>
    </>
  );
}

export default DrawingPanel;