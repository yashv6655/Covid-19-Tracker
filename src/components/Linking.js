import React from "react";

export default function Linking() {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="list-group text-center mb-5"
        style={{ height: "auto", width: "9.75rem" }}
      >
        <a
          className="list-group-item list-group-item-action"
          href="#north-america"
        >
          <strong>North America</strong>
        </a>
      </div>
      <div
        className="list-group text-center mb-5 ml-2"
        style={{ height: "auto", width: "9.75" }}
      >
        <a
          className="list-group-item list-group-item-action"
          href="#south-america"
        >
          <strong>South America</strong>
        </a>
      </div>
      <div
        className="list-group text-center mb-5 ml-2"
        style={{ height: "auto", width: "9.75rem" }}
      >
        <a className="list-group-item list-group-item-action" href="#europe">
          <strong>Europe</strong>
        </a>
      </div>
    </div>
  );
}
