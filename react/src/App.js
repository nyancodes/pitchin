import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Pitch from "./pages/Pitch";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pitches" component={Pitch} />
          <Route component={NoMatch} />
        </Switch>
    </Router>
  );
}

export default App;
