

function List(){

  const sportArray = ['Hockey', 'Football', 'Cricket', 'Running'];
  const sportObjArray = [
    {sport: 'Football', created: 1264}, 
    {sport: 'Cricket', created: 1704}, 
    {sport: 'Hockey', created: 2004},    
    {sport: 'Running', created: 1404}
  ];

  const listArr = sportArray.map((sport) => {
    return <li key={sport}>{sport}</li>
  });

  const objArr = sportObjArray.map((obj) => {
    return <li key={obj.sport}>{obj.sport},&nbsp;first done in {obj.created}</li>
  });

  return(
    <>
      <ul className="sportsList">{listArr}</ul>
      <ul className="sportsList">{objArr}</ul>
    </>
  );
}

export default List;