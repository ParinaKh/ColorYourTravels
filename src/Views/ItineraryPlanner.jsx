import React from "react";
import App from "../App";
import AppMap from "../Components/AppMap";
import Accomodation from "../Components/Accomodation";
import Activity from "../Components/Activity";

const ItineraryPlanner = () => {
  return (
    <div className="itinerary-container">
      <div className="trip-container">
        <div className="planner-container">
          <div className="timeline">
            <div className="accomodation">
              <Accomodation />
            </div>
            <div className="accomodation">
              <Activity />
            </div>
          </div>
        </div>
        <div className="map-container">
          <AppMap />
        </div>
      </div>
    </div>
  );
};

export default ItineraryPlanner;
