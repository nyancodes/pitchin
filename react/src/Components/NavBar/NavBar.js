import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Pitch In
          </Link>
          <div className="menu-icon" onClick={toggle}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <li className="nav-item">
                <Link to="/" className="navbar-logo">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pitches" className="navbar-logo">
                  Explore
                </Link>
              </li>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
