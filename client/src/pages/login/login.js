import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Nav from "../../components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "../utils/API";
import "./login.css";

function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  function handleSubmit(e) {
    e.preventDefault()
    console.log("submitted")
    API.logIn({
      email: email,
      password: password
    }).then(results => {
      console.log(results)
    })
  }

  return (
    <div>
      <Nav />
      <Jumbotron className="Jumbotron" fluid>
        <Container>
          <h1>Welcome to the Stonx App! (name TBD) </h1>
          <p>Please enter your credentials in the form below:</p>
        </Container>
      </Jumbotron>
      <form onSubmit={handleSubmit}>
      {/* <Form className="loginForm"> */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text onChange={e => setEmail(e.target.value)} className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Login;

