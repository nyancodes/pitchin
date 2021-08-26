import { React, useState } from "react";
import "./style.css";
import NavBar from "../../Components/NavBar";
const Home = () => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <NavBar toggle={toggle} />
    </>
  );
};

export default Home;
