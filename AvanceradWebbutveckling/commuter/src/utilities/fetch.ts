import { API_KEY } from "./secrets";

export async function fetchNearby(lat: string | number, long: string | number){
  const response = await fetch(`https://api.resrobot.se/v2.1/location.nearbystops?originCoordLat=${lat}&originCoordLong=${long}&format=json&accessId=${API_KEY}`
  );
  const data = await response.json();
  console.log(data);
  
  return data;
}

export async function fetchTimetable(destination: string){
  try {
      const responseDepartures = await fetch(`https://api.resrobot.se/v2.1/departureBoard?id=${destination}&format=json&accessId=${API_KEY}`);
      const responseArrivals = await fetch(`https://api.resrobot.se/v2.1/arrivalBoard?id=${destination}&format=json&accessId=${API_KEY}`);

      const departuresData = await responseDepartures?.json();
      const arrivalsData = await responseArrivals?.json();

      return {
        departuresData: departuresData.Departure,
        arrivalsData: arrivalsData.Arrival
      }
  } catch (error) {
    console.error(error);
  }
}

export async function fetchRoutePlanner(origin: string, destination: string){
  try {
    const response = await fetch(`https://api.resrobot.se/v2.1/trip?format=json&originId=${origin}&destId=${destination}&passlist=true&showPassingPoints=true&accessId=${API_KEY}`);
    const data = await response?.json();
    console.log(data);
  
    return data;
  } catch (error) {
    console.error(error);
  }
}

export function getPosition(callback: (coords: GeolocationCoordinates) => void) {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        callback(position.coords);
      },
      (error) => {
        console.error('Error fetching position: ', error);
      }
    );
  } else {
    console.error('Geolocation didnt work');
  }
}
