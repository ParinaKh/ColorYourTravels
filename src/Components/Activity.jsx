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
      <form
        onSubmit={handleSubmit}
        onChange={handleChange}
        className="booking-form"
      >
        <label htmlFor="description" className="booking-label">
          Description
        </label>
        <input
          id="description"
          className="booking-input"
          type="text"
          name="description"
          placeholder="Name"
        />
        <label htmlFor="address" className="booking-label">
          Address
        </label>
        <input
          className="booking-input"
          type="text"
          name="address"
          placeholder="Address"
        />
        <label htmlFor="bookingRef" className="booking-label">
          Booking Reference (optional)
        </label>
        <input
          className="booking-input"
          type="text"
          name="bookingRef"
          placeholder="BookingRef"
        />
        <label htmlFor="date" className="booking-label">
          Date
        </label>
        <input
          className="booking-input"
          type="date"
          name="startDate"
          placeholder="date"
        />
        <button className="add-button">Add</button>
      </form>
    </div>
  );
}

export default withRouter(Activity);
