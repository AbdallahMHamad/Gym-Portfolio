import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="rights-text">
            © {currentYear} <strong>Coach Salman</strong>. All rights reserved.
          </p>
          <p className="made-by">
            Made with <span className="heart">🔥</span> by <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">Your Name</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;