import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import Projects from "./pages/Projects/Projects";
// import Contact from "./pages/Contact/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
      <Header />
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/projects" component={Projects}/>
      {/* <Route exact path="/contact" component={Contact}/> */}
      <Footer />
      </div>
    </Router>
  );
}

export default App;
