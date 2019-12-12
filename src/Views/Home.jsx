import React from "react";
import homeImage from "../images/travel-plan.jpg";
import "../Styles/Home.css";
import GooglePlaces from "../Components/GooglePlaces";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <section className="section1">
        <Link to="/signup" className="link">
          <h1 className="title">SIGN UP TO START THE JOURNEY</h1>
        </Link>
        <img className="homepage-image" src={homeImage} alt={"homeImage"} />
        <div className="all-containers">
          <div className="text-container">
            <h2 className="home-subtitle">Get a personalized plan</h2>
            <p>A complete day by day Itinerary based on your preferences</p>
          </div>
          <div className="text-container">
            <h2 className="home-subtitle">Customize it</h2>
            <p>Refine your plan.</p>
          </div>
          <div className="text-container">
            <h2 className="home-subtitle">Manage it</h2>
            <p>All your bookings in one place</p>
          </div>
        </div>
      </section>
    </div>
  );
}
