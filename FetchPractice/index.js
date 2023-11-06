const database = 'https://majazocom.github.io/Data/attendees.json';
 
  async function getData(database){
    const data = await fetch(database);
    console.log(data)
    const dataObj = await data.json()
    console.log(dataObj);
    return dataObj;
  }
  console.log(getData(database));
  
  function GenElement(type, content){
    this.element = document.createElement(type);
    this.element.innerText = content;
    document.body.append(this.element);
  }

  async function genHTML(data){
    const dataObj = await getData(data);
    console.log(dataObj);
    const genElements = dataObj.map(function(obj) {
      if(obj.attending && obj.allergies.length){
        return new GenElement('p', [obj.name + ': ' + obj.allergies]);
      }
    });
  }
  genHTML(database);