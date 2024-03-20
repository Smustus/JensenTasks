import './EventsPage.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Event from '../../components/Event/Event';

function EventsPage(){

  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData(){
    const response = await fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/where-its-at-api/events');
    const data = await response.json();
    setEventData(data);
  }

  

  const events = eventData.map((obj, index) => {
    return <Event key ={ index } data={ obj } />
          
  });

  return(
    <section className='eventPage'>
      <h2 className='eventPage__title'>Events</h2>
      <section className="eventSection">
        { events }
      </section>
      <Link to={ '/' } className='returnLink'>Tillbaka till startsidan</Link>
    </section>
  );
}

export default EventsPage;