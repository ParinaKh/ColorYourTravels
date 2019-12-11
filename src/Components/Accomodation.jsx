import React, { useState } from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import "../Styles/ItineraryPlanner.css";
import axios from "axios";

function Accomodation({ itinerary, stepCount }) {
  const [accomodations, setAccomodations] = useState([]);
  const [accomodation, setAccomodation] = useState({
    name: "",
    address: "",
    bookingRef: ""
    // checkIn: "",
    // checkOut: ""
  });

  function handleChange(e, i) {
    setAccomodation({
      ...accomodation,
      [e.target.name]: e.target.value
    });
    // setAccomodations([...accomodations, ([e.target.name]: e.target.value)]);
  }

  // useEffect(() => {
  //   axios
  //     .get(
  //       `${process.env.REACT_APP_BACKEND_URL}/itinerary/${props.itineraryID}`
  //     )
  //     .then(apiRes => {
  //       setSteps(apiRes.data.steps);
  //       setAccomodations(apiRes.data.steps[stepCount].accomodation);
  //     })

  //     .catch(apiErr => console.error(apiErr));
  //   return () => {};
  // }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setAccomodations([...accomodations, accomodation]);
    setAccomodation({
      name: "",
      address: "",
      bookingRef: ""
      // checkIn: "",
      // checkOut: ""
    });
    // console.log(props.itineraryID, "this");
    axios
      .post(
        process.env.REACT_APP_BACKEND_URL +
          "/accomodation/" +
          itinerary._id +
          "/" +
          itinerary.steps[stepCount]._id,
        accomodation
      )
      .then(res => {
        console.log(res);
        // console.log("accomodation", res.data);
        // props.history.push("/accomodation/" + res.data._id); // renvoie vers URL FRONT
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      {/* <button onClick={changeStatus}>Add Accomodation</button> */}

      <h2>Accomodation</h2>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" placeholder="Name" />
        <label htmlFor="name">Address</label>
        <input id="address" type="text" name="address" placeholder="Address" />
        <label htmlFor="BookingRef">Booking Reference</label>
        <input type="text" name="bookingRef" placeholder="BookingRef" />
        <label htmlFor="checkIn">Check-in</label>
        <input type="date" name="checkIn" placeholder="date" />
        <label htmlFor="checkOut">Check-out</label>
        <input type="date" name="checkOut" placeholder="date" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default withRouter(Accomodation);
