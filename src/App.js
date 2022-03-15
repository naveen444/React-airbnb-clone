import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./utility/NavBar/NavBar";
// import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <Route path = "/" component={NavBar} />
        <Route exact path = "/" component={Home} />
      </Router>
    )
  }
}

export default App;