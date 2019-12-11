import React, { useState, useEffect } from "react";
import APIHandler from "./../api/ApiHandler";
import "../Styles/ItineraryPlanner.css";

const AccomodationCard = ({ resourceId }) => {
  const [accomodation, setAccomodation] = useState(null);

  function handleSelect(e, i) {
    e.preventDefault();
  }

  useEffect(() => {
    APIHandler.get(`/accomodation/${resourceId}`).then(apiRes => {
      setAccomodation(apiRes.data);
    });
  }, []);

  // console.log(steps);
  if (!accomodation) return null;

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
