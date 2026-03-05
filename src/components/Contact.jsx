import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import './Contact.css';

const socialLinks = [
  { id: 1, platform: "WhatsApp", username: "0581145883", url: "https://api.whatsapp.com/send/?phone=966581145883", icon: "fa-brands fa-whatsapp" },
  { id: 2, platform: "Instagram", username: "@_mohmmdsalman", url: "https://www.instagram.com/_mohmmdsalman", icon: "fa-brands fa-instagram" },
  { id: 3, platform: "YouTube", username: "@SALMANCOACH", url: "https://www.youtube.com/@SALMANCOACH", icon: "fa-brands fa-youtube" },
  { id: 4, platform: "TikTok", username: "@m_salman0_0", url: "https://www.tiktok.com/@m_salman0_0", icon: "fa-brands fa-tiktok" },
  { id: 5, platform: "Snapchat", username: "@mohammd_slman", url: "https://www.snapchat.com/@mohammd_slman", icon: "fa-brands fa-snapchat" },
  { id: 6, platform: "Facebook", username: "Mohammd Salman", url: "https://www.facebook.com/Mohammd%20Salman", icon: "fa-brands fa-facebook-f" }
];

function Contact() {
  const { t } = useTranslation();
  const [tappedId, setTappedId] = useState(null);

  const handleTapStart = useCallback((id) => {
    setTappedId(id);
  }, []);

  const handleTapEnd = useCallback(() => {
    setTimeout(() => setTappedId(null), 150);
  }, []);

  return (
    <section id="contact" className="section dark contact-section">
      <div className="contact-container">
        
        <div className="section-header">
          <span className="subtitle">{t('contact_subtitle')}</span>
          <h2>{t('contact_title')} <span className="highlight">{t('contact_highlight')}</span></h2>
        </div>

        <div className="trendy-social-grid">
          {socialLinks.map((link) => (
            <a 
              key={link.id} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`trendy-card ${tappedId === link.id ? 'tapped' : ''} ${link.platform.toLowerCase()}`}
              
              onTouchStart={() => handleTapStart(link.id)}
              onTouchEnd={handleTapEnd}
              onTouchMove={handleTapEnd} 
              onMouseDown={() => handleTapStart(link.id)}
              onMouseUp={handleTapEnd}
              onMouseLeave={handleTapEnd}
            >
              <div className="trendy-icon-wrapper">
                <i className={link.icon}></i>
              </div>
              <div className="trendy-info">
                <h3>{link.platform}</h3>
                <span>{link.username}</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Contact;