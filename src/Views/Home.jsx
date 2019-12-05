import React from "react";
import homeImage from "../images/travel-plan.jpg";
import ItineraryPlanner from "./ItineraryPlanner";

export default function Home() {
  return (
    <div>
      <section className="section1">
        <h1 className="title">SIGN UP TO START THE JOURNEY</h1>
        <img className="homepage-image" src={homeImage} alt={"homeImage"} />

        <div>
          <ItineraryPlanner />
        </div>
      </section>
    </div>
  );
}
