import React from "react";

export default function Footer() {
  return (
    <nav className=" mt-3 navbar navbar-expand-lg navbar-light bg-light">
      <p className="navbar-brand">Created By Yash V</p>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item mx-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram social-icon"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fas fa-mail-bulk social-icon"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
