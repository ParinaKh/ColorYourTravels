import React from "react";
import { NavLink } from "react-router-dom";
import App from "../App";
import AppMap from "./AppMap";

const NavMain = () => {
  return (
    <div>
      <nav className="nav-main">
        <div className="nav-link">
          <NavLink exact to="/">
            Home
          </NavLink>
        </div>
        <div className="nav-link">
          <NavLink to="/itinerary-planner">Trip Planner</NavLink>
        </div>
        <div className="nav-link">
          <NavLink to="/previous-travels">Previous Travels</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavMain;
