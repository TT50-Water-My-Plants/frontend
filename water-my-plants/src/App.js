import "./App.css";
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import formSchema from "./formSchema";
import Home from "./Home";
import Header from "./js/components/Header";
import Register from "./Register";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/register">
          <Register
            errorState={errorState}
            onChange={onChange}
            formState={formState}
            onSubmit={onSubmit}
          />
        </Route>
        <Route path="/login"></Route>
        <Route path="/about">{/* <About /> */}</Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
