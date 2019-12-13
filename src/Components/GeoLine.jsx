import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/ItineraryPlanner.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";

const GeoLine = ({ itinerary, stepCount, setStepCount }) => {
  function handleSelect(index) {
    // e.preventDefault();
    console.log("click ok", index);
    setStepCount(index);
    // console.log(props.steps);
  }

  if (!itinerary.steps) return null;

  return (
    <>
      <div className="itinerary-description">
        <h1>{itinerary.title}</h1>
        <h3 className="description-geo">{itinerary.description}</h3>
      </div>
      <div className="geoline">
        {Boolean(itinerary.steps.length) === false && <p>no steps yet</p>}
        {itinerary.steps.map((step, i) => (
          <div
            style={{
              backgroundColor: stepCount === i ? "#FFCEB8" : "#747C92",
              color: stepCount === i ? "black" : "white"
            }}
            className={stepCount === i ? "steps active" : "steps"}
            key={i}
            onClick={evt => handleSelect(i)}
          >
            {step.city}
            {/* <FontAwesomeIcon icon={faTimes} /> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default GeoLine;
