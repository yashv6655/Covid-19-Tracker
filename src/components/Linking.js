import React from "react";

export default function Linking() {
  return (
    <div className="d-flex justify-content-center mb-5">
      <div class="list-group align-globalLists-center mr-1">
        <li className="list-group-item list-group-item-action active ">
          <strong>Choose Reigon</strong>
        </li>
        <a
          href="#north-america"
          className="list-group-item list-group-item-action"
        >
          <strong>North America</strong>
        </a>
        <a
          href="#south-america"
          className="list-group-item list-group-item-action"
        >
          <strong>South America</strong>
        </a>
        <a href="#europe" className="list-group-item list-group-item-action">
          <strong>Europe</strong>
        </a>
      </div>
      <div class="list-group align-globalLists-center">
        <li className="list-group-item list-group-item-action active ">
          <strong>Choose Reigon</strong>
        </li>
        <a href="#africa" className="list-group-item list-group-item-action">
          <strong>Africa</strong>
        </a>
        <a href="#asia" className="list-group-item list-group-item-action">
          <strong>Asia</strong>
        </a>
        <a href="#australia" className="list-group-item list-group-item-action">
          <strong>Australia/Oceania</strong>
        </a>
      </div>
    </div>
  );
}
