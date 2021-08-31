import { React, useState } from "react";
import "./style.css";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import InfoSection from "../../components/InfoSection";
const Home = () => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <NavBar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <InfoSection />
    </>
  );
};

export default Home;
