import React, { Component, Fragment } from "react";
import axios from "axios";
import Prices from "./Prices";

export default class Currencies extends Component {
  state = {
    currency: "",
    codes: ["USD", "EUR", "GBP"],
    code: "",
    selectedPrice: ""
  };

  // Get bitcoin prices
  getCurrencies = code => {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(currencies => {
        const currency = currencies.data.bpi;
        let selectedPrice = "";
        if (code === "USD") {
          selectedPrice = currency.USD.rate;
        } else if (code === "EUR") {
          selectedPrice = currency.EUR.rate;
        } else if (code === "GBP") {
          selectedPrice = currency.GBP.rate;
        }
        this.setState({ currency, code, selectedPrice });
      });
  };

  changeCurrency = e => {
    let code = e.target.value;
    this.getCurrencies(code);
  };

  render() {
    return (
      <Fragment>
        <form className="text-center form-group mt-5">
          <div className="card text-white bg-primary">
            <h5 className="card-header">Select Currency</h5>
            <div className="bg-light py-4">
              <select id="currency-value" onChange={this.changeCurrency}>
                <option>select currency</option>
                {this.state.codes.map(code => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>
        <Prices
          selectedPrice={this.state.selectedPrice}
          code={this.state.code}
        />
      </Fragment>
    );
  }
}
