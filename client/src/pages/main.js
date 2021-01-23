import React from "react";
import Nav from "../components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

function Main() {
  return (
    <div>
      <Nav />
      <h1>
        this is the main page! there will be 4 main components below: to the left, is the stock analysis app, the center is the graph, the right will have news
        headlines, and the bottom will have an analysis on whether the stock is hot or cold
      </h1>
    </div>
  );
}
export default Main;
