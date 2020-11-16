import "./App.css";
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import * as yup from "yup";
import loginFormSchema from "./js/utils/loginFormSchema";
import Home from "./js/components/Home";
import Header from "./js/components/Header";
import Register from "./Register";
import Login from "./Login";

function App() {
  const intiailFormValues = {
    name: "",
    email: "",
    message: "",
  };

  const defaultErrors = {
    name: "",
    email: "",
    message: "",
  };

  const [formState, setFormState] = useState(intiailFormValues);
  const [errorState, setErrorState] = useState(defaultErrors);

  const validate = (event) => {
    yup
      .reach(loginFormSchema, event.target.name)
      .validate(event.target.value)
      .then((valid) => {
        console.log(event.target.value, "VALUE HERE");
        setErrorState({ ...errorState, [event.target.name]: "" });
      })
      .catch((err) => {
        console.log(err);
        setErrorState({ ...errorState, [event.target.name]: err.errors[0] });
      });
  };

  const onChange = (event) => {
    event.persist();
    validate(event);

    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    setFormState({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/Register'>
          <Register
            errorState={errorState}
            onChange={onChange}
            formState={formState}
            onSubmit={onSubmit}
          />
        </Route>
        <Route path='/Login' component={Login} />

        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
