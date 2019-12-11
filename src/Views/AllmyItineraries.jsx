import React, { Component } from "react";
import ApiHandler from "../api/ApiHandler";
import ItineraryCard from "../Components/ItineraryCard";

export default class AllmyItineraries extends Component {
  render() {
    return (
      <div>
        <ItineraryCard />
      </div>
    );
  }
}
