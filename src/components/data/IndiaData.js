import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function IndiaData() {
  const [indiaStates, setIndiaStates] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://covid19-india-adhikansh.herokuapp.com/states")
      .then((res) => {
        setIndiaStates(res.data.state);
        //console.log(res.data.state);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterStates = indiaStates.filter((state) => {
    return state.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <h1 className="text-info mt-5 text-center">India</h1>
      <div className="d-flex justify-content-center">
        <div
          className="overflow-auto bg-dark text-center mb-3"
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
                <th scope="col" className="text-success bg-dark sticky-top">
                  Total Recovered
                </th>
              </tr>
            </thead>
            <tbody>
              {filterStates.map((state, index) => {
                return (
                  <tr key={state._id}>
                    <th scope="row" className="text-info">
                      {state.name}
                    </th>
                    <td className="text-warning">{state.active}</td>
                    <td className="text-danger">{state.death}</td>
                    <td className="text-success">{state.cured}</td>
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
