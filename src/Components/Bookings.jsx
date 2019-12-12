import React, { useState, useEffect } from "react";
import TransportationForm from "../Components/Transportation";
import AccomodationForm from "../Components/Accomodation";
import ActivityForm from "../Components/Activity";
import GeoLine from "../Components/GeoLine";
import TransportationCard from "./TransportationCard";
import AccomodationCard from "./AccomodationCard";
import ActivityCard from "./ActivityCard";
import axios from "axios";


const availableCards = {
  accomodation: AccomodationCard,
  transportation: TransportationCard,
  activity: ActivityCard
};

// cards["transportation"];

export default function Bookings(props) {
  const [itinerary, setItinerary] = useState(null);
  const [stepCount, setStepCount] = useState(0);
  const [activeForm, setActiveForm] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/itinerary/${props.match.params.id}`
      )
      .then(apiRes => {
        setItinerary(apiRes.data);
      })
      .catch(apiErr => console.error(apiErr));
    return () => {};
  }, []);

  const addCard = infos => {
    setItinerary(infos);
    const copy = [...cards];
    copy.push({
      type: activeForm,
      infos
    });
    setCards(copy);
    setActiveForm(null);
  };

  if (itinerary === null) return <div>No itinerary</div>;

  return (
    <div className="booking-container">
      <GeoLine
        itinerary={itinerary}
        setStepCount={setStepCount}
        stepCount={stepCount}
      />
      <div className="booking-buttons">
        <button
          onClick={() =>
            setActiveForm(
              activeForm === "transportation" ? null : "transportation"
            )
          }
        >
          +transportation
        </button>
        <button
          onClick={() =>
            setActiveForm(activeForm === "accomodation" ? null : "accomodation")
          }
        >
          +accomodation
        </button>
        <button
          onClick={() =>
            setActiveForm(activeForm === "activity" ? null : "activity")
          }
        >
          +activity
        </button>
      </div>

      <div className="booking-planner">
        {activeForm === "transportation" && (
          <TransportationForm
            creationClbk={addCard}
            itinerary={itinerary}
            stepCount={stepCount}
          />
        )}
        {activeForm === "accomodation" && (
          <AccomodationForm
            itinerary={itinerary}
            stepCount={stepCount}
            creationClbk={addCard}
          />
        )}
        {activeForm === "activity" && (
          <ActivityForm
            creationClbk={addCard}
            itinerary={itinerary}
            stepCount={stepCount}
          />
        )}
      </div>
      <div className="cards-container">
        {cards.map((c, i) => {
          const oneStepValues = itinerary.steps[stepCount][c.type];
          const currentValue = oneStepValues[oneStepValues.length - 1];
          const CurrentCard = availableCards[c.type];
          return <CurrentCard key={i} resourceId={currentValue} />;
        })}
      </div>
    </div>
  );
}
