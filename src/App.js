import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./Views/Home";
import ItineraryPlanner from "./Views/ItineraryPlanner";
import PreviousTravels from "./Views/PreviousTravels";

// import component (view partials)
import NavMain from "./Components/NavMain";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavMain />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/itinerary-planner" component={ItineraryPlanner} />
          <Route path="/previous-travels" component={PreviousTravels} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
