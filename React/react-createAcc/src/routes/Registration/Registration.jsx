import { Link } from 'react-router-dom';
import './Registration.css';
import { useState } from 'react';

function Registration(props){

  const { formInput, setFormInput } = props;

  const [formMsg, setForMsg] = useState('');

  const handleFormInput = (e) => {
    const { id, value } = e.target;
    setFormInput(prevData => ({
      ...prevData,
      [id]: value
    }));
  }

  const handleSubmit = () => {
    !isValid ? setForMsg('Please enter all fields') : setForMsg('');
    setTimeout(() => {
      setForMsg('')
    }, 3000)
  }

  const { name, email, password } = formInput;
  const isValid = name && email && password;

  return(
    <section className="registerContainer">
      <h2 className="registerContainer__navInfo">Registrera dig för ett konto</h2>
      <form action="">
        <fieldset className="form__inputContainer">
          <label htmlFor="name">NAME</label>
          <input id="name" type="text" className="form__input" onChange={ handleFormInput } required />
        </fieldset>
        <fieldset className="form__inputContainer">
          <label htmlFor="email">EMAIL</label>
          <input id="email" type="email" className="form__input" onChange={ handleFormInput } required />
        </fieldset>
        <fieldset className="form__inputContainer">
          <label htmlFor="password">PASSWORD</label>
          <input id="password" type="password" className="form__input" onChange={ handleFormInput } required/>
        </fieldset>
        <p className="form__msg">{formMsg}</p>
        <Link to={isValid ? "/account" : ''}><button type='submitBtn' className="submitBtn" onClick={ handleSubmit }>Sign me up!</button></Link>  
        
        <Link to="/account"><button className="submitBtn">Skip</button></Link> 
      </form>
       
    </section>
  );
}

export default Registration;