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
        <p> Hotel :{accomodation.name}</p>
        <p>{accomodation.address}</p>
        <p> BookingRef : {accomodation.bookingRef}</p>

        <p>
          {" "}
          CheckIn : <FormatDate date={accomodation.checkIn} />
        </p>
        <p>
          {" "}
          CheckOut : <FormatDate date={accomodation.checkOut} />
        </p>
      </div>
    </div>
  );
};

export default AccomodationCard;
