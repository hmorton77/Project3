import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import React from "react";

import "./style.css";

function nav() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Stonks!</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/login">Sign Out</Nav.Link>
          <Nav.Link href="/input">Add to Portfolio</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default nav;
