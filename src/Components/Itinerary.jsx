import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "../Styles/ItineraryPlanner.css";
import APIHandler from "./../api/ApiHandler";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

function CreateItinerary(props) {
  const [fields, setFields] = useState({
    steps: []
  });

  const [steps, setSteps] = useState([]);
  const [itineraryImage, setItineraryImage] = useState(null);

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

  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData();
    fd.append("fields", JSON.stringify(fields));
    fd.append("itineraryImage", itineraryImage);

    APIHandler.post("/itinerary", fd)
      .then(res => {
        props.history.push("/itinerary/" + res.data._id); // renvoie vers URL FRONT
      })
      .catch(err => console.error(err));
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

  const handleImage = e => {
    console.log(e.target.files[0]);
    setItineraryImage(e.target.files[0]);
  };

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
        <label htmlFor="startDate" className="startDate">
          Start Date
        </label>
        <input
          type="date"
          className="startDate"
          name="startDate"
          placeholder="Start date"
          // defaultValue={i.checkIn}
        />

        <label htmlFor="endDate" className="endDate">
          End Date
        </label>
        <input
          type="date"
          className="endDate"
          name="endDate"
          placeholder="End date"
          // defaultValue={accomodation.checkOut}
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
        <label className="label" htmlFor="itinerary-image">
          Itinerary Image
        </label>
        <input
          className="input"
          id="itinerary-image"
          type="file"
          name="itineraryImage"
          onChange={handleImage}
        />
        <button className="create-button">Create my itinerary</button>
      </form>
    </div>
  );
}

export default withRouter(CreateItinerary);
