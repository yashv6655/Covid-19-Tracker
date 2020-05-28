import React, { useState, useEffect } from "react";
import axios from "axios";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";
import { VictoryChart, VictoryLine } from "victory";

function Data() {
  const [globalStats, setGlobalStats] = useState([]);
  const [countries, setCountries] = useState([]);
  const [slug, setSlug] = useState("united-states");
  const [dates, setDates] = useState([]);
  const [confirmedCases, setConfirmedCases] = useState([]);
  //Get Countries for dropdown menu
  useEffect(() => {
    axios
      .get("https://api.covid19api.com/summary")
      .then((res) => {
        console.log(res);
        setGlobalStats(res.data.Global);
        setCountries(res.data.Countries);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (slug) => {
    //setting global slug to selected slug from dropdown list
    setSlug(slug);
    console.log(slug);
    axios
      .get(`https://api.covid19api.com/total/country/${slug}`)
      .then((res) => {
        console.log(res);
        //get dates from api
        const tempDates = [];
        for (let i in res.data) {
          tempDates.push(res.data[i].Date);
        }
        setDates(tempDates);
        //console.log(dates);

        //get covid cases from api
        const tempCases = [];
        for (let i in res.data) {
          tempCases.push(res.data[i].Confirmed);
        }
        setConfirmedCases(tempCases);
        //console.log(confirmedCases);
      });
  };

  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">Covid-19 Tracker</h1>
        <p className="lead">Latest Global Stats By Covid-19 API As Per</p>
        <hr className="my-5" />
        {/* Total Global List */}
        <ul
          className="list-group mr-5"
          style={{ width: "30rem", float: "left" }}
        >
          <li className="list-group-item-danger list-group-item d-flex justify-content-between align-items-center">
            Total Global Deaths
            <span className="badge badge-danger badge-pill">
              {globalStats.TotalDeaths
                ? globalStats.TotalDeaths
                : "Please Refresh After One Minute"}
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
        <ul className="list-group" style={{ width: "30rem" }}>
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
      <div>
        <DropdownButton id="dropdown-basic-button" title="Select Country">
          {countries.map((country, index) => {
            return (
              <DropdownItem
                // href={`https://api.covid19api.com/total/country/${country.Slug}`}
                onClick={() => handleClick(country.Slug)}
                key={index}
                rel="noopener noreferrer"
                target="_blank"
              >
                {country.Country}
              </DropdownItem>
            );
          })}
        </DropdownButton>
      </div>
    </div>
  );
}

export default Data;
