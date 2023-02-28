import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/tram-map">Tram Map</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/login-page">Login/Signup</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
