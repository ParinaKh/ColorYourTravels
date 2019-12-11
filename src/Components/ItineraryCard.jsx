import React, { useState, useEffect } from "react";
import axios from "axios";

function ItineraryCard(props) {
  const [itinerary, setItinerary] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/itinerary")

      .then(apiRes => {
        console.log(apiRes, "Guten tag");
        setItinerary(apiRes.data);
        console.log();
      })
      .catch(apiErr => console.error(apiErr));
    return () => {};
  }, []);

  return (
    <div className="all-itineraries">
      {/* {Boolean(itinerary.length) === false && <p>no steps yet</p>} */}
      {itinerary.map((itinerary, i) => (
        <div key={i} value={itinerary}>
          <p>hello</p>
          {itinerary.steps}
        </div>
      ))}
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
    </div>
  );
}

export default ItineraryCard;
