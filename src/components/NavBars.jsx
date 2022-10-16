import React from "react";

const NavBars = () => {
  return (
    <div>
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div>
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item">
              <span className="nav-link">SeatGeek</span>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/events">
                Events
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBars;
