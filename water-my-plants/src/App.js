import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Register from "./Register";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/register">
          <Register />
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
