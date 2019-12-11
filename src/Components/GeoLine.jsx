import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/ItineraryPlanner.css";

const GeoLine = ({ itinerary, stepCount, setStepCount }) => {
  function handleSelect(index) {
    // e.preventDefault();
    console.log("click ok", index);
    setStepCount(index);
    // console.log(props.steps);
  }

  if (!itinerary.steps) return null;

  return (
    <div className="geoline">
      {Boolean(itinerary.steps.length) === false && <p>no steps yet</p>}
      {itinerary.steps.map((step, i) => (
        <div
          style={{ backgroundColor: stepCount === i ? "green" : "grey" }}
          className={stepCount === i ? "steps active" : "steps"}
          key={i}
          onClick={evt => handleSelect(i)}
        >
          {step.city}
        </div>
      ))}
    </div>
  );
};

export default GeoLine;
