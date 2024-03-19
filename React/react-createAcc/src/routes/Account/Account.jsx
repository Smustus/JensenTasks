import './Account.css';
import { useEffect, useState } from "react";

function Account(props){

  const { formInput, setFormInput } = props;

  const [accountInfo, setAccountInfo] = useState(false);

  const [btnMsg, setBtnMsg] = useState('Ändra');

  const [changedInput, setChangedInput] = useState(formInput);

  const [handlePass, setHandlePass] = useState(); 

  useEffect(() => {
    console.log(formInput);
    handlePassword();
  }, [formInput, accountInfo, handlePass]);

  //State function to handle new input
  const handleChangedInput = (e) => {
    const { id, value } = e.target;
    setChangedInput(prevData => ({
      ...prevData,
      [id]: value
    }));
  }

  //Whenever the user want to change the account data
  const handleChangeBtn = () => {
    setAccountInfo(true);
    setBtnMsg('Spara');
  }

  //Whenever the new data is submitted it updates the forminput variable and change view for the user
  const handleSubmitInput = (e) => {
    e.preventDefault();
    if(changedInput){
      setFormInput(changedInput)
    }
    setAccountInfo(false);
    setBtnMsg('Ändra');
  }

  //Turn the password into corresponding amount of *
  const handlePassword = () => {
    const length = (formInput.password).length;
    const symbol = '*'
    const newPass = symbol.repeat(length);
    setHandlePass(newPass)
  }

  return(
    <>    
      <section className="accountContainer">
        <h2 className="accountContainer__navInfo">Ditt konto</h2>

        {!accountInfo && 
        <section className="accountContainer__accountData">
          <fieldset className="accountData__container">
            <h4>NAME</h4>
            <p className="accountData__text">{ formInput.name }</p>
          </fieldset>
          <fieldset className="accountData__container">
            <h4>EMAIL</h4>
            <p className="accountData__text">{ formInput.email }</p>
          </fieldset>
          <fieldset className="accountData__container">
            <h4>PASSWORD</h4>
            <p className="accountData__text">{ handlePass }</p>
          </fieldset>
          <button type='submitBtn' className="changeBtn" onClick={ handleChangeBtn }>{ btnMsg }</button> 
        </section>
        }
        

        {accountInfo && 
        <form action="">
          <fieldset className="form__inputContainer">
            <label htmlFor="name">NAME</label>
            <input id="name" type="text" className="form__input" onChange={ handleChangedInput } />
          </fieldset>
          <fieldset className="form__inputContainer">
            <label htmlFor="email">EMAIL</label>
            <input id="email" type="text" className="form__input" onChange={ handleChangedInput } />
          </fieldset>
          <fieldset className="form__inputContainer">
            <label htmlFor="password">PASSWORD</label>
            <input id="password" type="password" className="form__input" onChange={ handleChangedInput } />
          </fieldset>
         <button type='submitBtn' className="submitBtn" onClick={ handleSubmitInput }>{ btnMsg }</button> 
        </form>
        }
        
      </section>
    </>
  );
}

export default Account;

