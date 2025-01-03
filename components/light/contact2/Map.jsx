"use client";
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Map() {
  const [mapLoaded, setMapLoaded] = useState(false);

  // No need to manually load script, LoadScript takes care of it
  useEffect(() => {
    setMapLoaded(true); // Just set the mapLoaded state to true
  }, []);

  if (!mapLoaded) return <div>Loading...</div>;

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        center={{ lat: 13.0827, lng: 80.2707 }} // Chennai's coordinates
        zoom={11}
        mapContainerStyle={{
          width: 'auto',
          height: '450px',
        }}
      >
        <Marker position={{ lat: 13.0827, lng: 80.2707 }} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
