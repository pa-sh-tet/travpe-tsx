import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation({ isLoggedIn }: { isLoggedIn: boolean }) {
  const location = useLocation();

  return (
    <section className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <div className="nav__logo-icon"></div>
          <div className="nav__logo-text">TravPe</div>
        </div>
        <div className="nav__links">
          {isLoggedIn ? (
            <>
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
                    location.pathname === "/profile"
                      ? "profile-icon_active"
                      : ""
                  }`}
                />
                Profile
              </Link>
              <Link to="/settings" className="nav__link">
                <div
                  className={`nav__link-icon settings-icon ${
                    location.pathname === "/settings"
                      ? "settings-icon_active"
                      : ""
                  }`}
                />
                Settings
              </Link>
            </>
          ) : (
            <Link to="/login" className="nav__link">
              <div
                className={`nav__link-icon login-icon ${
                  location.pathname === "/login" ? "login-icon_active" : ""
                }`}
              />
              Login
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default Navigation;
