  
  function Food(){
    
    const var1 = 'Shrimp';
    const var2 = 'Salmon';
    
    return(
      <ul>
        <li>{var1}</li>
        <li>{var2}</li>
        <li>{var1.slice(0, var1.length -1)}{var1[var1.length -1].toUpperCase()}</li>
      </ul>
    );
  }

  export default Food;