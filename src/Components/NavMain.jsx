import React from "react";
import { NavLink } from "react-router-dom";
import App from "../App";
import AppMap from "./AppMap";

const NavMain = () => {
  return (
    <nav className="nav-main">
      <div className="nav-section">
        <div className="nav-link">
          <NavLink exact className="link" activeClassName="is-active" to="/">
            Home
          </NavLink>
        </div>
        <div className="nav-link">
          <NavLink
            className="link"
            activeClassName="is-active"
            to="/itineraryplanner"
          >
            Itinerary Planner
          </NavLink>
        </div>
        <div className="nav-link">
          <NavLink
            className="link"
            activeClassName="is-active"
            to="/allmyitineraries"
          >
            All my Itineraries
          </NavLink>
        </div>
      </div>
      <div className="nav-section">
        <div className="nav-link">
          <NavLink className="link" activeClassName="is-active" to="/signin">
            SignIn
          </NavLink>
        </div>
        <div className="nav-link">
          <NavLink className="link" activeClassName="is-active" to="/signup">
            SignUp
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavMain;
