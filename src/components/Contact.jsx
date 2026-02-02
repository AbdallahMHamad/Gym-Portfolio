import React from "react";
import './Contact.css'
const socialLinks = [
  {
    id: 1,
    platform: "WhatsApp",
    username: "Chat Directly",
    url: "https://api.whatsapp.com/send/?phone=966581145883&text&type=phone_number&app_absent=0",
    icon: "fa-brands fa-whatsapp",
  },
  {
    id: 2,
    platform: "Instagram",
    username: "@_mohmmdsalman",
    url: "https://www.instagram.com/_mohmmdsalman",
    icon: "fa-brands fa-instagram",
  },
  {
    id: 3,
    platform: "YouTube",
    username: "@SALMANCOACH",
    url: "https://www.youtube.com/@SALMANCOACH",
    icon: "fa-brands fa-youtube",
  },
  {
    id: 4,
    platform: "TikTok",
    username: "@m_salman0_0",
    url: "https://www.tiktok.com/@m_salman0_0",
    icon: "fa-brands fa-tiktok",
  },
  {
    id: 5,
    platform: "Snapchat",
    username: "@mohammd_slman",
    url: "https://www.snapchat.com/@mohammd_slman",
    icon: "fa-brands fa-snapchat",
  },
  {
    id: 6,
    platform: "Facebook",
    username: "Mohammd Salman",
    url: "https://www.facebook.com/Mohammd%20Salman",
    icon: "fa-brands fa-facebook-f",
  }
];

function Contact() {
  return (
    <section id="contact" className="section gray contact-section">
      <div className="section-container">
        
        <div className="section-header">
          <span className="subtitle">CONNECT WITH ME</span>
          <h2>Join The <span className="highlight">Community</span></h2>
          <p className="contact-desc">
            Ready to start? Contact me on WhatsApp for coaching inquiries or follow my daily tips on social media.
          </p>
        </div>

        <div className="social-grid">
          {socialLinks.map((link) => (
            <a 
              key={link.id} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-card"
            >
              <div className="icon-box">
                <i className={link.icon}></i>
              </div>
              <div className="link-info">
                <h3>{link.platform}</h3>
                <span>{link.username}</span>
              </div>
              <div className="arrow-icon">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Contact;