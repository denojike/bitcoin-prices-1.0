import React, { Component, Fragment } from "react";

import Currencies from "./Currencies";

export default class Layout extends Component {
  render() {
    return (
      <Fragment>
        <div className="container text-center my-5">
          <h1>Bitcoin Prices App</h1>
          <p>Project created by Dennis Ojike</p>
          <Currencies />
        </div>
      </Fragment>
    );
  }
}
