import './Account.css';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


function Account(props){

  const { formInput } = props;

  const [changedInput, setChangedInput] = useState();

  useEffect(() => {
    console.log(formInput);
  }, [formInput]);

  const handleChangedInput = (e) => {
    setChangedInput(prevData => ({
      ...prevData,
      [id]: e.target.value
    }));
  }
  

  return(
    <>    
      <section className="accountContainer">
        <h2 className="accountContainer__navInfo">Ditt konto</h2>
        <form action="">
          <fieldset className="form__inputContainer">
            <label htmlFor="name">NAME</label>
            <input id="name" type="text" className="form__input" onChange={ handleChangedInput } required />
          </fieldset>
          <fieldset className="form__inputContainer">
            <label htmlFor="email">EMAIL</label>
            <input id="email" type="text" className="form__input" onChange={ handleChangedInput } required />
          </fieldset>
          <fieldset className="form__inputContainer">
            <label htmlFor="password">PASSWORD</label>
            <input id="password" type="text" className="form__input" onChange={ handleChangedInput } required/>
          </fieldset>
          <Link to="/account"><button type='submitBtn' className="submitBtn" onClick={ handleSubmitInput }>Sign me up!</button></Link>  
        </form>
      </section>
    </>
  );
}

export default Account;

