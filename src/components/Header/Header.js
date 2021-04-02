import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="site-name navbar-brand" href="#">
            <h3>GEO SMART</h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link to="/home">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </Link>
              <Link to="/orders">
                <a className="nav-link" href="#">
                  Orders
                </a>
              </Link>
              <Link to="/admin">
                <a className="nav-link" href="#">
                  Admin
                </a>
              </Link>
              <Link>
                <a className="nav-link" href="#">
                  Deals
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
