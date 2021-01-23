import React from "react";
import Nav from "../components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

function Oops() {
  return (
    <div>
      <Nav />
      <h1>OOPS!</h1>
      <h2>It looks like this page doesn't exist! please return to the main page and proceed from there!</h2>
    </div>
  );
}
export default Oops;
