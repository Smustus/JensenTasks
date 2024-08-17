import { useEffect, useState } from 'react'
import './App.css'
import { getPosition, fetchNearby, fetchTimetable } from './utilities/fetch';
import Tablecell from './components/TableCell/tableCell';
import TableBody from './components/TableBody/tableBody';
import TableRow from './components/TableRow/tableRow';
import TableHeader from './components/TableHeader/tableHeader';
import TableHead from './components/TableHead/tableHead';
import Header from './components/Header/header';

function App() {
  
  const [position, setPosition] = useState<GeolocationCoordinates>();
  const [nearbyData, setNearbyData] = useState<any[]>([]);
  const [selectedStation, setSelectedStation] = useState<string | null>(null);
  const [departures, setDepartures] = useState<any[]>([]);
  const [arrivals, setArrivals] = useState<any[]>([]);
  const [activeRow, setActivRow] = useState<number | null>(null);
  
  useEffect(() => {   
    getPosition(setPosition);
  }, []);



  async function getNearby(){
    if(position){
      const data = await fetchNearby(position.latitude, position.longitude);
      console.log(data.stopLocationOrCoordLocation);
      setNearbyData(data.stopLocationOrCoordLocation);
    } else return
  }

  async function getTimeTable(id: string, index: number){
    setActivRow(index)
    if(id){
      const data = await fetchTimetable(id);
      console.log(data);
      if(data){
        setDepartures(data.departuresData);
        setArrivals(data.arrivalsData);
      }
      setSelectedStation(id);
  
      console.log(selectedStation);
      console.log(departures);
      console.log(arrivals);
    }
  }

  
  return (
    <>
      <Header>
        <h1 className='pageHeader'>CityTransit - Pendlaren</h1>
      </Header>
      
      <button onClick={getNearby}>Hitta närliggande</button>
      <main className='main'>
        <section className='timetable'>
          {
            nearbyData.length > 0 && (
              <TableBody>
                <TableHead>
                  <TableHeader>Hållplats</TableHeader>
                  <TableHeader>Avstånd</TableHeader>
                </TableHead>
                {
                  nearbyData.map((location, index) => (
                    <TableRow key={index} onClick={() => {
                      getTimeTable(location.StopLocation.extId, index)}} 
                      interactive={true}       
                      active={activeRow === index ? true : false}>
            
                      <Tablecell>{location.StopLocation.name}</Tablecell>
                      <Tablecell>{`${location.StopLocation.dist} m`}</Tablecell>
                    </TableRow>
                  ))
                }
              </TableBody>
            )
          }
        </section>
        <section className='timetable'>
          {
            selectedStation && (
              <TableBody>
                <TableHead>
                  <TableHeader>Avgångstid</TableHeader>
                  <TableHeader>Fordon</TableHeader>
                  <TableHeader>Slutstation</TableHeader>
                </TableHead>
                {
                  departures?.map((destination, index) => {
                    return (
                      <TableRow key={index}>
                        <Tablecell>{`${destination.time}`}</Tablecell>
                        <Tablecell>{`${destination.name}`}</Tablecell>
                        <Tablecell>{`${destination.direction}`}</Tablecell>
                      </TableRow>
                    )
                  })
                }
          
              </TableBody>
            )
          }
        </section>
      </main>
    </>
  )
}

export default App
