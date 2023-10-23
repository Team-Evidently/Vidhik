// import React from 'react'
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  Popup,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import { useState } from "react";
import { REACT_APP_MAP_KEY } from "../../../../token.js";

const UMaps = () => {
  // Mumbai longitude: 72.8777° E
  // Mumbai latitude: 19.0760° N
  const [lng, setLng] = useState(72.8777);
  const [lat, setLat] = useState(19.0760);

  return (
    <div className=" text-center">
      <h1>Mapbox tutorial</h1>
      <Map
        mapboxAccessToken={REACT_APP_MAP_KEY}
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "15px",
          border: "2px solid red",
        }}
        initialViewState={{
          longitude: lng,
          latitude: lat,
        }}
        mapStyle="mapbox://styles/pixelpundits01/clo3963wd00jj01qxgw6oajzo"
        zoom={5}
      >
        <Marker longitude={lng} latitude={lat} />
        <NavigationControl position="bottom-right" />
        <FullscreenControl />

        <GeolocateControl />
      </Map>
    </div>
  )
}

export default UMaps