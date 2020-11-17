import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../src/js/components/Home";
import Header from "../src/js/components/Header";
import Register from "./Register";
import Login from "../src/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
