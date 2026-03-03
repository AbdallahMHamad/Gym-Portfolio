import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Transformations.css";

/* ─── Female Card — بيانات حقيقية، بدون صورة ─────────────── */
const FemaleCard = ({ name, description, duration, t }) => (
  <div className="trans-card female-card">
    <div className="trans-images-box female-placeholder">
      <div className="female-inner">

        {/* أيقونة الخصوصية */}
        <div className="female-icon-wrap">
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="26" cy="26" r="25" stroke="#f5c400" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.4"/>
            {/* silhouette */}
            <circle cx="26" cy="17" r="6" fill="rgba(245,196,0,0.15)" stroke="#f5c400" strokeWidth="1.4"/>
            <path d="M14 38c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#f5c400" strokeWidth="1.4" strokeLinecap="round" fill="rgba(245,196,0,0.07)"/>
            {/* قفل صغير */}
            <circle cx="39" cy="39" r="7.5" fill="#f5c400"/>
            <path d="M36.5 38.5v-1.8a2.5 2.5 0 0 1 5 0v1.8" stroke="#000" strokeWidth="1.4" strokeLinecap="round"/>
            <rect x="35.5" y="38.2" width="6" height="4.5" rx="1" fill="#000"/>
            <circle cx="38.5" cy="40.2" r="0.9" fill="#f5c400"/>
          </svg>
        </div>

        <p className="female-privacy-label">
          {t('female_privacy_label', 'Photos kept private — out of respect')}
        </p>

      </div>

      {/* بادج ذهبية */}
      <span className="female-badge">{t('female_card_badge', '✓ Verified Result')}</span>
    </div>

    {/* نفس trans-info — بيانات حقيقية */}
    <div className="trans-info">
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="trans-duration">{duration}</span>
    </div>
  </div>
);

/* ─── Main Component ──────────────────────────────────────── */
const Transformations = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("male");

  /* بيانات الذكور */
  const maleData = [
    { id: 2, name: t('client_2_name'), duration: t('client_2_duration'), description: t('desc_muscle_growth'),    beforeImg: "/images_resources/Transformations/10b.jpg", afterImg: "/images_resources/Transformations/10a.jpg" },
    { id: 3, name: t('client_3_name'), duration: t('client_3_duration'), description: t('desc_fat_loss_journey'), beforeImg: "/images_resources/Transformations/4b.jpg",  afterImg: "/images_resources/Transformations/4a.jpg"  },
    { id: 4, name: t('client_4_name'), duration: t('client_4_duration'), description: t('desc_clean_bulk'),       beforeImg: "/images_resources/Transformations/2b.jpg",  afterImg: "/images_resources/Transformations/2a.jpg"  },
    { id: 5, name: t('client_5_name'), duration: t('client_5_duration'), description: t('desc_clean_bulk'),       beforeImg: "/images_resources/Transformations/11b.jpg", afterImg: "/images_resources/Transformations/11a.jpg" },
    { id: 6, name: t('client_6_name'), duration: t('client_6_duration'), description: t('desc_fat_loss'),         beforeImg: "/images_resources/Transformations/ashb.jpg",afterImg: "/images_resources/Transformations/asha.jpg"},
  ];

  /* بيانات الإناث — من resources مباشرة */
  const femaleClients = [
    {
      id: 1,
      name: t('client_1_name'),
      duration: t('client_1_duration'),
      description: t('desc_fat_loss'),
    },
  ];

  return (
    <section id="transformations" className="transformations-section">
      <div className="trans-container">

        {/* Header */}
        <div className="trans-header">
          <span className="subtitle">{t('trans_subtitle')}</span>
          <h2>{t('trans_title')} <span className="trans-highlight">{t('trans_highlight')}</span></h2>
        </div>

        {/* ── Tabs ── */}
        <div className="trans-tabs">
          <button
            className={`trans-tab ${activeTab === "male" ? "active" : ""}`}
            onClick={() => setActiveTab("male")}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <circle cx="10" cy="7" r="4"/>
              <path d="M14 3h7m0 0v7m0-7-7 7"/>
              <path d="M2 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/>
            </svg>
            {t('tab_male', 'Male')}
          </button>

          <button
            className={`trans-tab ${activeTab === "female" ? "active" : ""}`}
            onClick={() => setActiveTab("female")}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <circle cx="12" cy="8" r="4"/>
              <path d="M12 12v8m-4-4h8"/>
            </svg>
            {t('tab_female', 'Female')}
          </button>

          <span className={`trans-tab-indicator ${activeTab}`} />
        </div>

        {/* ── Grid ── */}
        <div className="transformations-grid tab-content" key={activeTab}>
          {activeTab === "male"
            ? maleData.map((item) => (
                <div key={item.id} className="trans-card">
                  <div className="trans-images-box">
                    <div className="trans-img-wrapper">
                      <img src={item.beforeImg} alt={`Before - ${item.name}`} loading="lazy"
                        onError={(e) => (e.target.src = "https://via.placeholder.com/400x500/111/fff?text=Before")} />
                      <span className="trans-label label-before">{t('trans_before')}</span>
                    </div>
                    <div className="trans-img-wrapper">
                      <img src={item.afterImg} alt={`After - ${item.name}`} loading="lazy"
                        onError={(e) => (e.target.src = "https://via.placeholder.com/400x500/f5c400/000?text=After")} />
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
            : femaleClients.map((item) => (
                <FemaleCard
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  duration={item.duration}
                  t={t}
                />
              ))
          }
        </div>

      </div>
    </section>
  );
};

export default Transformations;