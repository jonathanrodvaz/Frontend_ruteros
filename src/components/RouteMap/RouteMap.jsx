import 'leaflet/dist/leaflet.css';
import './RouteMap.css';

import Leaflet from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const RouteMap = ({ geolocations }) => {
  const customMarkerIcon = Leaflet.icon({
    iconUrl:
      'https://res.cloudinary.com/dwbxywvdw/image/upload/v1690705657/Iconos/mapa_l4hpan.png',
    iconSize: [45, 45], // Ajusta el tamaño del ícono según tus necesidades
    iconAnchor: [16, 32], // Ajusta el punto de anclaje si es necesario
    popupAnchor: [0, -32], // Ajusta la posición del popup con respecto al ícono
  });

  return (
    <div className="routeMap-container">
      <MapContainer
        center={geolocations[0]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        />
        {geolocations.map((location, index) => (
          <Marker
            key={`${location.latitude}-${location.longitude}-${index}`}
            position={location}
            icon={customMarkerIcon}
          >
            {showPopUp(index, geolocations.length)}
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

const showPopUp = (index, geolocationLength) => {
  let text = ' Route Start 😊';

  switch (index) {
    case 0:
      text = 'Route Start 😊';
      break;
    case geolocationLength - 1:
      text = 'Route End 🏆';
      break;
    default:
      text = 'Route Start 👌';
  }
  return <Popup>{text}</Popup>;
};

export default RouteMap;
