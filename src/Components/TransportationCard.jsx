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
    <div
      className="transportation-cards"
      value={transportation}
      onSubmit={handleSelect}
    >
      <p>{transportation.transport} </p>
      <p>From {transportation.startPoint}</p>
      <p>to {transportation.endPoint}</p>
      <p>
        Departure on <FormatDate date={transportation.startDate} />
      </p>
      <p>Booking Ref : {transportation.bookingRef}</p>
    </div>
  );
};

export default TransportationCard;
