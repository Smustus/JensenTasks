import './BillForm.css';

function BillFormHook(){

  function replaceComa(str){
    return str.includes(',') ? str = str.replace(',', '.') : str;
  }

  function calculateBill(e){
    e.preventDefault();

    let sum = document.querySelector('.form__totalSum').value;
    sum = replaceComa(sum);
    console.log(sum);

    let friendAmount = document.querySelector('.form__friendAmount').value;
    friendAmount = replaceComa(friendAmount);
    console.log(friendAmount);

    let tip = document.querySelector('.form__tip').value;
    tip = replaceComa(tip);
    console.log(tip);

    const calc = (Number(sum * 100)) * (1 + Number(tip / 100)) / Number(friendAmount) /100;
    console.log(calc + ' kr var');
    return calc;

  }

  return(
    <>
      <section className="billFormContainer">
        <form className="form" action="">
          <fieldset>
            <label htmlFor="sum">Summa</label>
            <input type="text" id="sum" className='form__totalSum' />
          </fieldset>

          <fieldset>
            <label htmlFor="amount">Antal vänner</label>
            <input type="text" id="amount" className='form__friendAmount' />
          </fieldset>

          <fieldset>
            <label htmlFor="tip">Dricks<span className="smallText">(%)</span></label>
            <input type="text" id="tip" className='form__tip' />
          </fieldset>

          <button onClick={calculateBill} className="form__submitBtn">Räkna</button>

        </form>
      </section>
    </>
  );
}

export default BillFormHook;