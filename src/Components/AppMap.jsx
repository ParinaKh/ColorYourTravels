import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  InfoWindow,
  Marker
} from "react-google-maps";
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyAFnMPcwI9LXmUY8egBlCdXUSNek7gW0s4");
Geocode.enableDebug();

function Map() {
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 48.856613, lng: 2.352222 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function AppMap() {
  return (
    <div className="map" style={{ width: "40vw", height: "50vh" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAFnMPcwI9LXmUY8egBlCdXUSNek7gW0s4&libraries=places`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}
