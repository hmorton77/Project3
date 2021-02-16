import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Stock from "../../components/Stocks/index";
import LineChart from "../../components/Linechart/LineChart";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

import NewsApi from "../../components/newsApi/NewsApi";
import { stockNewsKey, cryptoNewsKey } from "../../keys";
import API from "../../utils/API";

import "./main.css";

function Main() {
  const [tickers, setTickers] = useState([]);

  useEffect(() => {
    API.getTickers()
      .then((res) => {
        setTickers(res.data);
      })
      .catch((err) => console.log(err));
  }, [tickers]);

  return (
    <Container fluid>
      <Nav />
      <h1>Welcome!</h1>
      <Row>
        <Col>
          <Stock />
        </Col>
        <Col>
          <LineChart tickers={tickers} />
        </Col>
        <Col>
          <h2>Stock News</h2>
          <NewsApi domain="stocknewsapi.com" token={stockNewsKey} />
        </Col>
        <Col>
          <h2>Crypto News</h2>
          <NewsApi domain="cryptonews-api.com" token={cryptoNewsKey} />
        </Col>
      </Row>
    </Container>
  );
}
export default Main;
