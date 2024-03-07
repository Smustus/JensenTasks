import { useState, useEffect } from 'react';
import './Row.css';
import Pixel from "../Pixel/Pixel.jsx";

function Row(props){
  
  const [column, setColumn] = useState();

  const { columns } = props;
  let i = 0;

 /*  do {
    setColumn(prevState => prevState, <Pixel />);
    i++;
  } while (i < 4);
 */

  useEffect(() => {
    console.log(column);
  }, [column]);

  return(
    <>
      <section className="row">
        {column}
      </section>
    </>
  );
}

export default Row;