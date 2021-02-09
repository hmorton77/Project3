import React from "react";
import Nav from "../../components/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Stock from "../../components/Stocks/index";
import Chart from "../../components/ChartPage/Chart";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

import "./main.css";

// importing the components for the API calls
// import Ticker from "../../components/ticker";
// import CryptoNews from "../../components/cryptoNews";
// import StockNews from "../../components/stockNews";
// import HotCold from "../../components/hotCold";

function Main() {
  return (
    <Container>
      <Nav />
      <h1>
        this is the main page! there will be 4 main components below: to the left, is the stock analysis app, the center is the graph, the right will have news
        headlines, and the bottom will have an analysis on whether the stock is hot or cold
      </h1>
      <Row>
        <Col>
          <Stock />
        </Col>
        <Col>
          <h2>This Div will contain a line chart of the stocks</h2>
          <Chart />
        </Col>
        <Col>
          <h2>This Div will contain news headlines that relate to your portfolio!</h2>
        </Col>
      </Row>
      <Row>
        <h2>This Div will contain some hot or cold stocks to scoop up with your profits!</h2>
        {/* <HotCold /> */}
      </Row>
    </Container>
  );
}
export default Main;
