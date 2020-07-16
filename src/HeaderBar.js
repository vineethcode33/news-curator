import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import "./HeaderBar.css";

const HeaderBar = () => {
  return (
    <div>
      <Navbar light expand="md" className="header-bar">
        <NavbarBrand href="/">NC</NavbarBrand>
        <NavbarBrand href="/">News Curator</NavbarBrand>
        <NavbarToggler />
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="">Trending</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">Latest</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default HeaderBar;
