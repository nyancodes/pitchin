import "./App.css";
import { React, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Pitch from "./pages/Pitch";
import NoMatch from "./pages/NoMatch";
import NavBar from "./Components/NavBar/NavBar";
import NavBar2 from "./Components/NavBar2";

// ******* this is working! ************
//function App() {
//   return (
//     <Router>
//       <NavBar />  <--- this is working fine
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/pitches" component={Pitch} />
//         <Route component={NoMatch} />
//       </Switch>
//     </Router>
//   );
// }

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/pitches" component={Pitch} exact />
      </Switch>
    </Router>
  );
};

export default App;
