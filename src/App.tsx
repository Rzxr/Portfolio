import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <>
      <Navbar />

      <div className="main-data-container">
          <About />
          <Projects />
          <Contact />
      </div>
    </>
  );
};


export default App;