import React, { useState, useEffect } from "react";
import APIHandler from "./../api/ApiHandler";
import { withRouter } from "react-router-dom";
import "../Styles/ItineraryPlanner.css";
import axios from "axios";

function Activity({ itinerary, stepCount, setItinerary, creationClbk }) {
  const [activity, setActivity] = useState({
    description: "Yolo",
    address: "2 rue Fake"
  });

  function handleChange(e, i) {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    APIHandler.post(
      "/activity/" + itinerary._id + "/" + itinerary.steps[stepCount]._id,
      activity
    )
      .then(res => {
        console.log("itinerary", res.data);
        creationClbk(res.data);
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h2>Activities</h2>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          name="description"
          placeholder="Name"
        />
        <label htmlFor="address">Address</label>
        <input type="text" name="address" placeholder="Address" />
        <label htmlFor="bookingRef">Booking Reference</label>
        <input type="text" name="bookingRef" placeholder="BookingRef" />
        <label htmlFor="date">Date</label>
        <input type="date" name="date" placeholder="date" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default withRouter(Activity);
