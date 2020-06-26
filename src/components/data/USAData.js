import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { REACT_APP_FINNHUB_TOKEN } from "../../env";

export default function USAData() {
  const [usStates, setUsStates] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://finnhub.io/api/v1/covid19/us?token=${REACT_APP_FINNHUB_TOKEN}`
      )
      .then((res) => {
        setUsStates(res.data);
        //console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterStates = usStates.filter((state) => {
    return state.state.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <h1 className="text-info text-center mt-5">USA</h1>
      <div className="d-flex justify-content-center">
        <div
          className="overflow-auto bg-dark text-center mb-5"
          style={{ height: "35rem", width: "60rem" }}
        >
          <input
            type="text"
            placeholder="Search By State Name"
            onChange={(e) => setSearch(e.target.value)}
            className="form-control text-center bg-dark text-primary"
          />
          <table className="table table-hover bg-dark">
            <thead>
              <tr className="bg-dark text-center">
                <th scope="col" className="text-info bg-dark sticky-top">
                  State
                </th>
                <th scope="col" className="text-warning bg-dark sticky-top">
                  Total Confirmed
                </th>
                <th scope="col" className="text-danger bg-dark sticky-top">
                  Total Deaths
                </th>
                <th scope="col" className="text-white bg-dark sticky-top">
                  Date Updated
                </th>
              </tr>
            </thead>
            <tbody>
              {filterStates.map((state, index) => {
                return (
                  <tr key={index}>
                    <th scope="row" className="text-info">
                      {state.state}
                    </th>
                    <td className="text-warning">{state.case}</td>
                    <td className="text-danger">{state.death}</td>
                    <td className="text-white">{state.updated}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
