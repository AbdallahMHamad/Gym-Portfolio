import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);


const WHATSAPP_NUMBER = "966581145883"; 

const trainingMsg = encodeURIComponent("مرحباً كوتش سلمان، أود الاستفسار عن برامج التدريب المتاحة.");
const collabMsg = encodeURIComponent("مرحباً كوتش سلمان، أنا مهتم بعمل تعاون (Collaboration) أو رعاية.");

// الروابط النهائية
const trainingLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${trainingMsg}`;
const collabLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${collabMsg}`;
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
         <a href="#about"> <img src="/images_resources/Logos/salman.png" alt="Coach Salman Logo" /></a>
        <a/>
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
          {/* <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li> */}
          <li><a href="#transformations" onClick={() => setIsOpen(false)}>Transformations</a></li>
          <li><a href="#sponsers" onClick={() => setIsOpen(false)}>Sponsors</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          
          <span className="mobile-only-item">
<a href={trainingLink} target="_blank" rel="noreferrer" className="cta-btn mobile-only-btn">
  Start Training
</a>
<a href={collabLink} target="_blank" rel="noreferrer" className="cta-btn mobile-only-btn collab-btn">
  For Collaborations
</a>          </span>
        </ul>

<a href={trainingLink} target="_blank" rel="noreferrer" className="cta-btn desktop-only-btn">
  Start Training
</a>

{/* زر التعاون */}
<a href={collabLink} target="_blank" rel="noreferrer" className="cta-btn desktop-only-btn collab-btn">
  For Collaborations
</a>      </div>
    </nav>
  );
}

export default Navbar;