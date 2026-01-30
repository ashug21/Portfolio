import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar999">
      <div className="nav-container999">
        {/* Logo */}
        <div className="nav-logo999">
          &lt;<span>Ashmeet Singh</span> /&gt;
        </div>
        
        

        {/* Navigation Links */}
        <ul className="nav-links999">
          <Link className="links" to="/">
            Home
          </Link>
          <Link className="links" to="/projects">
            My Projects
          </Link>
          <Link className="links" to="/contact">
            Contact
          </Link>
          <li>
          <a
    href="/Resume1.pdf"               
    className="resume-btn999"
    download="Ashmeet_Resume.pdf"     
  >
    Resume
  </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
