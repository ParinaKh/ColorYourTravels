import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/ItineraryPlanner.css";

const ActivityCard = ({ activity }) => {
  function handleSelect(e, i) {
    e.preventDefault();
  }

  // console.log(steps);

  return (
    <div className="activity-card">
      {/* {Boolean(activity.length) === false && (
        <p>no activities yet</p>
      )} */}

      <div className="activity" value={activity} onSubmit={handleSelect}>
        {activity.date}
        {activity.description}
        {activity.address}
        {activity.bookingRef}
      </div>
    </div>
  );
};

export default ActivityCard;
