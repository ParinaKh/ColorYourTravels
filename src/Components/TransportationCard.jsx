import React, { useState, useEffect } from "react";
import APIHandler from "./../api/ApiHandler";
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
    <div className="transportation-card">
      {/* {Boolean(transportation.length) === false && (
        <p>no transportations yet</p>
      )} */}

      <div
        className="transportation"
        value={transportation}
        onSubmit={handleSelect}
      >
        {transportation.departureDate}
        {transportation.transport}
        {transportation.startPoint}
        {transportation.bookingRef}
      </div>
    </div>
  );
};

export default TransportationCard;
