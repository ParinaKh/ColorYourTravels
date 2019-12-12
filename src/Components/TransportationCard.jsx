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
    <div className="booking-card">
      {/* {Boolean(transportation.length) === false && (
        <p>no transportations yet</p>
      )} */}

      <div
        className="transportation-cards"
        value={transportation}
        onSubmit={handleSelect}
      >
        <div>{transportation.transport} </div>
        <div>From {transportation.startPoint}</div>
        <div>to {transportation.endPoint}</div>
        <div>
          Departure on <FormatDate date={transportation.startDate} />
        </div>
        <div>Booking Ref : {transportation.bookingRef}</div>
      </div>
    </div>
  );
};

export default TransportationCard;
