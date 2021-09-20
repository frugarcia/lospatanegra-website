// Dependencies
import React from "react";
import {Image, Navbar as BSNavbar} from "react-bootstrap";

function NavBar() {
  return (
    <BSNavbar bg="light">
      <div className="my-navbar-brand">
        <Image src="/logo.svg" className="image" />
        <span>Los Pata Negra</span>
      </div>
    </BSNavbar>
  );
}

export default NavBar;
