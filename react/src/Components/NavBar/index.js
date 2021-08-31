import { React, useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavBarElement";

const NavBar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">PitchIn</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/pitches" activeClassName="active">
                Explore
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/login" activeClassName="active">
                Login
              </NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks to="/start">Start a Pitch</NavLinks>
            </NavItem> */}
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
