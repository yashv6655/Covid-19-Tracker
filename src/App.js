import React from "react";
import GlobalData from "./components/data/GlobalData";
import WorldMap from "./components/WorldMap";
import ErrorPage from "./components/ErrorPage";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <GlobalData />
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
