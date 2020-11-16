import "./App.css";
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Register from "./Register";

function App() {
  const intiailFormValues = {
    name: "",
    email: "",
    message: ""
  };

  const [formState, setFormState] = useState(intiailFormValues);

  const onChange = event => {
    const valueOf = event.target.value;

    setFormState({
      ...formState,
      [event.target.name]: valueOf
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
