import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/ItineraryPlanner.css";

const TransportationCard = props => {
  const [transportations, setTransportations] = useState([]);
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/itinerary/${props.itineraryID}`
      )
      .then(apiRes => {
        console.log(apiRes);
        setTransportations(apiRes.data.steps[0]);
      })
      .catch(apiErr => console.error(apiErr));
    return () => {};
  }, []);

  function handleSelect(e, i) {
    e.preventDefault();

    console.log(props.steps[0]);
  }

  console.log();

  return (
    <div className="transportation-card">
      {Boolean(transportations.length) === false && (
        <p>no transportations yet</p>
      )}
      {transportations.map((transportation, i) => (
        <div
          className="transportation"
          key={i}
          value={transportation}
          onClick={handleSelect}
        >
          {transportation.startPoint}
        </div>
      ))}
    </div>
  );
};

export default TransportationCard;
