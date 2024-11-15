// Map.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';
import L from 'leaflet';

// Configuration des icônes pour éviter un problème d'affichage des marqueurs
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const destinations = [
  { name: 'Douala', lat: 4.0511, lon: 9.7679, address: 'Bonanjo, Douala' },
  { name: 'Yaoundé-Mvan', lat: 3.8480, lon: 11.5021, address: 'Mvan, Yaoundé' },
  { name: 'Édéa', lat: 3.80816, lon: 10.13257, address: 'Centre-ville, Édéa' },
  { name: 'Bafoussam', lat: 5.47775, lon: 10.41759, address: 'Centre-ville, Bafoussam' },
  { name: 'Kribi', lat: 2.93718, lon: 9.90793, address: 'Centre-ville, Kribi' },
  { name: 'Mbouda', lat: 5.62825, lon: 10.25439, address: 'Centre-ville, Mbouda' },
  { name: 'Garoua', lat: 9.3274, lon: 13.3931, address: 'Centre-ville, Garoua' },
  { name: 'Limbe', lat: 4.02429, lon: 9.21492, address: 'Centre-ville, Limbe' },
  { name: 'Maroua', lat: 10.5956, lon: 14.3247, address: 'Centre-ville, Maroua' },
  { name: 'Bamenda', lat: 5.9631, lon: 10.1591, address: 'Centre-ville, Bamenda' },
  { name: 'Ebolowa', lat: 2.9122, lon: 11.1511, address: 'Centre-ville, Ebolowa' }
];

const Map = () => {
  return (
    <div className="map-container">
      <MapContainer center={[4.0511, 9.7679]} zoom={6} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {destinations.map((dest, index) => (
          <Marker key={index} position={[dest.lat, dest.lon]}>
            <Popup>
              <strong>{dest.name}</strong><br />{dest.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
