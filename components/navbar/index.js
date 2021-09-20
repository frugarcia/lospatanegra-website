// Dependencies
import React from "react";
import { Image, Navbar } from "react-bootstrap";

export default () => {
  return (
    <Navbar bg="light">
      <div className="my-navbar-brand">
        <Image src="/logo.svg" className="image" />
        <span>Los Pata Negra</span>
      </div>
    </Navbar>
  );
};
