import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ linkName, linkPath }) {
  return (
    <Fragment>
      <div className="container text-center">
        <h1>Bitcoin Prices App </h1>
        <p>Project created by Dennis Ojike</p>
        <div className="card text-white   my-btn ">
          <div className="btn-group">
            <button className=" btn py-2">
              <NavLink activeClassName="text-white" to={`${linkPath}`}>
                {linkName}
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
