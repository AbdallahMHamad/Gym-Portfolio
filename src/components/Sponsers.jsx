import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Sponsers.css";

function Sponsers() {
    const { t, i18n } = useTranslation();
    const [showBundles, setShowBundles] = useState(false);

    const sponsorsData = [
        {
            id: 1,
            name: "Myprotein ME",
            description: t('desc_myprotein'),
            logo: "/images_resources/Logos/Myproteinme.webp",
            link: "https://www.instagram.com/myproteinme/",
        },
        {
            id: 2,
            name: "Squatwolf",
            description: t('desc_squatwolf'),
            logo: "/images_resources/Logos/Squatwolf.webp",
            link: "https://www.instagram.com/squatwolf/",
        },
        {
            id: 3,
            name: "V.Shape Pro",
            description: t('desc_vshape'),
            logo: "/images_resources/Logos/VShape.webp",
            link: "https://www.instagram.com/v.shape.sa/",
            bundles: [
                {
                    meals: t('vshape_bundle_1_meals'),
                    duration: t('vshape_duration_20'),
                    price: i18n.language === 'ar' ? "١٠٢٦ ﷼" : "1026 SAR",
                    code: "MS99"
                },
                {
                    meals: t('vshape_bundle_2_meals'),
                    duration: t('vshape_duration_20'),
                    price: i18n.language === 'ar' ? "٧٧٤ ﷼" : "774 SAR",
                    code: "MS999"
                }
            ]
        }
    ];

    const toggleBundles = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setShowBundles(!showBundles);
    };

    return (
        <section id="sponsers" className="section dark sponsers-section">
            <div className="section-container">
                <div className="section-header">
                    <span className="subtitle">{t('sponsors_subtitle')}</span>
                    <h2 className="section-title">
                        {t('sponsors_title')} 
                        <span className="highlight">{t('sponsors_highlight')}</span>
                    </h2>
                </div>

                {/* تحديث الـ Promo Banner ليكون مترجماً أيضاً */}
                <div className="promo-banner">
                    <div className="promo-content">
                        <span className="promo-label">{t('promo_label')}</span>
                        <p>
                            {t('promo_use_code')} <span className="promo-code">MS99</span> 
                            {" "}{t('promo_for')} <strong>{t('promo_discount')}</strong> {t('promo_on_products')}
                        </p>    
                    </div>
                </div>

                <div className="sponsers-grid">
                    {sponsorsData.map((sponsor) => (
                        <div key={sponsor.id} className="sponsor-card">
                            <a href={sponsor.link} target="_blank" rel="noopener noreferrer" className="card-link">
                                <div className="sponsor-logo-wrapper">
                                    <img src={sponsor.logo} alt={sponsor.name} />
                                </div>
                                <div className="sponsor-content">
                                    <h3>{sponsor.name}</h3>
                                    <div className="divider"></div>
                                    <p>{sponsor.description}</p>
                                </div>
                            </a>

                            {sponsor.bundles && (
                                <div className="vshape-special-area">
                                    <button className="collapse-btn" onClick={toggleBundles}>
                                        {showBundles ? t('vshape_hide_bundles') : t('vshape_view_bundles')}
                                        <span className="v-icon">V</span>
                                    </button>
                                    
                                    <div className={`bundles-collapse ${showBundles ? 'show' : ''}`}>
                                        {sponsor.bundles.map((bundle, idx) => (
                                            <div key={idx} className="bundle-box">
                                                <p className="bundle-text">{bundle.meals}</p>
                                                <small className="bundle-duration">{bundle.duration}</small>
                                                <div className="bundle-info">
                                                    <span className="price">{bundle.price}</span>
                                                    <span className="code-tag">{bundle.code}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Sponsers;