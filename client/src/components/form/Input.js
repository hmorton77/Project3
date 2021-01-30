import React from "react";
import Form from "react-bootstrap/Form";

export function Input(props) {
  return (
    <Form.Group>
      <Form.Control {...props}></Form.Control>
    </Form.Group>
  );
}
