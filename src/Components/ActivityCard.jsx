import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/ItineraryPlanner.css";

const ActivityCard = props => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/itinerary/${props.itineraryID}`
      )
      .then(apiRes => {
        console.log(apiRes);
        setSteps(apiRes.data.steps.activity);
      })
      .catch(apiErr => console.error(apiErr));
    return () => {};
  }, []);

  function handleSelect(e, i) {
    e.preventDefault();

    console.log(props.steps);
  }

  console.log();

  return (
    <div className="activity-card">
      {Boolean(activity.length) === false && <p>no activities yet</p>}
      {activities.map((activity, i) => (
        <div
          className="activity"
          key={i}
          value={activity}
          onClick={handleSelect}
        >
          {step.activity}
        </div>
      ))}
    </div>
  );
};

export default ActivityCard;
