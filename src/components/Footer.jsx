import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="made-by">
            {t('footer_made_by')} <span className="heart">🔥</span> <a href="https://www.instagram.com/abdallah.learns/" target="_blank" rel="noreferrer">Abdallah Hamad</a>
          </p>

                    <p className="rights-text">
            © {currentYear} <strong>Mohammad Salman</strong>. {t('footer_rights')}
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;