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
  const intiailFormValues = {
    username: "",
    phone_number: "",
    password: ""
  };

  const defaultErrors = {
    username: "",
    phone_number: "",
    password: ""
  };

  const [formState, setFormState] = useState(intiailFormValues);
  const [errorState, setErrorState] = useState(defaultErrors);
  const [user, setUser] = useState([]);

  const validate = event => {
    yup
      .reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then(valid => {
        console.log(event.target.value, "VALUE HERE");
        setErrorState({ ...errorState, [event.target.name]: "" });
      })
      .catch(err => {
        console.log(err);
        setErrorState({ ...errorState, [event.target.name]: err.errors[0] });
      });
  };

  const onChange = event => {
    event.persist();
    validate(event);

    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    axios
      .post(
        "https://water-my-plants-tt50.herokuapp.com/api/auth/register",
        formState
      )
      .then(res => {
        console.log(res, "RES HERE!!!!");
        setUser(arr => [...arr, res.data]);
        setFormState({
          username: "",
          phone_number: "",
          password: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
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
