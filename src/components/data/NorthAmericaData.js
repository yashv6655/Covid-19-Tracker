import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import SouthAmericaData from "./SouthAmericaData";

export default function NorthAmericaData() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://covid19-update-api.herokuapp.com/api/v1/world/continent/america"
      )
      .then((res) => {
        setCountries(res.data.countries);
        //console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterCountries = countries.filter((country) => {
    return country.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div id="north-america">
      <h1 className="text-info mt-5 text-center">North America</h1>
      <div className="d-flex justify-content-center">
        <div
          className="overflow-auto bg-dark text-center mb-3"
          style={{ height: "35rem", width: "60rem" }}
        >
          <input
            type="text"
            placeholder="Search By Country Name"
            onChange={(e) => setSearch(e.target.value)}
            className="form-control text-center bg-dark text-primary"
          />
          <table className="table table-hover bg-dark">
            <thead>
              <tr className="bg-dark text-center">
                <th scope="col" className="text-info bg-dark sticky-top">
                  Country
                </th>
                <th scope="col" className="text-warning bg-dark sticky-top">
                  Total Confirmed
                </th>
                <th scope="col" className="text-danger bg-dark sticky-top">
                  Total Deaths
                </th>
              </tr>
            </thead>
            <tbody>
              {filterCountries.map((country, index) => {
                if (country.continent.toLowerCase() === "north america") {
                  return (
                    <tr key={index}>
                      <th scope="row" className="text-info">
                        {country.name}
                      </th>
                      <td className="text-warning">{country.cases}</td>
                      <td className="text-danger">{country.deaths}</td>
                    </tr>
                  );
                }
                return true;
              })}
            </tbody>
          </table>
        </div>
      </div>
      <SouthAmericaData countries={countries} />
    </div>
  );
}
