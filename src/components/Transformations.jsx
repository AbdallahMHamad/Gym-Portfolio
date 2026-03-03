import React from "react";
import { useTranslation } from "react-i18next";
import "./Transformations.css";

const Transformations = () => {
  const { t } = useTranslation();

  const transformationsData = [
    { 
      id: 1, 
      name: t('client_1_name'), // سميرة
      duration: t('client_1_duration'), // 3 أشهر
      description: t('desc_fat_loss'), 
      beforeImg: "/images_resources/Transformations/12b.jpg", 
      afterImg: "/images_resources/Transformations/12a.jpg" 
    },
    { 
      id: 2, 
      name: t('client_2_name'), // رائد
      duration: t('client_2_duration'), // 5 أشهر
      description: t('desc_muscle_growth'), 
      beforeImg: "/images_resources/Transformations/10b.jpg", 
      afterImg: "/images_resources/Transformations/10a.jpg" 
    },
    { 
      id: 3, 
      name: t('client_3_name'), // محمد
      duration: t('client_3_duration'), // سنة كاملة
      description: t('desc_fat_loss_journey'), 
      beforeImg: "/images_resources/Transformations/4b.jpg", 
      afterImg: "/images_resources/Transformations/4a.jpg" 
    },
    { 
      id: 4, 
      name: t('client_4_name'), // أسامة
      duration: t('client_4_duration'), // 6 أشهر
      description: t('desc_clean_bulk'), 
      beforeImg: "/images_resources/Transformations/2b.jpg", 
      afterImg: "/images_resources/Transformations/2a.jpg" 
    },
    { 
      id: 5, 
      name: t('client_5_name'), // خالد
      duration: t('client_5_duration'), // 5 أشهر
      description: t('desc_clean_bulk'), 
      beforeImg: "/images_resources/Transformations/11b.jpg", 
      afterImg: "/images_resources/Transformations/11a.jpg" 
    },
    { 
      id: 6, 
      name: t('client_6_name'), // أشرف
      duration: t('client_6_duration'), // شهر واحد
      description: t('desc_fat_loss'), 
      beforeImg: "/images_resources/Transformations/ashb.jpg", 
      afterImg: "/images_resources/Transformations/asha.jpg" 
    },
  ];

  return (
    <section id="transformations" className="transformations-section">
      <div className="trans-container">

        <div className="trans-header">
          <span className="subtitle">{t('trans_subtitle')}</span>
          <h2>{t('trans_title')} <span className="trans-highlight">{t('trans_highlight')}</span></h2>
        </div>

        <div className="transformations-grid">
          {transformationsData.map((item) => (
            <div key={item.id} className="trans-card">

              <div className="trans-images-box">
                <div className="trans-img-wrapper">
                  <img
                    src={item.beforeImg}
                    alt={`Before - ${item.name}`}
                    loading="lazy"
                    onError={(e) => e.target.src = 'https://via.placeholder.com/400x500/111/fff?text=Before'}
                  />
                  <span className="trans-label label-before">{t('trans_before')}</span>
                </div>

                <div className="trans-img-wrapper">
                  <img
                    src={item.afterImg}
                    alt={`After - ${item.name}`}
                    loading="lazy"
                    onError={(e) => e.target.src = 'https://via.placeholder.com/400x500/f5c400/000?text=After'}
                  />
                  <span className="trans-label label-after">{t('trans_after')}</span>
                </div>
              </div>

              <div className="trans-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="trans-duration">{item.duration}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Transformations;