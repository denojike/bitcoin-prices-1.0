import React, { Component, Fragment } from "react";
import axios from "axios";
import Currencies from "./Currencies";

export default class Layout extends Component {
  state = {
    currency: "",
    codes: ["USD", "EUR", "GBP"]
  };

  componentDidMount = () => {
    const getCurrencies = () => {
      axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(currencies => {
          const currency = currencies.data.bpi;
          this.setState({ currency });
        });
    };
    getCurrencies();
  };

  render() {
    return (
      <Fragment>
        <div className="container text-center my-5">
          <h1>Bitcoin Prices App</h1>
          <p>Project created by Dennis Ojike</p>
          <Currencies currency={this.state.currency} codes={this.state.codes} />
        </div>
      </Fragment>
    );
  }
}
