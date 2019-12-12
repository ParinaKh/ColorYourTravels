import React, { useState, useEffect } from "react";
import APIHandler from "./../api/ApiHandler";
import "../Styles/ItineraryPlanner.css";
import FormatDate from "./FormatDate";

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
    <div className="accomodation-cards">
      {/* {Boolean(accomodation.length) === false && (
        <p>no accomodations yet</p>
      )} */}

      <div className="accomodation" onSubmit={handleSelect}>
        {accomodation.name}
        {accomodation.address}
        {accomodation.bookingRef}

        <FormatDate date={accomodation.checkIn} />
        <FormatDate date={accomodation.checkOut} />
      </div>
    </div>
  );
};

export default AccomodationCard;
