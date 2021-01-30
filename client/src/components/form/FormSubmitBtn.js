import React from "react";
import Button from "react-bootstrap/Button";

export function FormSubmitBtn(props) {
  return (
    <Button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </Button>
  );
}
