import Nav from "../../components/Nav";
import Form from "react-bootstrap/Form";
import { Input, FormSubmitBtn } from "../../components/form";

// import InputGroup from "react-bootstrap/InputGroup";
// import FormControl from "react-bootstrap/FormControl";
import "bootstrap/dist/css/bootstrap.min.css";
import "./input.css";
import React, { useState, useEffect } from "react";
import API from "../../utils/API";

function InputPage() {
  //hooks:
  const [stocks, setStocks] = useState([]);
  const [formObject, setFormObject] = useState({});

  useEffect(() => {
    loadStocks();
  }, []);

  // when someone inputs something into the form, the text that has been input will be turned into an object with the key in the formObject state.
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }
  // this will generate the stocks from the database when we call for it.
  function loadStocks() {
    API.getStocks()
      .then((res) => setStocks(res.data))
      .catch((err) => console.log(err));
  }

  // when the submit button is clicked, instead of reloading the page, we'll save it to the database, and then reload the page.
  function handleFormSubmit(event) {
    event.preventDefault();
    API.saveStock({
      stockName: formObject.stockName,
      stockAmount: formObject.stockAmount,
      email: "test@test.com",
    })
      .then(() =>
        setFormObject({
          stockName: "",
          stockAmount: "",
        })
      )
      .then(() => console.log("stocks logged!"))
      .catch((err) => console.log(err));
  }
  function test(event) {
    event.preventDefault();
    console.log("hello!");
  }
  // what you will see on the webpage
  return (
    <div>
      <Nav />
      <h1>this is the input page!</h1>
      <Form className="stockInput">
        <Input onChange={handleInputChange} name="stock name" placeholder="AAPL" value={formObject.stockName} />

        <Input onChange={handleInputChange} name="stock amount (shares)" placeholder="1000" type="number" value={formObject.stockAmount} />

        <FormSubmitBtn onClick={handleFormSubmit}>Add to portfolio</FormSubmitBtn>
      </Form>
    </div>
  );
}
export default InputPage;
