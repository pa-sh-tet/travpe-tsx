import React from "react";
import { Link, useLocation } from "react-router-dom";
import homeIcon from "../images/homeIcon.png";
import homeIconFilled from "../images/homeIconFilled.png";
import profileIcon from "../images/profileIcon.png";
import profileIconFilled from "../images/profileIconFilled.png";

function Navigation() {
  const location = useLocation();

  return (
    <section className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <div className="nav__logo-icon"></div>
          <div className="nav__logo-text">TravPe</div>
        </div>
        <div className="nav__links">
          <Link
            to="/"
            className={`nav__link ${
              location.pathname === "/" ? "nav__link_active" : ""
            }`}
          >
            <div
              className={`nav__link-icon home-icon ${
                location.pathname === "/" ? "home-icon_active" : ""
              }`}
            />
            Home
          </Link>
          <Link
            to="/profile"
            className={`nav__link ${
              location.pathname === "/profile" ? "nav__link_active" : ""
            }`}
          >
            <div
              className={`nav__link-icon profile-icon ${
                location.pathname === "/profile" ? "profile-icon_active" : ""
              }`}
            />
            Profile
          </Link>
          <Link to="/" className="nav__link">
            <div className="nav__link-icon" />
            Logout
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Navigation;
