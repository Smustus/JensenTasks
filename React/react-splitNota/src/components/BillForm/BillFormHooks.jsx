import { useState } from 'react';
import './BillForm.css';

function BillFormHook(){

  function replaceComa(str){
    return str.includes(',') ? str = str.replace(',', '.') : str;
  }

  function calculateBill(data){
    console.log(data);
    const { sum, amount, tip } = data; 
    const calc = (Number(sum) * 100) * (1 + (Number(tip) / 100)) / Number(amount) /100;
    console.log(parseFloat(calc, 2) + ' kr var');
    return calc;
  }

  const [calcParam, setCalcParam] = useState(0);
  
  function handleInputChange(e) {
    let { id, value } = e.target
    value = replaceComa(value)

    setCalcParam(prevData => ({
      ...prevData,
      [id]: value
    }));   
  };

  function handleFormSubmit(e) {
    e.preventDefault();
    const total = calculateBill(calcParam);
    console.log(total);
  }


  return(
    <>
      <section className="billFormContainer">
        <form className="form" onSubmit={handleFormSubmit} action="">
          <fieldset>
            <label htmlFor="sum">Summa</label>
            <input type="text" id="sum" className='form__totalSum' onChange={handleInputChange} />
          </fieldset>

          <fieldset>
            <label htmlFor="amount">Antal&nbsp;vänner</label>
            <input type="text" id="amount" className='form__friendAmount' onChange={handleInputChange} />
          </fieldset>

          <fieldset>
            <label htmlFor="tip">Dricks<span className="smallText">(%)</span></label>
            <input type="text" id="tip" className='form__tip' onChange={handleInputChange} />
          </fieldset>

          <button type="submit" className="form__submitBtn">Räkna</button>

        </form>
      </section>
    </>
  );
}

export default BillFormHook;