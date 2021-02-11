import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./pages/register"
import Login from "./pages/login/login";
import InputForm from "./pages/input/inputForm";
import Oops from "./pages/oops/oops";
import Main from "./pages/main/main";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/main">
              <Main />
            </Route>
            <Route exact path="/input">
              <InputForm />
            </Route>
            <Route exact path="/register">
                <Register />
            </Route>
            <Route>
              <Oops />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;
