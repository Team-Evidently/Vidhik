import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import { useState, useEffect } from "react";
import { REACT_APP_MAP_KEY } from "../../../../token.js";
import LSPCard from "../../../components/LSPCard/LSPCard";
import { lawyers } from "../../../database";

const UMaps = () => {
  const [filteredLawyers, setFilteredLawyers] = useState(lawyers);
  const [selectedVidhikId, setSelectedVidhikId] = useState(null);

  const handleFilterChange = (filters) => {
    const updatedLawyers = lawyers.filter((lawyer) => {
      return isMatch;
    });
    setFilteredLawyers(updatedLawyers);
  };

  useEffect(() => {
    console.log(filteredLawyers);
  }, [filteredLawyers]);

  // Mumbai longitude: 72.8777° E
  // Mumbai latitude: 19.0760° N
  const [lng, setLng] = useState(72.844707);
  const [lat, setLat] = useState(19.187650);

  const [lng1, setLng1] = useState(72.844806);
  const [lat1, setLat1] = useState(19.189855);

  const handleMarkerClick = (vidhik_id) => {
    if (vidhik_id === selectedVidhikId) {
      setSelectedVidhikId(null);
    } else {
      setSelectedVidhikId(vidhik_id);
    }
  };

  return (
    <div className="text-center">
      <br />
      <Map
        mapboxAccessToken={REACT_APP_MAP_KEY}
        style={{
          width: "100vw",
          height: "500px",
          borderRadius: "15px",
          border: "2px solid red",
          overflow: "hidden",
          scroll: "none",
          marginRight: "20px",
        }}
        initialViewState={{
          longitude: 72.844228,
          latitude: 19.188601,
          zoom: 15,
        }}
        mapStyle="mapbox://styles/pixelpundits01/clo3963wd00jj01qxgw6oajzo"
      >
        <Marker
          longitude={lng}
          latitude={lat}
          style={{ cursor: "default" }}
          onClick={() => handleMarkerClick("V123456")}
          color="black"
        />
        <Marker
          longitude={lng1}
          latitude={lat1}
          style={{ cursor: "default" }}
          onClick={() => handleMarkerClick("V567890")}
          color="black"
        />
         <Marker
          longitude='72.846'
          latitude='19.188924'
          style={{ cursor: "default" }}
          onClick={() => handleMarkerClick("V123451")}
          color="black"
        />
         <Marker
          longitude='72.846'
          latitude='19.1862'
          style={{ cursor: "default" }}
          onClick={() => handleMarkerClick("V123452")}
          color="black"
        />
          <Marker
          longitude='72.8476'
          latitude='19.188'
          style={{ cursor: "default" }}
          onClick={() => handleMarkerClick("V345678")}
          color="black"
        />

        <NavigationControl position="bottom-right" showZoom='True'/>
        <FullscreenControl />
        <GeolocateControl />
      </Map>
      <br />
<div className="heading text-left">Lawyers Nearby</div>
      {selectedVidhikId !== null && (
        <div className="flex justify-between px-10">
        <div className='grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 gap-5 lg:gap-[30px]  lg:mt-[55px]'>
          {filteredLawyers
            .filter((lawyer) => lawyer.vidhik_id === selectedVidhikId)
            .map((lawyer) => (
              <LSPCard person={lawyer} key={lawyer.vidhik_id} />
            ))}
        </div>
        </div>
      )}
    </div>
  );
};

export default UMaps;