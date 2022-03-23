import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
