import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // استيراد الـ hook
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation(); // استخدام الـ Translation

  const toggleMenu = () => setIsOpen(!isOpen);

  // تغيير اللغة
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // أغلق القائمة في الموبايل عند تغيير اللغة
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const WHATSAPP_NUMBER = "966581145883";
  const trainingLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t('whatsapp_training_msg'))}`;
  const collabLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t('whatsapp_collab_msg'))}`;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <div className="logo">
          <a href="#about">
            <img src="/images_resources/Logos/salman.png"
             alt="Coach Salman Logo" />
          </a>
          <span>Coach Salman</span>
        </div>

        {/* Hamburger */}
        <div className={`menu-toggle ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#transformations" onClick={() => setIsOpen(false)}>{t('nav_transformations')}</a></li>
          <li><a href="#sponsers" onClick={() => setIsOpen(false)}>{t('nav_sponsors')}</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>{t('nav_contact')}</a></li>
          
          {/* زر تبديل اللغة داخل القائمة للموبايل */}
          <li className="mobile-only-item">
            <div className="lang-switcher-mobile">
               <button onClick={() => changeLanguage('ar')} className={i18n.language === 'ar' ? 'active' : ''}>AR</button>
               <span className="divider">|</span>
               <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>EN</button>
            </div>
          </li>
{/* 
          <span className="mobile-only-item">
            <a href={trainingLink} target="_blank" rel="noreferrer" className="cta-btn mobile-only-btn">
              💪 {t('btn_training')}
            </a>
            <a href={collabLink} target="_blank" rel="noreferrer" className="cta-btn mobile-only-btn collab-btn">
              🤝 {t('btn_collab')}
            </a>
          </span> */}
        </ul>

        {/* Desktop Actions (Buttons + Lang Switcher) */}
        <div className="nav-actions-desktop">
          <div className="lang-switcher-desktop">
            <button 
              onClick={() => changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')}
              className="lang-toggle-btn"
            >
              <i className="fas fa-globe"></i> 
              {i18n.language === 'ar' ? 'English' : 'العربية'}
            </button>
          </div>
{/* 
          <a href={trainingLink} target="_blank" rel="noreferrer" className="cta-btn desktop-only-btn">
             {t('btn_training')}
          </a>
          <a href={collabLink} target="_blank" rel="noreferrer" className="cta-btn desktop-only-btn collab-btn">
             {t('btn_collab')}
          </a> */}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;