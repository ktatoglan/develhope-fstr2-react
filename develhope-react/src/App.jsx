import React from 'react';
import useCurrentLocation from './useCurrentLocation';

const App = () => {
  const { currentLocation, getLocation, loading, error } = useCurrentLocation();

  const handleGetLocation = () => {
    getLocation();
  };

  return (
    <div>
      <h1>Current Location</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {currentLocation && (
        <div>
          <p>Latitude: {currentLocation.latitude}</p>
          <p>Longitude: {currentLocation.longitude}</p>
        </div>
      )}
      <button onClick={handleGetLocation}>Get Current Location</button>
    </div>
  );
};

export default App;
