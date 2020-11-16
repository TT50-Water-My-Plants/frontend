import "./App.css";
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import * as yup from "yup";
import formSchema from "./formSchema";
import Home from "./Home";
import Header from "./Header";
import Register from "./Register";

function App() {
  const intiailFormValues = {
    name: "",
    email: "",
    message: ""
  };

  const defaultErrors = {
    name: "",
    email: "",
    message: ""
  };

  const [formState, setFormState] = useState(intiailFormValues);
  const [errorState, setErrorState] = useState(defaultErrors);

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
    setFormState({
      name: "",
      email: "",
      message: ""
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
