import React from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '800px',
  height: '400px',
};

const center = {
  lat: 35.663224 , 
  lng: 10.890659 , 
};

const GoogleMapComponent = () => {
  const [showInfoWindow, setShowInfoWindow] = React.useState(false);

  const toggleInfoWindow = () => {
    setShowInfoWindow(!showInfoWindow);
  };

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={10}
    >
      <Marker
        position={center}
        onClick={toggleInfoWindow}
      >
        {showInfoWindow && (
          <InfoWindow onCloseClick={toggleInfoWindow}>
            <div>
              <h3>Marker Info Window</h3>
              <p>This is the marker location.</p>
            </div>
          </InfoWindow>
        )}
      </Marker>
    </GoogleMap>
  );
};

export default GoogleMapComponent;
