import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/ItineraryPlanner.css";

const AccomodationCard = ({ accomodation }) => {
  function handleSelect(e, i) {
    e.preventDefault();
  }

  // console.log(steps);

  return (
    <div className="accomodation-card">
      {/* {Boolean(accomodation.length) === false && (
        <p>no accomodations yet</p>
      )} */}

      <div
        className="accomodation"
        value={accomodation}
        onSubmit={handleSelect}
      >
        {accomodation.name}
        {accomodation.address}
        {accomodation.bookingRef}
        {accomodation.checkIn}
        {accomodation.checkOut}
      </div>
    </div>
  );
};

export default AccomodationCard;
