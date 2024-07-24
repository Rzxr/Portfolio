import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">

      <div className="home-container">
        <NavLink to="/">Home</NavLink>
      </div>

      <ul className="nav-items">
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
