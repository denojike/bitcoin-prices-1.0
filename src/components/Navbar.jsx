import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const myLink = {
    fontSize: "17px",
    color: "yellow"
  };
  return (
    <Fragment>
      <div className="container text-center">
        <h1>Bitcoin Prices App </h1>
        <p>Project created by Dennis Ojike</p>
        <div className="card text-white bg-primary ">
          <div className="btn-group">
            <button className="btn btn-primary py-2 my-btn">
              <NavLink activeStyle={myLink} to="/price">
                Btc Price
              </NavLink>
            </button>

            <button className="btn btn-primary my-btn">
              <NavLink activeStyle={myLink} to="/conversion">
                Btc Conversion
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
