import React, { useState } from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import "../Styles/ItineraryPlanner.css";
import axios from "axios";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

function CreateItinerary(props) {
  const [fields, setFields] = useState({
    steps: []
  });

  const [steps, setSteps] = useState([]);

  function handleChange(e, i) {
    console.log(fields);
    if (e.target.name === "steps") {
      const stepCopy = [...fields.steps];
      stepCopy[i] = { city: e.target.value };
      setFields({ ...fields, steps: stepCopy });
    } else {
      setFields({ ...fields, [e.target.name]: e.target.value });
    }
  }

  console.log(props);

  function handleSubmit(e) {
    console.log("here");
    e.preventDefault();

    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/itinerary", fields)
      .then(res => {
        console.log("here3", res.data);
        props.history.push("/itinerary/" + res.data._id); // renvoie vers URL FRONT
      })
      .catch(err => console.log("err", err));
  }

  function handleAdd() {
    const stepsValues = [...steps];
    stepsValues.push({ value: null });
    setSteps(stepsValues);
  }

  function handleRemove(i) {
    const stepsValues = [...steps];
    stepsValues.splice(i, 1);
    setSteps(stepsValues);
  }

  return (
    <div className="itinerary-planner">
      <h1>Create new Itinerary</h1>
      <form className="itinerary-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Itinerary name"
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
        <label htmlFor="description">Steps</label>
        <div>
          <button className="add-button" type="button" onClick={handleAdd}>
            +
          </button>
        </div>

        {steps.map((step, i) => {
          return (
            <div className="steps" key={i}>
              <input
                type="text"
                placeholder="Step"
                name="steps"
                // value={field.value || ""}
                onChange={e => handleChange(e, i)}
              />
              <button
                className="remove-button"
                type="button"
                onClick={() => handleRemove(i)}
              >
                X
              </button>
            </div>
          );
        })}
        <button className="create-button">Create my itinerary</button>
      </form>
    </div>
  );
}

export default withRouter(CreateItinerary);
