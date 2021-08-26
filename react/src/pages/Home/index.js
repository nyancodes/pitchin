import { React, useState } from "react";
import "./style.css";
import NavBar2 from "../../Components/NavBar2"; // not working
import NavBar from "../../Components/NavBar/NavBar"; // working

// **** this is working ***
// function Home() {
//   return (
//     <p>Homepage Yo</p>
//   );
// }

// export default Home;

const Home = () => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <NavBar2 toggle={toggle} />
    </>
  );
};

export default Home;
