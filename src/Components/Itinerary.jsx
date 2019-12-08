import React, { useState } from "react";
import ReactDOM from "react-dom";

import "../Styles/ItineraryPlanner.css";
import axios from "axios";

function CreateItinerary() {
  const [fields, setFields] = useState({});
  const [steps, setSteps] = useState([{ value: null }]);

  // function handleChange(i, event) {
  //   const values = [...steps];
  //   values[i].value = event.target.value;
  //   setSteps(values);
  // }

  function handleChange(e, i) {
    // const values = [...steps];
    // values[i].value = e.target.value;
    // setSteps(values);
    setFields({ ...fields, [e.target.name]: e.target.value });
    setSteps([...steps], e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const copySteps = [...steps];
    const copyFields = { ...fields };

    const key = e.target.name;
    const value = e.target.value;
    console.log(copyFields);
    console.log(copySteps);
    // axios
    // .post(process.env.REACT_APP_BACKEND_URL + "/itineraries", {title, description,[steps: steps]})
    // .then(res => {
    //   // const copy = [...steps];
    //   // setSteps(copy);
    //   // props.history.push("/all-itineraries") // renvoie vers URL FRONT
    // })
    // .catch(err => console.log(err));
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
          onChange={e => handleChange(e)}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={e => handleChange(e)}
        />
        <label htmlFor="description">Steps</label>
        <div>
          <button
            className="add-button"
            type="button"
            onClick={() => handleAdd()}
          >
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
                onSubmit={e => handleSubmit(e, i)}
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

export default CreateItinerary;
