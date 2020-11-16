import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register"></Route>
        <Route path="/login"></Route>
        <Route path="/about">{/* <About /> */}</Route>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
