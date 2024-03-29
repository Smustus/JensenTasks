import './Form.css';

function Form(){
    
    // Event handler for form input changes
    const handleFormInput = (e) => {
      e.preventDefault();

      const classInput2 = document.querySelector('.form__classInput2nd');
      const classInput1 = document.querySelector('.form__classInput1st');
      const classInput = classInput2.checked ? classInput2.value : classInput1.value;

      const tickets = document.querySelector('.form__ticketInput').value;
      console.log(tickets);
      const title = document.querySelector('.form__titelInput').value;
      console.log(title);
      const sname = document.querySelector('.form__snameInput').value;
      console.log(sname);
      const lname = document.querySelector('.form__lnameInput').value;
      console.log(lname);
      const terms = document.querySelector('#terms').checked;
      console.log(terms);

      const formData = {
        class: classInput,
        tickets,
        title,
        sname,
        lname,
        terms
      }
      console.log(formData);
      }

  return(
    <>
      <section className="formContainer">

        <h2 className="formContainer__title cText">ÅKA&nbsp;TÅG</h2>
        <div className="formContainer__tFromBox">
          <h4 className="formContainer__tFrom">STOCKHOLM</h4>
          <p className="formContainer__tToTime">10.45</p>
          <figure className="fromContainer__arrowSymbol">&#10230;</figure>
        </div>
        <div className="formContainer__tToBox">
          <h4 className="formContainer__tTo">GÖTEBORG</h4>
          <p className="formContainer__tToTime">15.00</p>
        </div>

        <form action="" className="form">

          <fieldset className="form__radioField inputContainer">
            <fieldset className="form__radioFieldLeft inputContainer">
              <input type="radio" className="form__classInput2nd" id="class" value="2ndClass" name="class" ></input>
              <label htmlFor="" className="form__pickClassLabel">2:a&nbsp;klass</label>
            </fieldset>
            <fieldset className="form__radioFieldRight inputContainer">
              <input type="radio" className="form__classInput1st" id="class" value="1stClass" name="class" ></input>
              <label htmlFor="" className="form__pickClassLabel">1:a&nbsp;klass</label>
            </fieldset>
          </fieldset>

          <fieldset className="form__amountAndTitle inputContainer">
            <fieldset className="form__amount inputContainer vertical">
              <label htmlFor="tickets">Antal&nbsp;biljetter</label>
              <select className="form__ticketInput" id="tickets" >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </fieldset>

            <fieldset className="form__title inputContainer vertical">
              <label htmlFor="title">Titel</label>
              <select className="form__titelInput" id="title" >
                <option value="Mr">Mr.</option>
                <option value="Mrs">Mrs.</option>
                <option value="Victim">Victim</option>
              </select>
            </fieldset>
          </fieldset>
          
          
          <fieldset className="form__name inputContainer vertical ">
            <label htmlFor="sname">Förnamn</label>
            <input type="text" className="form__snameInput" id="sname" />
          </fieldset>

          <fieldset className="form__lastname inputContainer vertical">
            <label htmlFor="lname">Efternamn</label>
            <input type="text" className="form__lnameInput" id="lname" />
          </fieldset>

          <fieldset className="form__acceptTerms inputContainer">
            <input type="checkbox" name="" id="terms" />
            <label htmlFor="terms">Godkänner&nbsp;villkoren</label>
          </fieldset>

          <button onClick={handleFormInput} className='form__submitBtn'>Boka&nbsp;biljetter</button>

        </form>
      </section>
    </>
  ); 
}



export default Form;