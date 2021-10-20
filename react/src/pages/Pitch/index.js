// import React from "react";
// import './style.css';

// function Pitch() {
//   return (
//     <p>View all Pitches</p>
//   );
// }

// export default Pitch;

import { React, useState } from "react";
import "./style.css";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import FetchPitches from "../../components/FetchPitches";

const Pitch = () => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <NavBar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <FetchPitches />
    </>
  );
};

export default Pitch;
