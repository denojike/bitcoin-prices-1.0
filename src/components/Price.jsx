import React, { Component } from "react";
import axios from "axios";

export default class Price extends Component {
  state = {
    codes: [],
    code: "",
    price: "",
    symbol: ""
  };
  componentDidMount = () => {
    const getInitialCurrencies = () => {
      axios.get("https://blockchain.info/ticker").then(currencies => {
        const code = "USD";
        const currency = currencies.data;
        const codes = Object.keys(currency);
        const price = currency[code].last;
        const symbol = currencies.data[code].symbol;
        this.setState({ codes, code, price, symbol });
      });
    };
    getInitialCurrencies();
  };

  //Change Currency
  changeCurrency = e => {
    let code = e.target.value;
    this.getCurrencies(code);
  };

  // Get bitcoin prices
  getCurrencies = code => {
    axios.get("https://blockchain.info/ticker").then(currencies => {
      const currency = currencies.data;
      const codes = Object.keys(currency);
      const price = currency[code].last;
      const symbol = currencies.data[code].symbol;
      this.setState({ codes, code, price, symbol });
    });
  };

  render() {
    const { codes, code, price, symbol } = this.state;

    return (
      <div>
        <div className="container">
          <form className="text-center form-group mt-5">
            <div className="card text-white bg-primary">
              <h5 className="card-header">Select Currency</h5>
              <div className="bg-light py-3">
                <select onChange={this.changeCurrency}>
                  <option value={code}>{code}</option>
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
