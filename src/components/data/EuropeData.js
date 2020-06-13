import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Pagination from "../Pagination";

export default function EuropeData() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(7);

  useEffect(() => {
    axios
      .get(
        "https://covid19-update-api.herokuapp.com/api/v1/world/continent/europe"
      )
      .then((res) => {
        setCountries(res.data.countries);
        //console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filterCountries = currentCountries.filter((country) => {
    return country.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div id="europe">
      <h1 className="text-info mt-5 text-center display-4">Europe</h1>
      <div className="d-flex justify-content-center">
        <div
          className="overflow-auto bg-dark text-center"
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
                return (
                  <tr key={index}>
                    <th scope="row" className="text-info">
                      {country.name}
                    </th>
                    <td className="text-warning">{country.cases}</td>
                    <td className="text-danger">{country.deaths}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="d-flex justify-content-center mb-5 bg-dark">
            <Pagination
              countriesPerPage={countriesPerPage}
              totalCountries={countries.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}