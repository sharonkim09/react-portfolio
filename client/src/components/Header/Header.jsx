import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar-fixed">
      <nav className="black">
        <div className="container">
          <div className="nav-wrapper">
            <ul className="d-flex justify-content-center col-6" id="navList">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
                   <Link to="/" className="right brand-logo">
              My Portfolio
            </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
