import React, { useState, useEffect } from "react";
import APIHandler from "../api/ApiHandler";
import "../Styles/ItineraryPlanner.css";
import FormatDate from "./FormatDate";

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
    <div className="activity-cards">
      {/* {Boolean(activity.length) === false && (
        <p>no activities yet</p>
      )} */}

      <div className="activity" value={activity} onSubmit={handleSelect}>
        <FormatDate date={activity.startDate} />
        {activity.description}
        {activity.address}
        {activity.bookingRef}
      </div>
    </div>
  );
};

export default ActivityCard;
