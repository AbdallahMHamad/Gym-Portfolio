import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
<div className="logo">
  <img 
    src="/images_resources/salman.png"
    alt="Coach Salman Logo"
  />
  <span>Coach Salman</span>
</div>

        {/* Links */}
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#transformations">Transformations</a></li>
          <li><a href="#plans">Plans</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Button */}
        <a href="#contact" className="cta-btn">
          Start Training
        </a>

      </div>
    </nav>
  );
}

export default Navbar;
