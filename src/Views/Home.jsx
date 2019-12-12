import React from "react";
import homeImage from "../images/travel-plan.jpg";
import "../Styles/Home.css";
import GooglePlaces from "../Components/GooglePlaces";
import Slide from "../Components/Slide";
import { Link } from "react-router-dom";
import map from "../icons/map.png";
import booking from "../icons/booking.png";
import pencil from "../icons/pencil.png";

export default function Home() {
  return (
    <div>
      <section className="section1">
        <Link to="/signup" className="link">
          <h1 className="title">SIGN UP TO START THE JOURNEY</h1>
        </Link>
        <Slide />

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
        <div className="icon-container">
          <img className="icon" src={map} alt="map" />
          <img className="icon" src={pencil} alt="pencil" />
          <img className="icon" src={booking} alt="booking" />
        </div>
      </section>
    </div>
  );
}
