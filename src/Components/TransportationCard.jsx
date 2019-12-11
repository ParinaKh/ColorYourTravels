import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/ItineraryPlanner.css";

const TransportationCard = ({ transportation }) => {
  function handleSelect(e, i) {
    e.preventDefault();
    console.log("coucou");
    // console.log(props.steps[0]);
    // console.log(props.steps[0].transportation);
  }

  // console.log(steps);

  return (
    <div className="transportation-card">
      {/* {Boolean(transportations.length) === false && (
        <p>no transportations yet</p>
      )}
    */}
      <div
        className="transportation"
        value={transportation}
        onSubmit={handleSelect}
      >
        It works
        {transportation.startPoint}
      </div>
    </div>
  );
};

export default TransportationCard;
