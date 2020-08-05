import React from "react";
import "./App.css";
function App() {
  return (
    <>
    {/* Main Section */}
      <div className="row">
        <div className="col s12 center-align">
          <img className="circle" alt="my pic" src="../profile.png" />
          <h1>Welcome to my portfolio page!</h1>
          <p>Full-Stack Web Developer with skills in MERN and JS. </p>
        </div>
      </div>
      {/* Projects Section */}
      <div className="row center-align">
        <h2>Projects</h2>
        <div className="col s6">
          <img
            alt="burger"
            className="responsive-img"
            src="../spellbindr-screenshot.png"
          />
        </div>
        <div className="col s6">
          <img
            alt="burger"
            className="responsive-img"
            src="../spellbindr-screenshot.png"
          />
        </div>
        <div className="col s6">
          <img
            alt="burger"
            className="responsive-img"
            src="../spellbindr-screenshot.png"
          />
        </div>
        <div className="col s6">
          <img
            alt="burger"
            className="responsive-img"
            src="../spellbindr-screenshot.png"
          />
        </div>
      </div>
      {/* Contact Section */}
      <h1>Github<i class="fa fa-github" aria-hidden="true"></i></h1>
    </>
  );
}

export default App;
