import Nav from "../../components/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import InputGroup from "react-bootstrap/InputGroup";
// import FormControl from "react-bootstrap/FormControl";
import "bootstrap/dist/css/bootstrap.min.css";
import "./input.css";

function InputPage() {
  return (
    <div>
      <Nav />
      <h1>this is the input page!</h1>
      <Form className="stockInput">
        <Form.Group controlId="formStockname">
          <Form.Label>Stock ticker name</Form.Label>
          <Form.Control type="name" placeholder="AAPL" />
        </Form.Group>
        {/* functionality TBA */}
        {/* <Form.Group controlId="formDate">
          <Form.Label>Date Purchased</Form.Label>
          <Form.Control type="date" placeholder="MM/DD/YYYY" />
        </Form.Group> */}
        <Form.Group controlId="formNumber">
          <Form.Label>Quantity of Shares Purchased</Form.Label>
          <Form.Control type="number" placeholder="1000" />
        </Form.Group>
        {/* functionality TBA */}
        {/* <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl aria-label="Amount per share" />
          <InputGroup.Append>
            <InputGroup.Text>/share</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup> */}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default InputPage;
