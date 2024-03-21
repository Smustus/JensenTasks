import './App.css'
import { useDispatch, useSelector } from "react-redux"
import { increment } from './reducers/counterReducer'
import { useEffect, useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  const dispatch = useDispatch();
  const counter = useSelector((count) => count.counter);

  useEffect(() => {
    setCount(counter);
    console.log(counter);
  }, [counter]);

  const handleClick = (value) => {
    dispatch(increment(value));
    
  }

  return (
    <>
      <h1>Counter</h1>
      <p>Current value: { count }</p>
      <button onClick={ () => handleClick(1) }>Increase by 1</button>
      <button onClick={ () => handleClick(-1) }>Decrease by 1</button>
    </>
  )
}

export default App
