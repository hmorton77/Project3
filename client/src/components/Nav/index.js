import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import STONX from "../../images/STONX.png";
import React from "react";

import "./style.css";

function nav() {
  return (
    <Navbar bg="white" expand="lg">
      <Navbar.Brand href="/">
        <img src={STONX} width="101" height="57" className="d-inline-block align-top" alt="Stonx Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Sign Out</Nav.Link>
          <Nav.Link href="/main"> Main(this will be removed later, just here as an easy shortcut)</Nav.Link>
          <Nav.Link href="/input">Add to Portfolio</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default nav;
