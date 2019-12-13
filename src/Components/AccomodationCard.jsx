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
      <div className="accomodation" onSubmit={handleSelect}>
        <p id="p-text" class="title-booking-cards">
          {" "}
          Hotel :{accomodation.name}
        </p>
        <p id="p-text">{accomodation.address}</p>
        <p id="p-text"> BookingRef : {accomodation.bookingRef}</p>

        <p id="p-text">
          {" "}
          CheckIn : <FormatDate date={accomodation.checkIn} />
        </p>
        <p id="p-text">
          {" "}
          CheckOut : <FormatDate date={accomodation.checkOut} />
        </p>
      </div>
    </div>
  );
};

export default AccomodationCard;
