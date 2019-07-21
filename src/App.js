import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import axios from "axios";
import Price from "./components/Price";
import Navbar from "./components/Navbar";
// import "./App.css";
import Conversion from "./components/Conversion";

class App extends Component {
  state = {
    codes: [],
    code: "USD",
    price: "",
    symbol: ""
  };

  componentDidMount = () => {
    const getInitialCurrencies = () => {
      axios.get("https://blockchain.info/ticker").then(currencies => {
        const code = this.state.code;
        const currency = currencies.data;
        const price = currency[code].last;
        const symbol = currencies.data[code].symbol;
        const codes = Object.keys(currency);
        this.setState({ codes, code, price, symbol });
      });
    };
    getInitialCurrencies();
  };

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Price} />
        <Route exact path="/Price" component={Price} />
        <Route
          exact
          path="/conversion"
          render={routeProps => (
            <Conversion {...routeProps} codes={this.state.codes} />
          )}
        />

        <Redirect to="/" />
      </BrowserRouter>
    );
  }
}

export default App;
