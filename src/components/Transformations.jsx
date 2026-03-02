import React from "react";
import { useTranslation } from "react-i18next";
import "./Transformations.css";

const Transformations = () => {
  const { t } = useTranslation();

  const transformationsData = [
    { id: 1, name: "Ashraf S.", duration: `1 ${t('month')}`,   description: t('desc_fat_loss'),         beforeImg: "/images_resources/Transformations/12b.jpg",  afterImg: "/images_resources/Transformations/12a.jpg"  },
    { id: 2, name: "Sarah K.", duration: `1 ${t('month')}`,   description: t('desc_muscle_growth'),    beforeImg: "/images_resources/Transformations/10b.jpg",  afterImg: "/images_resources/Transformations/10a.jpg"  },
    { id: 3, name: "Mike D.",  duration: `11 ${t('months')}`, description: t('desc_fat_loss_journey'), beforeImg: "/images_resources/Transformations/4b.jpg",   afterImg: "/images_resources/Transformations/4a.jpg"   },
    { id: 4, name: "Omar Y.",  duration: `6 ${t('months')}`,  description: t('desc_clean_bulk'),       beforeImg: "/images_resources/Transformations/2b.jpg",   afterImg: "/images_resources/Transformations/2a.jpg"   },
    { id: 5, name: "Omar Y.",  duration: `6 ${t('months')}`,  description: t('desc_clean_bulk'),       beforeImg: "/images_resources/Transformations/11b.jpg",  afterImg: "/images_resources/Transformations/11a.jpg"  },
    { id: 6, name: "Omar Y.",  duration: `6 ${t('months')}`,  description: t('desc_clean_bulk'),       beforeImg: "/images_resources/Transformations/ashb.jpg", afterImg: "/images_resources/Transformations/asha.jpg" },
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

              {/* Images box — fixed aspect ratio, both images equal */}
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