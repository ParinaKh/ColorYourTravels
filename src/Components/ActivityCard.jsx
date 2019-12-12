import React, { useState, useEffect } from "react";
import APIHandler from "../api/ApiHandler";
import "../Styles/ItineraryPlanner.css";

const ActivityCard = ({ resourceId }) => {
  const [activity, setActivity] = useState(null);
  function handleSelect(e, i) {
    e.preventDefault();
  }
  useEffect(() => {
    APIHandler.get(`/activity/${resourceId}`).then(apiRes => {
      setActivity(apiRes.data);
    });
  }, []);

  // console.log(steps);
  if (!activity) return null;

  return (
    <div className="activity-card">
      {/* {Boolean(activity.length) === false && (
        <p>no activities yet</p>
      )} */}

      <div className="activity" onSubmit={handleSelect}>
        {activity.date}
        {activity.description}
        {activity.address}
        {activity.bookingRef}
      </div>
    </div>
  );
};

export default ActivityCard;
