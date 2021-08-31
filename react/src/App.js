import "./App.css";
import { React, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Pitch from "./pages/Pitch";
import NoMatch from "./pages/NoMatch";
import Login from "./components/Forms/login";
import Register from "./components/Forms/register";

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
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
      </Switch>
    </Router>
  );
};

export default App;
