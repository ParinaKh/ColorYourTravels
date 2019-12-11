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
import Itinerary from "./Components/Itinerary";
import Bookings from "./Components/Bookings";
// import Accomodations from "./Components/Accomodations";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavMain />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/itineraryplanner" component={ItineraryPlanner} />
          <Route path="/allmyitineraries" component={AllmyItineraries} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          {/*
           */}
          {/* <Route path="/Sign-up/:id" component={SignUp} /> */}
          <Route path="/itinerary/:id" component={Bookings} />
          <Route path="/itineraryplanner" component={Itinerary} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
