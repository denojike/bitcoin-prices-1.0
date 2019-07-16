import React, { Component, Fragment } from "react";
import Prices from "./Prices";

export default class Currencies extends Component {
  state = {
    code: "",
    selectedPrice: ""
  };

  changeCurrency = e => {
    let code = e.target.value;

    let selectedPrice = "";
    if (code === "USD") {
      selectedPrice = this.props.currency.USD.rate;
    } else if (code === "EUR") {
      selectedPrice = this.props.currency.EUR.rate;
    } else if (code === "GBP") {
      selectedPrice = this.props.currency.GBP.rate;
    }
    this.setState({ code, selectedPrice });
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
                {this.props.codes.map(code => (
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
