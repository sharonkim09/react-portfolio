import React from 'react';

const ProjectSection = () => {
    return (
        <div className="row center-align">
        <h2>Projects</h2>
        <div className="col s6">
          <img
            alt="burger"
            className="responsive-img"
            src="../spellbindr-screenshot.png"
          />
           <h3>Spellbindr</h3>
         <p><a href="https://arhamilton92.github.io/spellbindr/">GitHub Repo Link</a></p>
          <a target="_blank" href="https://github.com/arhamilton92/spellbindr">Deployed Website Link</a>
        </div>
        <div className="col s6">
          <img
            alt="password"
            className="responsive-img"
            src="../password-generator.png"
          />
           <h3>Password Generator</h3>
          <p><a href="https://github.com/sharonkim09/gt-hw-js-password-generator">GitHub Repo Link</a></p>
          <p><a href="https://sharonkim09.github.io/gt-hw-js-password-generator">Deployed Website Link</a></p>
        </div>
        <div className="col s6">
          <img
            alt="burger"
            className="responsive-img"
            src="../burger-screenshot.png"
          />
           <h3>Burger</h3>
          <p><a href="https://github.com/sharonkim09/burger">GitHub Repo Link</a></p>
          <p><a href="https://damp-depths-84040.herokuapp.com/">Deployed Website Link</a></p>
        </div>
        <div className="col s6">
          <img
            alt="burger"
            className="responsive-img"
            src="../donendusted.png"
          />
           <h3>Done N Dusted</h3>
          <p><a href="https://github.com/yoohooitstoo/grocr-receipt-app">GitHub Repo Link</a></p>
          <p><a href="https://fathomless-sands-26873.herokuapp.com/">Deployed Website Link</a></p>
        </div>
        <div className="col s6">
          <img
            alt="burger"
            className="responsive-img"
            src="../note-screenshot.png"
          />
           <h3>Note Taker</h3>
          <p><a href="https://github.com/sharonkim09/gt-hw-note-taker-2">GitHub Repo Link</a></p>
          <p><a href="https://peaceful-inlet-73696.herokuapp.com/">Deployed Website Link</a></p>
        </div>
        <div className="col s6">
          <img
            alt="burger"
            className="responsive-img"
            src="../note-screenshot.png"
          />
           <h3>React Employee App</h3>
          <p><a target="_blank" href="https://github.com/sharonkim09/react-employee-app">GitHub Repo Link</a></p>
          <p><a target="_blank" href="https://sharonkim09.github.io/react-employee-app/">Deployed Website Link</a></p>
        </div>
      </div>
    );
};

export default ProjectSection;