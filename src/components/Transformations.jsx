import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Transformations.css";

/* ─── Female Card (بدون صورة — خصوصية) ─────────────── */
const FemalePrivacyCard = ({ name, description, duration, t, isActive, onTouch }) => (
  <div 
    className={`trans-card female-card ${isActive ? 'tapped' : ''}`}
    onTouchStart={onTouch}
  >
    <div className="trans-images-box female-placeholder">
      <div className="female-inner">
        <div className="female-icon-wrap">
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="26" cy="26" r="25" stroke="#f5c400" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.4"/>
            <circle cx="26" cy="17" r="6" fill="rgba(245,196,0,0.15)" stroke="#f5c400" strokeWidth="1.4"/>
            <path d="M14 38c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#f5c400" strokeWidth="1.4" strokeLinecap="round" fill="rgba(245,196,0,0.07)"/>
            <circle cx="39" cy="39" r="7.5" fill="#f5c400"/>
            <path d="M36.5 38.5v-1.8a2.5 2.5 0 0 1 5 0v1.8" stroke="#000" strokeWidth="1.4" strokeLinecap="round"/>
            <rect x="35.5" y="38.2" width="6" height="4.5" rx="1" fill="#000"/>
            <circle cx="38.5" cy="40.2" r="0.9" fill="#f5c400"/>
          </svg>
        </div>
        <p className="female-privacy-label">{t('female_privacy_label')}</p>
      </div>
      <span className="female-badge">{t('female_card_badge')}</span>
    </div>
    <div className="trans-info">
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="trans-duration">{duration}</span>
    </div>
  </div>
);

/* ─── Female Card (مع صورة — نفس شكل الذكور) ─────────────── */
const FemalePhotoCard = ({ name, description, duration, img, t, isActive, onTouch }) => (
  <div 
    className={`trans-card female-photo-card ${isActive ? 'tapped' : ''}`}
    onTouchStart={onTouch}
  >
    <div className="trans-images-box female-photo-box">
      <div className="trans-img-wrapper" style={{ flex: 1 }}>
        <img 
          src={img} 
          alt={name} 
          loading="eager"
        />
        <span className="trans-label label-after">{t('female_card_badge')}</span>
      </div>
    </div>
    <div className="trans-info">
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="trans-duration">{duration}</span>
    </div>
  </div>
);/* ─── Main Component ──────────────────────────────────────── */
const Transformations = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("male");
  const [activeCardId, setActiveCardId] = useState(null);

  useEffect(() => {
    const clearActive = (e) => {
      if (!e.target.closest('.trans-card')) setActiveCardId(null);
    };
    window.addEventListener('touchstart', clearActive);
    return () => window.removeEventListener('touchstart', clearActive);
  }, []);

  const maleData = [
    { id: 2, name: t('client_2_name'), duration: t('client_2_duration'), description: t('desc_muscle_growth'), beforeImg: "/images_resources/Transformations/10b.jpg", afterImg: "/images_resources/Transformations/10a.jpg" },
    { id: 3, name: t('client_3_name'), duration: t('client_3_duration'), description: t('desc_fat_loss_journey'), beforeImg: "/images_resources/Transformations/4b.jpg", afterImg: "/images_resources/Transformations/4a.jpg" },
    { id: 4, name: t('client_4_name'), duration: t('client_4_duration'), description: t('desc_clean_bulk'), beforeImg: "/images_resources/Transformations/2b.jpg", afterImg: "/images_resources/Transformations/2a.jpg" },
    { id: 5, name: t('client_5_name'), duration: t('client_5_duration'), description: t('desc_clean_bulk'), beforeImg: "/images_resources/Transformations/11b.jpg", afterImg: "/images_resources/Transformations/11a.jpg" },
    { id: 6, name: t('client_6_name'), duration: t('client_6_duration'), description: t('desc_fat_loss'), beforeImg: "/images_resources/Transformations/ashb.jpg", afterImg: "/images_resources/Transformations/asha.jpg" },
  ];

  // اسماء — عندها صورة (بنطلون واسع = قبل/بعد)
  // رشا وشهد — بدون صورة
const femaleData = [
  { id: 7, type: 'photo',   name: t('client_7_name'), duration: t('client_7_duration'), description: t('client_7_desc'), img: "/images_resources/Transformations/gggg.jpg" },
  { id: 1, type: 'privacy', name: t('client_1_name'), duration: t('client_1_duration'), description: t('client_1_desc') },
  { id: 8, type: 'privacy', name: t('client_8_name'), duration: t('client_8_duration'), description: t('client_8_desc') },
  { id: 9, type: 'privacy', name: t('client_9_name'), duration: t('client_9_duration'), description: t('client_9_desc') },
];
  return (
    <section id="transformations" className="transformations-section">
      <div className="trans-container">
        <div className="trans-header">
          <span className="subtitle">{t('trans_subtitle')}</span>
          <h2>{t('trans_title')} <span className="trans-highlight">{t('trans_highlight')}</span></h2>
        </div>

<div className="trans-tabs">
  <button 
    className={`trans-tab ${activeTab === "male" ? "active" : ""}`} 
    onClick={() => { setActiveTab("male"); setActiveCardId(null); }}
    onTouchEnd={(e) => { e.preventDefault(); setActiveTab("male"); setActiveCardId(null); }}
  >
    {t('tab_male')}
  </button>
  <button 
    className={`trans-tab ${activeTab === "female" ? "active" : ""}`} 
    onClick={() => { setActiveTab("female"); setActiveCardId(null); }}
    onTouchEnd={(e) => { e.preventDefault(); setActiveTab("female"); setActiveCardId(null); }}
  >
    {t('tab_female')}
  </button>
  <span className={`trans-tab-indicator ${activeTab}`} />
</div>
        <div className="transformations-grid tab-content" key={activeTab}>
          {activeTab === "male"
            ? maleData.map((item) => (
                <div 
                  key={item.id} 
                  className={`trans-card ${activeCardId === item.id ? 'tapped' : ''}`}
                  onTouchStart={() => setActiveCardId(item.id)}
                >
                  <div className="trans-images-box">
                    <div className="trans-img-wrapper">
                      <img src={item.beforeImg} alt="Before" loading="lazy" />
                      <span className="trans-label label-before">{t('trans_before')}</span>
                    </div>
                    <div className="trans-img-wrapper">
                      <img src={item.afterImg} alt="After" loading="lazy" />
                      <span className="trans-label label-after">{t('trans_after')}</span>
                    </div>
                  </div>
                  <div className="trans-info">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <span className="trans-duration">{item.duration}</span>
                  </div>
                </div>
              ))
            : femaleData.map((item) =>
item.type === 'photo' ? (
  <FemalePhotoCard
    key={item.id}
    {...item}
    t={t}
    isActive={activeCardId === item.id}
    onTouch={() => setActiveCardId(item.id)}
  />
                ) : (
                  <FemalePrivacyCard
                    key={item.id}
                    {...item}
                    t={t}
                    isActive={activeCardId === item.id}
                    onTouch={() => setActiveCardId(item.id)}
                  />
                )
              )
          }
        </div>
      </div>
    </section>
  );
};

export default Transformations;