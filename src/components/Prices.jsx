import React from "react";

export default function Prices({ selectedPrice, code }) {
  return (
    <div className="card text-white bg-primary mb-3">
      <h5 className="card-header">
        Bitcoin Price{" "}
        <span>{code === "select currency" ? "" : code && `for ${code}`}</span>
      </h5>
      <h4 id="price" className="card-body bg-light text-dark heading-2 py-4">
        {selectedPrice}
      </h4>
    </div>
  );
}
