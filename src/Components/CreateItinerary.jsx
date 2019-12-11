import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Transportation from "./Transportation";
import Accomodation from "./Accomodation";
import Activity from "./Activity";

import AppMap from "../Components/AppMap";
import GooglePlaces from "../Components/GooglePlaces";

export default function CreateItinerary(props) {
  const [itineraries, setItineraries] = useState([]);
  const [formValues, setFormValues] = useState({});
  const selectRef = useRef();

  // console.log(props);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/itinerary-planner")
      .then(res => {
        setItineraries(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("i have been submitted");
    if (!formValues.itineraries) {
      formValues.itineraries = selectRef.current.value;
    }

    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/previous-travels", formValues)
      .then(res => {
        props.history.push("/previous-travels");
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Create an Itinerary</h2>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label htmlFor="steps">Add a step</label>
        <input id="steps" type="text" name="steps" placeholder="Step" />
        <label htmlFor="checkIn">Check-in</label>
        <input type="date" name="checkIn" placeholder="date" />
        <label htmlFor="checkOut">Check-out</label>
        <input type="date" name="checkOut" placeholder="date" />
        <button>Add</button>
      </form>
      {/* <div className="transportation">
        <Transportation />
      </div>
      <div className="accomodation">
        <Accomodation />
      </div>
      <div className="activity">
        <Activity />
      </div>
      <div>
        <GooglePlaces />
      </div> */}
    </div>
  );
}
