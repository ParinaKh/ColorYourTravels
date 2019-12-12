import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ItineraryCards(props) {
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/itinerary")

      .then(apiRes => {
        console.log(apiRes, "Guten tag");
        setItineraries(apiRes.data);
        console.log(apiRes.data);
      })
      .catch(apiErr => console.error(apiErr));
    return () => {};
  }, []);

  return (
    <div className="all-itineraries">
      {/* {Boolean(itinerary.length) === false && <p>no steps yet</p>} */}
      {itineraries.map((itinerary, i) => (
        <Link to={`/allmyitineraries/${itinerary._id}`} key={i}>
          <p>{itinerary.title}</p>
          <p>{itinerary.description}</p>
          <p>{itinerary.startDate}</p>
          <p>{itinerary.endDate}</p>
          {/* {itinerary.steps.map((step, i)=>(

          ))} */}
        </Link>
      ))}
    </div>
  );
}

export default ItineraryCards;
