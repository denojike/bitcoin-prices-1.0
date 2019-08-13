import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Price from "./components/Price";
import Navbar from "./components/Navbar";
import Conversion from "./components/Conversion";
import { getData, getConversion } from "./apiKeys";

class App extends Component {
  state = {
    codes: [],
    code: "USD",
    btcValue: "",
    price: "",
    symbol: "",
    amount: "1"
  };

  // Setting initial state
  componentDidMount = async () => {
    const code = this.state.code;
    const amount = this.state.amount;
    // Get Initial Data
    const currency = await getData(code);
    const price = currency.price;
    const symbol = currency.symbol;
    const codes = currency.codes;
    this.setState({ codes, price, symbol });
    // Get conversion api;
    const btcValue = await getConversion(code, amount);
    this.setState({ btcValue });
  };

  // Control Price Component
  changeCurrency = async e => {
    const code = e.target.value;
    const currency = await getData(code);
    const price = currency.price;
    const symbol = currency.symbol;
    this.setState({ code, price, symbol });
  };

  // Control Conversion component
  changeCode = async e => {
    const code = e.target.value;
    const amount = this.state.amount;
    this.setState({ code });
    if (this.state.amount === "") {
      return;
    } else {
      const btcValue = await getConversion(code, amount);
      this.setState({ btcValue });
    }
  };
  changeAmount = async e => {
    const amount = e.target.value;
    const code = this.state.code;
    this.setState({ amount });
    if (amount === "" || amount === "0") {
      return;
    } else {
      const btcValue = await getConversion(code, amount);
      this.setState({ btcValue });
    }
  };

  render() {
    const { codes, code, btcValue, price, amount, symbol } = this.state;

    return (
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={routeProps => (
            <Price
              {...routeProps}
              codes={codes}
              code={code}
              price={price}
              symbol={symbol}
              changeCurrency={this.changeCurrency}
              changeCode={this.changeCode}
            />
          )}
        />
        <Route
          exact
          path="/price"
          render={routeProps => (
            <Price
              {...routeProps}
              codes={codes}
              code={code}
              price={price}
              symbol={symbol}
              changeCurrency={this.changeCurrency}
              changeCode={this.changeCode}
            />
          )}
        />
        <Route
          exact
          path="/conversion"
          render={Props => (
            <Conversion
              {...Props}
              codes={codes}
              code={code}
              btcValue={btcValue}
              amount={amount}
              handleChange={this.handleChange}
              changeAmount={this.changeAmount}
              changeCode={this.changeCode}
              handleConversion={this.handleConversion}
            />
          )}
        />
      </BrowserRouter>
    );
  }
}

export default App;
