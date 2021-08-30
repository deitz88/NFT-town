import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "../Home/Home.jsx";
import Browse from "../Browse/Browse.jsx";
import Nav from '../../components/Nav/Nav'

export default function App() {
  return (
    <div className="App">
        <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/browse">
          <Browse />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
