  import React, { useState } from 'react';
  
  function UseStatePrac(){

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = (e) => {
      setName(e.target.value);
    }

    const clickEvent = () => {
      console.log(`Hello, ${name}. What can I help you with?`);
    }

    const updateAge = (inc) => {
      console.log(age);
      if(age < 0){
        setAge(0)
      } else if(inc !== 0){
        setAge(age + inc);
      } else if(inc === 0){
        setAge(inc)
      }
    }

    const toggleEmployed = () => {
      setIsEmployed(!isEmployed);
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
            <button onClick={clickEvent}>Set name</button>

            <p>
              Age: {age}
            </p>
            <input className="ageInput" placeholder="Enter age" value={age} onChange={(e) => setAge(Number(e.target.value))}></input>
            <button onClick={() => updateAge(+1)}>Increase age by 1</button>
            <button onClick={() => updateAge(-1)}>Decrease age by 1</button>
            <button onClick={() => updateAge(0)}>Reset age</button>

            <p>
              Employed: {isEmployed ? 'Yes' : 'No'}
            </p>
            <button onClick={toggleEmployed}>Toggle employed state</button>

          </section>

          <button className='createChar-Btn'>Create</button>

          <section className="createdCharsSection">
            <ol className="charList">
              <li>Item 1</li>
            </ol>
          </section>

        </section>
      </>
    );
  }
  export default UseStatePrac;