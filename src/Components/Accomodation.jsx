import React, { useState, useEffect, useRef } from "react";
import addAccomodation from 'module-3' //vérifier le module-3
import axios from "axios";


function addAccomodation() {
  const {add,handleSubmit } = useForm();
  const onSubmit = values => console.log(values);

  return (
    <div>
      <h2>Accomodation</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="Name">Name</label>
        <input id="Name" type="text" name="Name" placeholder="Name" ref={add}/>
        <label htmlFor="Name">Address</label>
        <input id="address" type="text" name="address" placeholder="Address" ref={add}/>
        <label htmlFor="BookingRef">Booking Reference</label>
        <input type="text" name="BookingRef" placeholder="BookingRef" ref={add} />
        <label htmlFor="checkIn">Check-in</label>
        <input type="date" name="checkIn" placeholder="date" ref={add}/>
        <label htmlFor="checkOut">Check-out</label>
        <input type="date" name="checkOut" placeholder="date"ref={add} />
        <input type ="submit"/>
      </form>
    </div>
  );

}

const addAccomodation = () => {
  const handleSubmit = e => {
    e.preventDefault();
    // console.log("i have been submitted");

    // axios
    //   .post(process.env.REACT_APP_BACKEND_URL + "/itinerary-planner", formValues)
    //   .then(res => {
    //     props.history.push("/itinerary-planner");
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  const handleChange = e => {
    // setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Accomodation</h2>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label htmlFor="Name">Name</label>
        <input id="Name" type="text" name="Name" placeholder="Name" />
        <label htmlFor="Name">Address</label>
        <input id="address" type="text" name="address" placeholder="Address" />
        <label htmlFor="BookingRef">Booking Reference</label>
        <input type="text" name="BookingRef" placeholder="BookingRef" />
        <label htmlFor="checkIn">Check-in</label>
        <input type="date" name="checkIn" placeholder="date" />
        <label htmlFor="checkOut">Check-out</label>
        <input type="date" name="checkOut" placeholder="date" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default addAccomodation;
