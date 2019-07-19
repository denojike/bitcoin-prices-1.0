import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Fragment>
      <div className="container text-center">
        <h1>Bitcoin Prices App</h1>
        <p>Project created by Dennis Ojike</p>
        <div className="card text-white bg-primary ">
          <div className="btn-group">
            <button className="btn btn-primary py-2">
              <NavLink className="text-white" to="/price">
                Btc Price
              </NavLink>
            </button>
            <button className="btn btn-primary">
              <NavLink className="text-white" to="/conversion">
                Btc Conversion
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
