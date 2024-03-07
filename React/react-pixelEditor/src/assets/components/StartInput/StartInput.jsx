import './StartInput.css';

function StartInput(props){

  const { handleCInput, handleRInput, handleOnSubmit } = props;

  return(
    
    <section className="inputContainer">
      <label htmlFor="columnsInput">Columns:</label>
      <input type="text" className="columnsInput" id="columnsInput" onChange={ handleCInput } />
      <label htmlFor="rowsInput">Rows:</label>
      <input type="text" className="rowsInput" id="rowsInput" onChange={ handleRInput } />
      <button className="submitBtn" onClick={ handleOnSubmit } >Submit</button>
    </section>
  );
}

export default StartInput;