import React, { Component } from "react";
import Navbar from "./Navbar";

export default class Price extends Component {
  render() {
    const { codes, code, price, symbol } = this.props;
    const { changeCurrency } = this.props;

    return (
      <div>
        <Navbar linkName="Btc Converstion" linkPath="/conversion" />
        <div className="container">
          <form className="text-center form-group mt-5">
            <div className="card text-white bg-primary">
              <h5 className="card-header">Select Currency</h5>
              <div className="bg-light py-3">
                <select onChange={changeCurrency} name="code">
                  <option key={code} value={code}>
                    {code}
                  </option>
                  {codes.map(code => (
                    <option key={code} value={code}>
                      {code}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </form>

          <div className="card text-white bg-primary mb-3 text-center">
            <h5 className="card-header">
              Bitcoin Price {symbol && `for ${code}`}
            </h5>
            <h4
              id="price"
              className="card-body bg-light text-dark heading-2 py-3"
            >
              {`${symbol} ${price}`}
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
