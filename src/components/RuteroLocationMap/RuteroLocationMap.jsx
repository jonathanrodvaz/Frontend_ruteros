import './RuteroLocationMap.css';

import axios from 'axios';
import { useEffect, useState } from 'react';

import RouteMap from '../RouteMap/RouteMap';

const RuteroLocationMap = ({ placeName }) => {
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    getCoordinates(placeName);
  }, [placeName]);

  const getCoordinates = async (placeName) => {
    try {
      const response = await axios.get('https://nominatim.openstreetmap.org/search', {
        params: {
          q: placeName,
          format: 'json',
        },
      });

      if (response.data.length > 0) {
        const latitude = parseFloat(response.data[0].lat);
        const longitude = parseFloat(response.data[0].lon);
        setCoordinates({ latitude, longitude });
      } else {
        setCoordinates({ latitude: null, longitude: null });
      }
    } catch (error) {
      console.error('Error fetching coordinates:', error.message);
      setCoordinates({ latitude: null, longitude: null });
    }
  };

  return (
    <>
      {coordinates.latitude !== null && coordinates.longitude !== null ? (
        <RouteMap geolocations={[[coordinates.latitude, coordinates.longitude]]} />
      ) : (
        <p>Location not found.</p>
      )}
    </>
  );
};

export default RuteroLocationMap;
