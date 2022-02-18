import React from "react";
import "./App.css";
import Masthead from "./components/masthead";
import Navbar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import MyWork from "./components/mywork";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Masthead />
        <About />
        <MyWork />
        <Projects />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
