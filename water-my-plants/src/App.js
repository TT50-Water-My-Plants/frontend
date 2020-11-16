import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register"></Route>
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
