import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Fragment>
      <div className="container text-center">
        <h1>Bitcoin Prices App</h1>
        <p>Project created by Dennis Ojike</p>
        <div className="card text-white bg-primary">
          <div className="btn-group" data-toggle="b‚uttons">
            <Link to="/price">
              <button className="btn btn-primary py-3 px-5">
                Current Price
              </button>
            </Link>
            <Link to="/conversion">
              <button className="btn btn-primary py-3 px-5">Conversion</button>
            </Link>

            <Link to="/">
              <button className="btn btn-primary py-3 px-5">Button</button>
            </Link>
            <Link to="/">
              <button className="btn btn-primary py-3 px-5">Button</button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
