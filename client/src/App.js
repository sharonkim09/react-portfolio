import React from "react";
import "./App.css";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import HomePage from "./pages/HomePage"
import ProjectSection from "./components/ProjectSection/ProjectSection"

function App() {
  return (
    <>
<Header/>
      {/* Main Section */}
     <HomePage/>
      {/* Projects Section */}
<ProjectSection />
      {/* Contact Section */}
      <h1>
        Github<i className="fa fa-github" aria-hidden="true"></i>
      </h1>
      <h1>
        Email<i className="fa fa-envelope" aria-hidden="true"></i>
      </h1>
      <h1>
        LinkedIn<i className="fa fa-linkedin" aria-hidden="true"></i>
      </h1>
      <Footer/>
    </>
  );
}

export default App;
