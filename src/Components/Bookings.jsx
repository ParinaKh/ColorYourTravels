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
  const [itinerary, setItinerary] = useState({});
  const [stepCount, setStepCount] = useState(0);
  const [activeForm, setActiveForm] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/itinerary/${props.match.params.id}`
      )
      .then(apiRes => {
        console.log(apiRes);

        setItinerary(apiRes.data);
      })
      .catch(apiErr => console.error(apiErr));
    return () => {};
  }, []);

  useEffect(() => {
    if (!cards.length && Object.keys(itinerary).length) addCards();
  }, [itinerary, cards]);

  const addCards = () => {
    console.log("todo add cards", itinerary.steps[stepCount]);
  };

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
    <div className="booking-page">
      <div className="booking-container">
        <GeoLine
          itinerary={itinerary}
          setStepCount={setStepCount}
          stepCount={stepCount}
        />
        <div className="booking-buttons">
          <button
            className="button-transportation"
            onClick={() =>
              setActiveForm(
                activeForm === "transportation" ? null : "transportation"
              )
            }
          >
            + transportation
          </button>
          <button
            className="button-accomodation"
            onClick={() =>
              setActiveForm(
                activeForm === "accomodation" ? null : "accomodation"
              )
            }
          >
            + accomodation
          </button>
          <button
            className="button-activity"
            onClick={() =>
              setActiveForm(activeForm === "activity" ? null : "activity")
            }
          >
            + activity
          </button>
        </div>

        <div className="booking-planner">
          <div>
            {activeForm === "transportation" && (
              <TransportationForm
                creationClbk={addCard}
                itinerary={itinerary}
                stepCount={stepCount}
              />
            )}
          </div>
          <div>
            {activeForm === "accomodation" && (
              <AccomodationForm
                itinerary={itinerary}
                stepCount={stepCount}
                creationClbk={addCard}
              />
            )}
          </div>
          <div>
            {activeForm === "activity" && (
              <ActivityForm
                creationClbk={addCard}
                itinerary={itinerary}
                stepCount={stepCount}
              />
            )}
          </div>
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
    </div>
  );
}
