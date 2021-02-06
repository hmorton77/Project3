import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Nav from "../../components/Nav";
import { Input, FormSubmitBtn } from "../../components/form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";

function Login() {
  return (
    <div>
      <Nav />
      <Jumbotron className="Jumbotron" fluid>
        <Container>
          <h1>Welcome to the Stonx App! (name TBD) </h1>
          <p>Please enter your credentials in the form below:</p>
        </Container>
      </Jumbotron>
      <Form className="loginForm">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;