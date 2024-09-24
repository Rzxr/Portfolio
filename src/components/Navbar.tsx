import React from "react";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView( {behavior: "smooth"} );
    }
  };

  return (
    <nav className="navbar">

      <div className="home-container">
        <button onClick={() => scrollToSection("Home")}>Home</button>
      </div>

      <ul className="nav-items">
        <button onClick={() => scrollToSection("About")}>About</button>
        <button onClick={() => scrollToSection("Projects")}>Projects</button>
        <button onClick={() => scrollToSection("Contact")}>About</button>
      </ul>
    </nav>
  );
};

export default Navbar;