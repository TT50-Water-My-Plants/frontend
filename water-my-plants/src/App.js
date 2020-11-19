import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../src/js/components/Home";
import Header from "../src/js/components/Header";
import Register from "./Register";
import Login from "./Login";
<<<<<<< HEAD
import PrivateRoute from "./auth/PrivateRoute"
import DashboardContainer from "./containers/DashboardContainer"
import AddPlantContainer from "./containers/AddPlantContainer"
import UpdateUserContainer from "./containers/UpdateUserContainer"
=======
import PrivateRoute from "./auth/PrivateRoute";
import DashboardContainer from "./containers/DashboardContainer";
import AddPlantContainer from "./containers/AddPlantContainer";
import UpdateUserContainer from "./containers/UpdateUserContainer";
>>>>>>> 8b317ed389aba8b9ac500cb807692258f9b73c0f
import About from "./js/components/About";

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
        <PrivateRoute path="/account" component={UpdateUserContainer} />
      </Switch>
    </div>
  );
}

export default App;
