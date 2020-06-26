import React, { useState, useEffect } from "react";
import axios from "axios";

export default function JapanData() {
  const [prefectures, setPrefectures] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://covid19-japan-web-api.now.sh/api/v1/prefectures")
      .then((res) => {
        setPrefectures(res.data);
        //console.log(res.data);
      });
  }, []);

  const filterPrefecture = prefectures.filter((prefecture) => {
    return prefecture.name_en.toLowerCase().includes(search.toLowerCase());
  });

  const addDashesToDate = (date) => {
    date = date.toString();
    const year = date.slice(0, 4);
    const month = date.slice(4, 6);
    const day = date.slice(6, 8);
    return year + "-" + month + "-" + day;
  };

  return (
    <div>
      <h1 className="text-info mt-5 text-center">Japan</h1>
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
                  Prefecture
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
              {filterPrefecture.map((pref, index) => {
                return (
                  <tr key={pref.id}>
                    <th scope="row" className="text-info">
                      {pref.name_ja}/{pref.name_en}
                    </th>
                    <td className="text-warning">{pref.cases}</td>
                    <td className="text-danger">{pref.deaths}</td>
                    <td className="text-white">
                      {addDashesToDate(pref.last_updated.cases_date)}
                    </td>
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
