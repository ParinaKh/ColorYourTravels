import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import "../Styles/ItineraryPlanner.css";
import axios from "axios";

function Transportation({ itinerary, stepCount, setItinerary, creationClbk }) {
  const [transportations, setTransportations] = useState([]);
  const [transport, setTransport] = useState({
    startPoint: "",
    endPoint: "",
    bookingRef: "",
    departure: ""
  });

  function handleChange(e, i) {
    // const transportationsCopy = [...transportations];
    setTransport({
      ...transport,
      [e.target.name]: e.target.value
    });

    // setTransportations([...transportations, [e.target.name]: e.target.value)]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTransportations([...transportations, transport]);
    setTransport({
      startPoint: "",
      endPoint: "",
      bookingRef: "",
      departure: ""
    });

    axios
      .post(
        process.env.REACT_APP_BACKEND_URL +
          "/transportation/" +
          itinerary._id +
          "/" +
          itinerary.steps[stepCount]._id,
        transport
      )
      .then(res => {
        console.log("itinerary", res.data);
        creationClbk(res.data);
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h2>Transportation</h2>
      <form
        onSubmit={handleSubmit}
        onChange={handleChange}
        className="booking-form"
      >
        <label htmlFor="transportation" className="booking-label">
          Transportation type
        </label>
        <select
          id="transportation"
          type="text"
          className="select"
          name="transportation"
          defaultValue="-1"
        >
          <option value="-1" disabled>
            Choose a transport mode
          </option>
          <option value="flight">Flight</option>
          <option value="train">Train</option>
          <option value="bus">Bus</option>
          <option value="car">Car</option>
          <option value="walking">Walking</option>
        </select>
        <label htmlFor="startPoint" className="booking-label">
          City of departure
        </label>
        <input
          value={transport.startpoint}
          id="startPoint"
          className="booking-input"
          type="text"
          name="startPoint"
          placeholder="City of departure"
          required
        />
        <label htmlFor="endPoint" className="booking-label">
          City of arrival
        </label>
        <input
          id="endPoint"
          className="booking-input"
          type="text"
          name="endPoint"
          placeholder="City of arrival"
          required
        />
        <label htmlFor="bookingRef" className="booking-label">
          Booking Reference (optional)
        </label>
        <input
          className="booking-input"
          type="text"
          name="bookingRef"
          placeholder="bookingRef"
        />
        <label htmlFor="departure">Departure Date</label>
        <input
          className="booking-input"
          type="date"
          name="startDate"
          placeholder="Departure date"
          required
        />
        <button className="add-button ">Add</button>
      </form>
    </div>
  );
}

export default withRouter(Transportation);
