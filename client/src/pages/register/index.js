import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Nav from "../../components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "../../utils/API";
import "./register.css";

function Register() {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    var user = {
      email: email,
      name: name,
      password: password,
      password2: password2,
    };
    console.log(user);
    API.register(user).then((results) => {
      console.log(results);
    });
  }

  return (
    <div>
      <Nav />
      <Jumbotron className="Jumbotron" fluid>
        <Container>
          <h1>Welcome to the Registration Page! </h1>
          <p>Please create your credentials in the form below:</p>
        </Container>
      </Jumbotron>
      <form onSubmit={handleSubmit}>
        {/* <Form className="loginForm"> */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="username" onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control onChange={(e) => setPassword2(e.target.value)} type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Register;
