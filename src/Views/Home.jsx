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
        <div className="icon-container">
          <img className="icon" src={map} alt="map" />
          <img className="icon" src={pencil} alt="pencil" />
          <img className="icon" id="booking" src={booking} alt="booking" />
        </div>
        <div className="all-containers">
          <div className="text-container">
            <h2 className="home-subtitle">Get a personalized plan</h2>
            <div>A complete day by day Itinerary based on your preferences</div>
          </div>
          <div className="text-container">
            <h2 className="home-subtitle">Customize it</h2>
            <div>Refine your plan</div>
          </div>
          <div className="text-container">
            <h2 className="home-subtitle">Manage it</h2>
            <div>All your bookings in one place</div>
          </div>
        </div>
      </section>
    </div>
  );
}
