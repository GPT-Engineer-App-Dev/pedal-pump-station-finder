import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';
import { Box, Spinner } from '@chakra-ui/react';

// Custom icon for bike pump stations
const bikePumpIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [25, 25],
});

const Map = () => {
  const [bikePumps, setBikePumps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch bike pump data
    fetch('https://api.example.com/bike-pumps') // Replace with actual API endpoint
      .then(response => response.json())
      .then(data => {
        setBikePumps(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching bike pump data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <MapContainer center={[59.3293, 18.0686]} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {bikePumps.map((pump, index) => (
        <Marker key={index} position={[pump.latitude, pump.longitude]} icon={bikePumpIcon}>
          <Popup>
            {pump.name}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;