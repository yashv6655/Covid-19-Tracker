import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Footer";
import Navbar from "../Navbar";
import USAData from "./USAData";

function GlobalData() {
  const [globalStats, setGlobalStats] = useState([]);
  const [countries, setCountries] = useState([]);
  const [currentDate, setCurrentDate] = useState([]); //Date the api data was updated
  const [search, setSearch] = useState("");

  //Get Countries for dropdown menu
  useEffect(() => {
    axios
      .get("https://api.covid19api.com/summary")
      .then((res) => {
        //console.log(res);
        setGlobalStats(res.data.Global);
        setCountries(res.data.Countries);
        setCurrentDate(res.data.Date);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterCountries = countries.filter((country) => {
    return country.Country.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="bg-dark">
      <Navbar />
      <div className="jumbotron bg-dark text-white text-center">
        <h1 className="display-4">Covid-19 Tracker</h1>
        <p className="lead">
          Latest Global Stats Provided By Covid-19 API As Per {currentDate}
        </p>
        <hr className="my-5 bg-white" />
        {/* Lists */}
        <div className="center-lists">
          {/* Total Global List */}
          <ul className="list-group mr-1 align-globalLists-center">
            <li className="list-group-item-danger list-group-item d-flex justify-content-between align-items-center">
              Total Global Deaths
              <span className="badge badge-danger badge-pill">
                {globalStats.TotalDeaths
                  ? globalStats.TotalDeaths
                  : "Please Refresh The Page"}
              </span>
            </li>
            <li className="list-group-item-warning list-group-item d-flex justify-content-between align-items-center">
              Total Global Confirmed Cases
              <span className="badge badge-warning badge-pill">
                {globalStats.TotalConfirmed}
              </span>
            </li>
            <li className="list-group-item-success list-group-item d-flex justify-content-between align-items-center">
              Total Global Recovered
              <span className="badge badge-success badge-pill">
                {globalStats.TotalRecovered}
              </span>
            </li>
          </ul>
          {/* End of Total Global List */}
          {/* Latest Global List */}
          <ul className="list-group align-globalLists-center">
            <li className="list-group-item-danger list-group-item d-flex justify-content-between align-items-center">
              New Deaths
              <span className="badge badge-danger badge-pill">
                {globalStats.NewDeaths}
              </span>
            </li>
            <li className="list-group-item-warning list-group-item d-flex justify-content-between align-items-center">
              New Confirmed Cases
              <span className="badge badge-warning badge-pill">
                {globalStats.NewConfirmed}
              </span>
            </li>
            <li className="list-group-item-success list-group-item d-flex justify-content-between align-items-center">
              New Recovered
              <span className="badge badge-success badge-pill">
                {globalStats.NewRecovered}
              </span>
            </li>
          </ul>
          {/* End of Today Global List */}
        </div>
        {/* End of Lists */}
      </div>
      {/* Table Div */}
      <h1 className="text-info">Global Stats</h1>
      <div
        className="overflow-auto bg-dark text-center"
        style={{ height: "35rem" }}
      >
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search By Country Name"
          onChange={(e) => setSearch(e.target.value)}
          className="form-control text-center bg-dark text-primary"
        />
        {/* End of Search Bar */}
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
              <th scope="col" className="text-success bg-dark sticky-top">
                Total Recovered
              </th>
              <th scope="col" className="text-warning bg-dark sticky-top">
                Latest Confirmed
              </th>
              <th scope="col" className="text-danger bg-dark sticky-top">
                Latest Deaths
              </th>
              <th scope="col" className="text-success bg-dark sticky-top">
                Latest Recovered
              </th>
            </tr>
          </thead>
          <tbody>
            {filterCountries.map((country, index) => {
              return (
                <tr key={index}>
                  <th scope="row" className="text-info">
                    {country.Country}
                  </th>
                  <td className="text-warning">{country.TotalConfirmed}</td>
                  <td className="text-danger">{country.TotalDeaths}</td>
                  <td className="text-success">{country.TotalRecovered}</td>
                  <td className="text-warning">{country.NewConfirmed}</td>
                  <td className="text-danger">{country.NewDeaths}</td>
                  <td className="text-success">{country.NewRecovered}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* End of table div */}
      <USAData />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default GlobalData;
