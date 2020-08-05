import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import Contact from "./pages/Contact/Contact";
function App() {
  return (
    <>
      <Header />
      {/* Main Section */}
      <HomePage />
      {/* Projects Section */}
      {/* <ProjectSection /> */}
      {/* Contact Section */}
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
