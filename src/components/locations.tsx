// src/components/LocationMap.tsx
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const defaultMapOptions = {
  disableDefaultUI: true,
};

const LocationMap: React.FC = () => {
  const [map1Visible, setMap1Visible] = useState(true);

  const toggleMap = () => {
    setMap1Visible((prev) => !prev);
  };

  const mapStyles: React.CSSProperties = {
    height: '30vh',
    width: '100%',
  };

  const defaultCenter1 = { lat: 1.9511706, lng: 30.0593495 }; // Norrsken
  const defaultCenter2 = { lat: -1.2654698, lng: 36.7987676 }; // Nairobi

  return (
    <div>
      <div className="mb-4">
        <button onClick={toggleMap} className="bg-blue-500 text-white px-4 py-2">
          {map1Visible ? 'Show Map 2' : 'Show Map 1'}
        </button>
      </div>
      <LoadScript googleMapsApiKey="GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={mapStyles}
          center={map1Visible ? defaultCenter1 : defaultCenter2}
          zoom={10}
          options={defaultMapOptions}
        >
          <Marker position={map1Visible ? defaultCenter1 : defaultCenter2} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default LocationMap;
