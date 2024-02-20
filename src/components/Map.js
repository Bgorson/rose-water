import React from "react";
import GoogleMapReact from "google-map-react";
import "./maps.css";
import { Icon } from "@iconify/react";
const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon="topcoat:location" className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);
const apiKey = process.env.REACT_APP_GOOGLE;

const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">
      We are located at :{" "}
      <a href="https://www.google.com/maps/dir/41.9495936,-87.6675072/3913+N+Marshfield+Ave,+Chicago,+IL+60613/@41.9512614,-87.6710393,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x880fd24653b41061:0x552f94882cbbb140!2m2!1d-87.6700228!2d41.9529315">
        {" "}
        'Marshfield'
      </a>{" "}
    </h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
);
export default Map;
