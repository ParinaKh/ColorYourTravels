import React, { useState, useEffect } from "react";
import Transportation from "../Components/Transportation";
import Accomodation from "../Components/Accomodation";
import Activity from "../Components/Activity";
import GeoLine from "../Components/GeoLine";
import TransportationCard from "./TransportationCard";
import AccomodationCard from "./AccomodationCard";
import ActivityCard from "./ActivityCard";
import axios from "axios";

export default function Bookings(props) {
  const [itinerary, setItinerary] = useState(null);
  const [stepCount, setStepCount] = useState(0);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/itinerary/${props.match.params.id}`
      )
      .then(apiRes => {
        console.log(apiRes, "helloooooo");
        setItinerary(apiRes.data);
        // console.log(apiRes);
        // console.log(apiRes.data.steps);
        // console.log(apiRes.data.steps.transportation);
        // setSteps(apiRes.data.steps);
        // setTransportations(apiRes.data.steps[stepCount].transportation);
      })
      .catch(apiErr => console.error(apiErr));
    return () => {};
  }, []);

  if (itinerary === null) return <div>No itinerary</div>;
  return (
    <div className="booking-container">
      <GeoLine
        itinerary={itinerary}
        setStepCount={setStepCount}
        stepCount={stepCount}
      />
      <div className="booking-planner">
        <Transportation
          itinerary={itinerary}
          stepCount={stepCount}
          setItinerary={setItinerary}
        />
        <Accomodation
          itinerary={itinerary}
          stepCount={stepCount}
          setItinerary={setItinerary}
        />
        <Activity
          itinerary={itinerary}
          stepCount={stepCount}
          setItinerary={setItinerary}
        />
      </div>
      <div className="cards-container">
        <div className="transportation-cards">
          {" "}
          <p>Transportations</p>
          {itinerary.steps[stepCount].transportation.map(
            (transportation, i) => (
              <TransportationCard key={i} transportation={transportation} />
            )
          )}
        </div>
        <div className="accomodation-cards">
          {" "}
          <p>Accomodations</p>
          {itinerary.steps[stepCount].accomodation.map((accomodation, i) => (
            <AccomodationCard key={i} accomodation={accomodation} />
          ))}
        </div>
        <div className="activity-cards">
          {" "}
          <p>Activities</p>
          {itinerary.steps[stepCount].activity.map((activity, i) => (
            <ActivityCard key={i} activity={activity} />
          ))}
        </div>
      </div>
    </div>
  );
}
