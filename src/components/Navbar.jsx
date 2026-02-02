import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src="/images_resources/salman.png" alt="Coach Salman Logo" />
          <span>Coach Salman</span>
        </div>

        {/* Hamburger Menu Icon */}
        <div className={`menu-toggle ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#transformations" onClick={toggleMenu}>Transformations</a></li>
          <li><a href="#plans" onClick={toggleMenu}>Plans</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          <li className="mobile-only">
            <a href="#contact" className="cta-btn" onClick={toggleMenu}>Start Training</a>
          </li>
        </ul>

        {/* Desktop-only Button */}
        <a href="#contact" className="cta-btn desktop-only">
          Start Training
        </a>
      </div>
    </nav>
  );
}

export default Navbar;