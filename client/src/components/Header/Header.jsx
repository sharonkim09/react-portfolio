import React from 'react';

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
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About Me</a>
                </li>
                <li>
                  <a href="/">Projects</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Header;