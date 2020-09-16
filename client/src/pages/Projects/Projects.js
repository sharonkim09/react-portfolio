import React from "react";
import "./style.css";
const ProjectSection = () => {
  return (
    <div className="container" id="projectContainer">
      <div className="row">
        <div className="col s12 m6" id="imgCard">
          <div className="card">
            <div className="card-image">
              <img
                alt="random wizard generated"
                src="../spellbindr-screenshot.png"
              />
              <span className="card-title" id="titleOfCards">
                Spellbindr
              </span>
              <a
                href="https://github.com/arhamilton92/spellbindr"
                className="btn-floating halfway-fab waves-effect waves-light red"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://arhamilton92.github.io/spellbindr/"
                className="btn-floating left halfway-fab waves-effect waves-light red"
              >
                <i className="fa fa-window-maximize"></i>
              </a>
            </div>
            <div className="card-content">
              <p>
                This application was a group project using Bootstrap and
                rendering html with js. This application are for users learning
                about basic D&D mechanics. Users get a chance for a mythical
                adventure.
              </p>
            </div>
          </div>
        </div>
        <div className="col s12 m6" id="imgCard">
          <div className="card">
            <div className="card-image">
              <img alt="password generated" src="../password-generator.png" />
              <span className="card-title" id="titleOfCards">
                Password Generator
              </span>
              <a
                href="https://github.com/sharonkim09/gt-hw-js-password-generator"
                className="btn-floating halfway-fab waves-effect waves-light red"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://sharonkim09.github.io/gt-hw-js-password-generator"
                className="btn-floating left halfway-fab waves-effect waves-light red"
              >
                <i className="fa fa-window-maximize"></i>
              </a>
            </div>
            <div className="card-content">
              <p>
                This application generates a random password based on
                user-selected criteria. Based on length and types of characters.
                This uses HTML, CSS, and JS for dynamically updating the app.
                Features a nice, clean, polished user interface.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m6" id="imgCard">
          <div className="card">
            <div className="card-image">
              <img alt="burger input" src="../burger-screenshot.png" />
              <span className="card-title" id="titleOfCards">
                Burger
              </span>
              <a
                href="https://github.com/sharonkim09/burger"
                className="btn-floating halfway-fab waves-effect waves-light red"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://damp-depths-84040.herokuapp.com/"
                className="btn-floating left halfway-fab waves-effect waves-light red"
              >
                <i className="fa fa-window-maximize"></i>
              </a>
            </div>
            <div className="card-content">
              <p>
                This is a simple burger logger to store what burgers users would
                like to eat. Burgers will be added to the uneaten section of the
                app but when user gets hungry and devours the burger it will be
                on the devoured section of the app. Used Node and MySQL to query
                and route data in the app, and Handlebars to generate HTML.
              </p>
            </div>
          </div>
        </div>
        <div className="col s12 m6" id="imgCard">
          <div className="card">
            <div className="card-image">
              <img alt="signup/login" src="../donendusted.png" />
              <span className="card-title" id="titleOfCards">
                Done N Dusted
              </span>
              <a
                href="https://github.com/yoohooitstoo/grocr-receipt-app"
                className="btn-floating halfway-fab waves-effect waves-light red"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://fathomless-sands-26873.herokuapp.com/"
                className="btn-floating left halfway-fab waves-effect waves-light red"
              >
                <i className="fa fa-window-maximize"></i>
              </a>
            </div>
            <div className="card-content">
              <p>
                This was a group project and it was made for easier user
                interface for those who wanted to keep track of their errands.
                Users are able to upload a picture and with the help of Veryfi
                API, users' errands will be printed on the screen. Users can
                adjust their itemized list and also add items for their next
                errands.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m6" id="imgCard">
          <div className="card">
            <div className="card-image">
              <img alt="notetaker app" src="../note-screenshot.png" />
              <span className="card-title" id="titleOfCards">
                Note Taker
              </span>
              <a
                href="https://github.com/sharonkim09/gt-hw-note-taker-2"
                className="btn-floating halfway-fab waves-effect waves-light red"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://peaceful-inlet-73696.herokuapp.com/"
                className="btn-floating left halfway-fab waves-effect waves-light red"
              >
                <i className="fa fa-window-maximize"></i>
              </a>
            </div>
            <div className="card-content">
              <p>
                This application are for users who can't recall something
                important or need to keep track of a lot of information. Users
                are able to save and delete notes. This application uses express
                as backend and saves/deletes note data from a JSON file.
              </p>
            </div>
          </div>
        </div>
        <div className="col s12 m6" id="imgCard">
          <div className="card">
            <div className="card-image">
              <img
                alt="react employee directory"
                src="../employee-directory.png"
              />
              <span className="card-title" id="titleOfCards">
                Employee Directory
              </span>
              <a
                href="https://github.com/sharonkim09/react-employee-app"
                className="btn-floating halfway-fab waves-effect waves-light red"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://sharonkim09.github.io/react-employee-app/"
                className="btn-floating left halfway-fab waves-effect waves-light red"
              >
                <i className="fa fa-window-maximize"></i>
              </a>
            </div>
            <div className="card-content">
              <p>
                This application gives user a random table of employees with
                their picture, name, phone number, email, and date of birth.
                Users are able to look up employees or they can sort them
                alphabetically. This application uses Random User Generator API.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m6" id="imgCard">
          <div className="card">
            <div className="card-image">
              <img alt="notetaker app" src="../linguick.png" />
              <span className="card-title" id="titleOfCards">
                Note Taker
              </span>
              <a
                href="https://github.com/sharonkim09/Linguick"
                className="btn-floating halfway-fab waves-effect waves-light red"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://linguick.herokuapp.com/"
                className="btn-floating left halfway-fab waves-effect waves-light red"
              >
                <i className="fa fa-window-maximize"></i>
              </a>
            </div>
            <div className="card-content">
              <p>
                This application was a group project using all MERN and CRUD to
                implement a learning app to help users understand and learn the
                Korean alphabet. This app grinds the alphabet into the user by
                adding a form of competition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
