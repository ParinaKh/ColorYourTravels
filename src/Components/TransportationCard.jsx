import React, { useState, useEffect } from "react";
import APIHandler from "./../api/ApiHandler";
import FormatDate from "./FormatDate";
import "../Styles/ItineraryPlanner.css";

const TransportationCard = ({ resourceId }) => {
  const [transportation, setTransportation] = useState(null);

  function handleSelect(e, i) {
    e.preventDefault();
  }

  useEffect(() => {
    APIHandler.get(`/transportation/${resourceId}`).then(apiRes => {
      setTransportation(apiRes.data);
    });
  }, []);

  // console.log(steps);
  if (!transportation) return null;

  return (
    <div className="transportation-cards">
      <div
        className="transportation"
        value={transportation}
        onSubmit={handleSelect}
      >
        <p id="p-text">{transportation.transport} </p>
        <p id="p-text" class="title-booking-cards">
          From {transportation.startPoint} to {transportation.endPoint}
        </p>
        <p id="p-text">
          Departure on <FormatDate date={transportation.startDate} />
        </p>
        <p id="p-text">Booking Ref : {transportation.bookingRef}</p>
      </div>
    </div>
  );
};

export default TransportationCard;
