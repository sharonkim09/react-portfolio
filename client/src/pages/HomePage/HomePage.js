import React from 'react';
import "./style.css"
const HomePage = () => {
    return (
        <div className="row" id="home-elements">
        <div className="col s12 center-align">
          <img className="circle" alt="my pic" src="../profile.png" />
          <h1>Welcome to my portfolio page!</h1>
          <p>Full-Stack Web Developer with skills in MERN and JS. </p>
        </div>
      </div>
    );
};

export default HomePage;