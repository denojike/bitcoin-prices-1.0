// Currency conversion
// https://www.blockchain.com/api/exchange_rates_api

import React, { Component } from "react";
import axios from "axios";

export default class Conversion extends Component {
  state = {
    amount: "1",
    code: "USD",
    btcValue: "",
    url: ""
  };

  componentDidMount = () => {
    const code = this.state.code;
    const amount = this.state.amount;
    this.getBtcValue(code, amount);
  };

  getBtcValue = (code, amount) => {
    const url = `https://blockchain.info/tobtc?currency=${code}&value=${amount}`;

    axios
      .get(url)
      .then(converted => {
        const btcValue = converted.data;
        this.setState({ btcValue, url });
      })
      .catch(error => console.log(error));
  };

  changeCode = e => {
    const code = e.target.value;
    const amount = this.state.amount;
    this.setState({ code });
    if (this.state.amount === "") {
      return;
    } else {
      this.getBtcValue(code, amount);
    }
  };

  changeAmount = e => {
    const amount = e.target.value;
    const code = this.state.code;
    this.setState({ amount });
    if (amount === "" || amount === "0") {
      return;
    } else {
      this.getBtcValue(code, amount);
    }
    console.log(amount);
  };

  render() {
    return (
      <div>
        <div className="container">
          <form className="text-center form-group mt-5">
            <div className="card text-white bg-primary">
              <h5 className="card-header">Bitcoin Conversion</h5>
              <div className="bg-light py-3">
                <span className="mr-4">
                  <select name="code" onChange={this.changeCode}>
                    {this.props.codes.map(code => (
                      <option key={code} value={code}>
                        {code}
                      </option>
                    ))}
                  </select>
                </span>

                <span>
                  <input
                    type="text"
                    className=""
                    value={this.state.amount}
                    name={this.state.amount}
                    onChange={this.changeAmount}
                  />
                </span>
              </div>
            </div>
          </form>

          <div className="card text-white bg-primary mb-3 text-center">
            <h5 className="card-header"> {this.state.code} to Bitcoin</h5>
            <h4
              id="price"
              className="card-body bg-light text-dark heading-2 py-3"
            >
              {`${this.state.amount}${this.state.code} =  ${
                this.state.btcValue
              }`}
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
