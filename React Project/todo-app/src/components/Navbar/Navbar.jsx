import React from "react";
import logo from "../../assets/images/app-logo.png";
import "../Navbar/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({ isLoggedIn, isLogIn, onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
      <Link className="navbar-brand" to="/about">
        <img
          src={logo}
          width="30"
          height="30"
          alt="app-logo"
          className="app-logo"
        />
      </Link>
      <Link className="navbar-brand" to="/about">
        TaskTracker
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end mx-5"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          {isLoggedIn && (
            <li className="nav-item active">
              <Link className="nav-link" to="/home">
                Home <span className="sr-only"></span>
              </Link>
            </li>
          )}

          <li className="nav-item active">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/contact">
              Contact us
            </Link>
          </li>
          {isLogIn && <li className="nav-item active">
            <Link to="/signUp" className="nav-link">
              Register
            </Link>
          </li>}
          {
            isLogIn && <li className="nav-item active">
            <Link to="/" className="nav-link">
              Login
            </Link>
          </li>
          }

          {isLoggedIn && (
  <li className="nav-item dropdown active">
  <a
    className="nav-link dropdown-toggle"
    href="/"
    id="navbarDropdown"
    role="button"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    
  </a>
  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
    <Link className="dropdown-item" to="/" onClick={onLogout}>
      Logout
    </Link>
  </div>
</li>
          )}
        </ul>
      </div>
    </nav>
  );
}
