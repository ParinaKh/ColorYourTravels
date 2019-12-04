import React from "react";
import { NavLink } from "react-router-dom";
const NavMain = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/itinerary-planner">Trip Planner</NavLink>
        </li>
        <li>
          <NavLink to="/previous-travels">Previous Travels</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMain;
