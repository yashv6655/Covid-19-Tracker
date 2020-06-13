import React from "react";

export default function Pagination({
  countriesPerPage,
  totalCountries,
  paginate,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="bg-dark">
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => {
            return (
              <li className="page-item" key={number}>
                <a
                  onClick={() => paginate(number)}
                  href="#europe"
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
