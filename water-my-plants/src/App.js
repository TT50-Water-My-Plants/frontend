import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../src/js/components/Home";
import Header from "../src/js/components/Header";
import Register from "./Register";
import Login from "./Login";
import PrivateRoute from "./auth/PrivateRoute"
import DashboardContainer from "./containers/DashboardContainer"
import AddPlantContainer from "./containers/AddPlantContainer"
import ViewPlantContainer from "./containers/ViewPlantContainer"
import EditPlantContainer from "./containers/EditPlantContainer"
import About from "./js/components/About";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/dashboard" component={DashboardContainer} />
        <PrivateRoute path="/add-plant" component={AddPlantContainer} />
        <PrivateRoute path="/update-plant/:id" component={EditPlantContainer} />
        <PrivateRoute path="/edit-plant/:id" component={ViewPlantContainer} />
      </Switch>
    </div>
  );
}

export default App
