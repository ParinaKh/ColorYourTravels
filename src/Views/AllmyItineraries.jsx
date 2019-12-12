import React, { Component } from "react";
import ApiHandler from "../api/ApiHandler";
import ItineraryCards from "../Components/ItineraryCards";

export default class AllmyItineraries extends Component {
  render() {
    return (
      <div>
        <ItineraryCards />
      </div>
    );
  }
}
