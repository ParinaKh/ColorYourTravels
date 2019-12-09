import React from "react";
import { NavLink } from "react-router-dom";
import App from "../App";
import AppMap from "./AppMap";

const NavMain = () => {
  return (
    <div>
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
              to="/itinerary-planner"
            >
              Itinerary Planner
            </NavLink>
          </div>
          <div className="nav-link">
            <NavLink
              className="link"
              activeClassName="is-active"
              to="/All-my-Itineraries"
            >
              All my Itineraries
            </NavLink>
          </div>
        </div>
        <div className="nav-section">
          <div className="nav-link">
            <NavLink className="link" activeClassName="is-active" to="/sign-in">
              SignIn
            </NavLink>
          </div>
          <div className="nav-link">
            <NavLink className="link" activeClassName="is-active" to="/sign-up">
              SignUp
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavMain;
