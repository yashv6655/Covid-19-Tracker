import React from "react";
import Data from "./components/Data";
import WorldMap from "./components/WorldMap";
import ErrorPage from "./components/ErrorPage";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Data />
        </Route>
        <Route path="/worldmap">
          <WorldMap />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}
