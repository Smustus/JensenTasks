import React, { useState } from 'react';
import './Form.css';

function Form(){
  
  const [formData, setFormData] = useState({
    class: '', // Initialize other form fields as needed
    tickets: '',
    title: 'Mr.',
    sname: '',
    lname: '',
    terms: false
  });
  
    // Event handler for form input changes
    const handleInputChange = (e) => {
      const { id, value, type, checked } = e.target;
      setFormData(prevData => ({
        ...prevData,
        [id]: type === 'checkbox' ? checked : value
      }));
    };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
 


  return(
    <>
      <section className="formContainer">

        <h2 className="formContainer__title cText">ÅKA&nbsp;TÅG</h2>
        <div className="formContainer__tFromBox">
          <h4 className="formContainer__tFrom">STOCKHOLM</h4>
          <p className="formContainer__tToTime">10.45</p>
        </div>
        <div className="formContainer__tToBox">
          <h4 className="formContainer__tTo">GÖTEBORG</h4>
          <p className="formContainer__tToTime">15.00</p>
        </div>

        <form action="" onSubmit={handleFormSubmit} className="form">

          <fieldset className="form__radioField inputContainer">
            <fieldset className="form__radioFieldLeft inputContainer">
              <input type="radio" className="form__classInput" id="2ndClass" value="2Class" name="class" onChange={handleInputChange}></input>
              <label htmlFor="secondClass" className="form__pickClassLabel">2:a&nbsp;klass</label>
            </fieldset>
            <fieldset className="form__radioFieldRight inputContainer">
              <input type="radio" className="form__classInput" id="1stClass" value="1Class" name="class" onChange={handleInputChange}></input>
              <label htmlFor="firstClass" className="form__pickClassLabel">1:a&nbsp;klass</label>
            </fieldset>
          </fieldset>

          <fieldset className="form__amountAndTitle inputContainer">
            <fieldset className="form__amount inputContainer vertical">
              <label htmlFor="tickets">Antal&nbsp;biljetter</label>
              <input type="number" className="form__ticketInput" id="tickets" onChange={handleInputChange}/>
            </fieldset>

            <fieldset className="form__title inputContainer vertical">
              <label htmlFor="title">Titel</label>
              <select className="form__titelInput" id="title" onChange={handleInputChange}>
                <option value="Mr">Mr.</option>
                <option value="Mrs">Mrs.</option>
                <option value="Victim">Victim</option>
              </select>
            </fieldset>
          </fieldset>
          
          
          <fieldset className="form__name inputContainer vertical ">
            <label htmlFor="sname">Förnamn</label>
            <input type="text" className="form__nameInput" id="sname" onChange={handleInputChange}/>
          </fieldset>

          <fieldset className="form__lastname inputContainer vertical">
            <label htmlFor="lname">Efternamn</label>
            <input type="text" className="form__nameInput" id="lname" onChange={handleInputChange}/>
          </fieldset>

          <fieldset className="form__acceptTerms inputContainer">
            <input type="checkbox" name="" id="terms" onChange={handleInputChange}/>
            <label htmlFor="terms">Godkänner&nbsp;villkoren</label>
          </fieldset>

          <button type="submit" className='form__submitBtn'>Boka&nbsp;biljetter</button>

        </form>
      </section>
    </>
  ); 
}



export default Form;