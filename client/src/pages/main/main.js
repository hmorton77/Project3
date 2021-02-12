import React from "react";
import Nav from "../../components/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Stock from "../../components/Stocks/index";
import LineChart from "../../components/Linechart/LineChart";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

import NewsApi from "../../components/newsApi/NewsApi";
import { stockNewsKey, cryptoNewsKey } from "../../APIkeys";

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
          <NewsApi domain="stocknewsapi.com" token={stockNewsKey} />
        </Col>
        <Col>
          <NewsApi domain="cryptonews-api.com" token={cryptoNewsKey} />
        </Col>
      </Row>
    </Container>
  );
}
export default Main;
