import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar-fixed">
      <nav className="black">
        <div className="container">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              My Portfolio
            </a>
            <ul className="right hide-on-med-and-down" id="navList">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
