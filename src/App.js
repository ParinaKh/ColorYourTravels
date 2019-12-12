import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./Views/Home";
import ItineraryPlanner from "./Views/ItineraryPlanner";
import AllmyItineraries from "./Views/AllmyItineraries";
import OneItinerary from "./Components/OneItinerary";
import SignUp from "./Views/SignUp";
import SignIn from "./Views/SignIn";

// import component (view partials)
import NavMain from "./Components/NavMain";
import Itinerary from "./Components/Itinerary";
import Bookings from "./Components/Bookings";
// import Accomodations from "./Components/Accomodations";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavMain />
        <main id="main-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/itineraryplanner" component={ItineraryPlanner} />
            <Route
              exact
              path="/allmyitineraries"
              component={AllmyItineraries}
            />
            <Route path="/allmyitineraries/:id" component={OneItinerary} />
            <Route exact path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            {/*
             */}
            {/* <Route path="/Sign-up/:id" component={SignUp} /> */}
            <Route exact path="/itinerary/:id" component={Bookings} />
            {/* <Route path="/itinerary/:id" component={Bookings} /> */}
            <Route exact path="/itineraryplanner" component={Itinerary} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
