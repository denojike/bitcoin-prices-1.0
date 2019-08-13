import React, { Component } from "react";
import Navbar from "./Navbar";

export default class Conversion extends Component {
  render() {
    const {
      codes,
      code,
      btcValue,
      changeCode,
      changeAmount,
      amount
    } = this.props;
    return (
      <div>
        <Navbar linkName="Btc Price" linkPath="/price" />
        <div className="container">
          <form className="text-center form-group mt-5">
            <div className="card text-white bg-primary">
              <h5 className="card-header">Bitcoin Conversion</h5>
              <div className="bg-light py-3">
                <span className="mr-4">
                  <select name="code" onChange={changeCode} value={code}>
                    <option>{code}</option>
                    {codes.map(code => (
                      <option key={code}>{code}</option>
                    ))}
                  </select>
                </span>

                <span>
                  <input
                    type="text"
                    value={amount}
                    name="amount"
                    onChange={changeAmount}
                  />
                </span>
              </div>
            </div>
          </form>

          <div className="card text-white bg-primary mb-3 text-center">
            <h5 className="card-header"> {code} to Bitcoin</h5>
            <h4
              id="price"
              className="card-body bg-light text-dark heading-2 py-3"
            >
              {`${amount}${code} =  ${btcValue}`}
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
