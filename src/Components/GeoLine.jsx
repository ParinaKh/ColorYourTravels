import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/ItineraryPlanner.css";

const GeoLine = props => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/itinerary/${props.itineraryID}`
      )
      .then(apiRes => {
        console.log(apiRes);
        setSteps(apiRes.data.steps);
      })
      .catch(apiErr => console.error(apiErr));
    return () => {};
  }, []);

  function handleSelect(e, i) {
    e.preventDefault();
    console.log("click ok");
    console.log(props.steps);
  }

  console.log();

  return (
    <div className="geoline">
      {Boolean(steps.length) === false && <p>no steps yet</p>}
      {steps.map((step, i) => (
        <div className="steps" key={i} value={step} onClick={handleSelect}>
          {step.city}
        </div>
      ))}
    </div>
  );
};

export default GeoLine;
