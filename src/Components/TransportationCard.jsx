import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/ItineraryPlanner.css";

const TransportationCard = ({ transportation }) => {
  function handleSelect(e, i) {
    e.preventDefault();
  }

  // console.log(steps);

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
