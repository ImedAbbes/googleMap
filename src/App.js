import './App.css';
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";


const containerStyle = {
  width: "100%",
  height: "655px",
};

const center = {
  lat: 35.85782125111641,
  lng: 10.608152224538914,
};


function App() {

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.key,
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={20}> 
        <></>
        <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default App;
