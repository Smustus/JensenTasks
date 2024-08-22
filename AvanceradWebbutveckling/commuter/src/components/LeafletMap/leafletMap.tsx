import React, { useEffect, useState } from 'react'
import './leafletMap.css'
import L, { LayerGroup, Map } from 'leaflet';
import { fetchNearby } from '../../utilities/fetch';
import { StopLocation } from '../../interfaces/interfaces';

interface LeafletMapProps {
  position: GeolocationCoordinates | undefined
}

interface StopData {
  StopLocation: StopLocation;
}


const LeafletMap = ({position}: LeafletMapProps) => {

  const [map, setMap] = useState<Map>();

  useEffect(() => {
    if (!map && position?.latitude) {
      const createMap = L.map('map').setView([position?.latitude, position?.longitude], 13);
      L.marker([position?.latitude, position?.longitude]).addTo(createMap);

      setMap(createMap);
    }
  }, [position]);

  useEffect(() => {
    if(map && position?.latitude && position?.longitude){
      async function getAll(){
        const data = await fetchNearby(position.latitude, position.longitude, 200, 2000);

        data.forEach((obj: StopData) => {
          console.log(obj);
          
          if (!map) return;
          const marker = L.marker([obj?.StopLocation.lat, obj?.StopLocation.lon]).addTo(map);
          marker.bindPopup(obj?.StopLocation.name).openPopup();
        })
      }
      getAll()
    }
  }, [map]);

  useEffect(() => {
    if(map){
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);
    }
  }, [map]);

  
  return (
    <div id="map"></div>
  )
}

export default LeafletMap