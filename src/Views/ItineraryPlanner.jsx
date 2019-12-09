import React from "react";
import App from "../App";
import "../Styles/ItineraryPlanner.css";
import AppMap from "../Components/AppMap";
import GooglePlaces from "../Components/GooglePlaces";
// import Autocomplete from "../Components/Autocomplete";
import CreateItinerary from "../Components/CreateItinerary";
import Transportation from "../Components/Transportation";
import Accomodation from "../Components/Accomodation";
import Activity from "../Components/Activity";
import Itinerary from "../Components/Itinerary";

const ItineraryPlanner = () => {
  return (
    <div className="itinerary-container">
      <Itinerary />
      <CreateItinerary />

      {/* <div className="transportation">
              <Transportation />
            </div>
            <div className="accomodation">
              <Accomodation />
            </div>
            <div className="activity">
              <Activity />
            </div>
            <div>
              <GooglePlaces />
            </div> */}

      {/* <div className="map-container">
          <AppMap />
        </div> */}

      {/* <Autocomplete /> */}
    </div>
  );
};

export default ItineraryPlanner;
