import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [inputCount, setInputCount] = useState(0);

  useEffect(() => {
    countCheckboxInputs();
  }, []);

  useEffect(() => {
    console.log(`You have currently choosen ${count} / ${inputCount} foods`);
  }, [count]);

  const countCheckboxInputs = () => {
    const checkboxContainer = document.querySelector('.form__checkboxContainer');
    setInputCount((checkboxContainer.children).length);
  }
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  }

  const handleInput = (e) => {
    e.target.checked ? setCount(c => c + 1) : setCount(c => c - 1);
  }

  return (
    <>
      <section className="formSection">
        <form action="" className="form" onSubmit={ handleFormSubmit }>
        <fieldset className='form__checkboxContainer'>
          <div>
            <label htmlFor="burger">Hamburger</label>
            <input id="burger" type="checkbox" className="form__input" value="burger" onChange={ handleInput }/>
          </div>
          <div>
            <label htmlFor="cookies">Cookies</label>
            <input id="cookies" type="checkbox" className="form__input" value="cookies" onChange={ handleInput }/>
          </div>
          <div>
            <label htmlFor="salmon">Salmon</label>
            <input id="salmon" type="checkbox" className="form__input" value="salmon" onChange={ handleInput }/>
          </div>
          <div>
            <label htmlFor="pizza">Pizza</label>
            <input id="pizza" type="checkbox" className="form__input" value="pizza" onChange={ handleInput }/>
          </div>
          <div>
            <label htmlFor="gulach">Gulach</label>
            <input id="gulach" type="checkbox" className="form__input" value="gulach" onChange={ handleInput }/>
            </div>
          <div>
            <label htmlFor="soup">Soup</label>
            <input id="soup" type="checkbox" className="form__input" value="soup" onChange={ handleInput }/>
          </div>
        </fieldset>
        <button type='submit' className="submitBtn">Submit</button>
        </form>
      </section>
    </>
  )
}

export default App
