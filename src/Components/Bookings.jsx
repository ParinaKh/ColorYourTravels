import React from "react";
import Transportation from "../Components/Transportation";
import Accomodation from "../Components/Accomodation";
import Activity from "../Components/Activity";
import GeoLine from "../Components/GeoLine";
import TransportationCard from "./TransportationCard";

export default function Bookings(props) {
  console.log(props);

  return (
    <div className="booking-container">
      <GeoLine itineraryID={props.match.params.id} />

      <div className="booking-planner">
        <Transportation itineraryID={props.match.params.id} />
        <Accomodation />
        <Activity />
      </div>
      <TransportationCard />
    </div>
  );
}
