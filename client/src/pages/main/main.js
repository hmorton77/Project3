import React from "react";
import Nav from "../../components/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Stock from "../../components/Stocks/index";
import LineChart from "../../components/Linechart/LineChart";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

import "./main.css";

function Main() {
  return (
    <Container fluid>
      <Nav />
      <h1>Welcome!</h1>
      <Row>
        <Col>
          <Stock />
        </Col>
        <Col>
          <LineChart />
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
