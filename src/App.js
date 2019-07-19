import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Price from "./components/Price";
import Navbar from "./components/Navbar";
// import "./App.css";
import Conversion from "./components/Conversion";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Price} />
      <Route exact path="/price" component={Price} />
      <Route exact path="/conversion" component={Conversion} />
      <Redirect to="/" />
    </BrowserRouter>
  );
}

export default App;
