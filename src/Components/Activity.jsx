import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import "../Styles/ItineraryPlanner.css";
import axios from "axios";

function Activity({ itinerary, stepCount }) {
  const [activities, setActivities] = useState([]);
  const [activity, setActivity] = useState({
    description: "",
    address: ""
  });

  function handleChange(e, i) {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value
    });

    // setTransportations([...transportations, [e.target.name]: e.target.value)]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setActivities([...activities, activity]);
    setActivity({
      description: "",
      address: ""
    });
    // console.log(props.itineraryID, "this");
    axios
      .post(
        process.env.REACT_APP_BACKEND_URL +
          "/activity/" +
          itinerary._id +
          "/" +
          itinerary.steps[stepCount]._id,
        activity
      )
      .then(res => {
        console.log(res);
        // console.log("transport", res.data);
        // props.history.push("/itinerary/" + res.data._id); // renvoie vers URL FRONT
      })
      .catch(err => console.log(err));
  }
  // console.log(steps);

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
