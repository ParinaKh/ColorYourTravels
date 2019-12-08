import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./Views/Home";
import ItineraryPlanner from "./Views/ItineraryPlanner";
import AllmyItineraries from "./Views/AllmyItineraries";
import SignUp from "./Views/SignUp";
import SignIn from "./Views/SignIn";

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
          <Route path="/All-my-Itineraries" component={AllmyItineraries} />
          <Route path="/Sign-in" component={SignIn} />
          <Route path="/Sign-up" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
