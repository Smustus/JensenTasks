  import React, { useState, useEffect } from 'react';
  
  function UseStatePrac(){

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const [character, setCharacter] = useState({});
    const [charListArr, setCharListArr] = useState([]);

    const updateName = (e) => {
      console.log(e.target.value);
      setName(e.target.value);
    }

    const clickEvent = () => {
      console.log(`Hello, ${name}. What can I help you with?`);
    }

    const updateAge = (inc) => {
      setAge(a => a + inc);
    
    }

    const toggleEmployed = () => {
      setIsEmployed(!isEmployed);
    }

    const addChar = () => {
      if(name.length > 0 && age > 0){
        setCharacter({
          name,
          age,
          isEmployed
        });
      }
    }

    const removeChar = (index) => {
      const updatedCharArr = charListArr.filter((_, i) => {
        return i !== index
      });
      setCharListArr(updatedCharArr);
    }

    useEffect(() => {
      console.log(character);
      if (Object.keys(character).length !== 0) {
      setCharListArr(prevChars => [...prevChars, character]);
      }
    }, [character]);

    const generateCharList = () => {
      return charListArr.map((char, index) => {
        return <li key={index}>
                  {char.name}, Age: {char.age}, Employed: {char.isEmployed ? 'Yes' : 'No'}
                  <button className='delete-btn' onClick={ () => removeChar(index) }>X</button>
                </li>
        });
      }

    return(
      <>
        <section className="createCharSection">

          <section className='person-Section'>

            <p>
              Name: {name}
            </p>
            <input className="nameInput" placeholder="Enter a name" /* value={name}  */onChange={updateName}></input>
            <br></br>
            <button onClick={clickEvent}>Log msg</button>

            <p>
              Age: {age}
            </p>
            <input className="ageInput" placeholder="Enter age" onChange={(e) => setAge(parseFloat(e.target.value))}></input>
            <button onClick={() => updateAge(+1)}>Increase age by 1</button>
            <button onClick={() => updateAge(-1)}>Decrease age by 1</button>
            <button onClick={() => setAge(0)}>Reset age</button>

            <p>
              Employed: {isEmployed ? 'Yes' : 'No'}
            </p>
            <button onClick={toggleEmployed}>Toggle employed state</button>

          </section>

          <button className='createChar-Btn' onClick={addChar}>Create</button>

          <section className="createdCharsSection">
            <ul className="charList">
              {generateCharList()}
            </ul>
          </section>

        </section>
      </>
    );
  }
  export default UseStatePrac;