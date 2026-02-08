import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="/images_resources/Logos/salman.png" alt="Coach Salman Logo" />
          <span>Coach Salman</span>
        </div>

        {/* Hamburger Icon */}
        <div className={`menu-toggle ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#transformations" onClick={() => setIsOpen(false)}>Transformations</a></li>
          <li><a href="#sponsers" onClick={() => setIsOpen(false)}>Sponsors</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          
          {/* MOBILE ONLY BUTTON: Inside the UL list */}
          <span className="mobile-only-item">
            <a href="#contact" className="cta-btn mobile-only-btn" onClick={() => setIsOpen(false)}>
              Start Training
            </a>
          </span>
        </ul>

        {/* DESKTOP ONLY BUTTON: Outside the UL list */}
        <a href="#contact" className="cta-btn desktop-only-btn">
          Start Training
        </a>
      </div>
    </nav>
  );
}

export default Navbar;