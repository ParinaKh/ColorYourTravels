import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import "../Styles/ItineraryPlanner.css";
import axios from "axios";

function Transportation({ itinerary, stepCount, setItinerary }) {
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
    // console.log(props.itineraryID, "this");
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
        setItinerary(res);
        console.log("itinerary", res.data);
        // props.history.push("/itinerary/" + res.data._id); // renvoie vers URL FRONT
      })
      .catch(err => console.log(err));
  }
  // console.log(steps);

  return (
    <div>
      <h2>Transportation</h2>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label htmlFor="transportation" className="transport-type">
          Transportation type
        </label>
        <select
          id="transportation"
          type="text"
          className="select"
          name="transportation"
        >
          <option value="-1" disabled selected>
            Choose a transport mode
          </option>
          <option value="flight">Flight</option>
          <option value="train">Train</option>
          <option value="bus">Bus</option>
          <option value="car">Car</option>
          <option value="walking">Walking</option>
        </select>
        <label htmlFor="startPoint">City of departure</label>
        <input
          value={transport.startpoint}
          id="startPoint"
          type="text"
          name="startPoint"
          placeholder="City of departure"
        />
        <label htmlFor="endPoint">City of arrival</label>
        <input
          id="endPoint"
          type="text"
          name="endPoint"
          placeholder="City of arrival"
        />
        <label htmlFor="bookingRef">Booking Reference (optional)</label>
        <input type="text" name="bookingRef" placeholder="bookingRef" />
        <label htmlFor="departure">Departure Date</label>
        <input type="date" name="departureDate" placeholder="Departure date" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default withRouter(Transportation);
