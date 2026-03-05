import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Sponsers.css";

function Sponsers() {
    const { t } = useTranslation();
    const [tappedId, setTappedId] = useState(null);

    // إضافة روابط الإنستغرام داخل البيانات
    const sponsorsData = [
        {
            id: 1,
            name: "Myprotein ME",
            description: t('desc_myprotein'),
            logo: "/images_resources/Logos/Myproteinme.jpg",
            link: "https://www.instagram.com/myproteinme/",
        },
        {
            id: 2,
            name: "Squatwolf",
            description: t('desc_squatwolf'),
            logo: "/images_resources/Logos/Squatwolf.jpg",
            link: "https://www.instagram.com/squatwolf/",
        },
        {
            id: 3,
            name: "Ghithaa - غذاء",
            description: t('desc_ghithaa'),
            logo: "/images_resources/Logos/ghithaa_sa.jpg",
            link: "https://www.instagram.com/ghithaa_sa/",
        }
    ];

    const handleCardClick = (id) => {
        setTappedId(prev => (prev === id ? null : id));
    };

    return (
        <section id="sponsers" className="section dark sponsers-section">
            <div className="section-container">

                {/* Header */}
                <div className="section-header">
                    <span className="subtitle">{t('sponsors_subtitle')}</span>
                    <h2 className="section-title">
                        {t('sponsors_title')} 
                        <span className="highlight">{t('sponsors_highlight')}</span>
                    </h2>
                    <p className="section-description">{t('sponsors_description')}</p>
                </div>

                {/* Promo Banner */}
                <div className="promo-banner">
                    <div className="promo-content">
                        <span className="promo-label">{t('promo_label')}</span>
                        <p>
                            {t('promo_use_code')} 
                            <span className="promo-code">MS99</span> 
                            {t('promo_for')} 
                            <strong> {t('promo_discount')} </strong> 
                            {t('promo_on_products')}
                        </p>    
                    </div>
                </div>

                {/* Grid */}
                <div
                    className="sponsers-grid"
                    onClick={(e) => {
                        if (!e.target.closest('.sponsor-card')) setTappedId(null);
                    }}
                >
                    {sponsorsData.map((sponsor) => (
                        // تحويل الـ div إلى a tag مع الرابط
                        <a
                            key={sponsor.id}
                            href={sponsor.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`sponsor-card ${tappedId === sponsor.id ? 'tapped' : ''}`}
                            onClick={() => handleCardClick(sponsor.id)}
                            style={{ textDecoration: 'none', color: 'inherit' }} // عشان الرابط ما يخرب تصميم النصوص (يضيف خط تحتها)
                        >
                            <div className="sponsor-logo-wrapper">
                                <img
                                    src={sponsor.logo}
                                    alt={`${sponsor.name} Logo`}
                                    onError={(e) => e.target.src='https://via.placeholder.com/200x100/333/fff?text=LOGO'}
                                />
                            </div>

                            <div className="sponsor-content">
                                <h3>{sponsor.name}</h3>
                                <div className="divider"></div>
                                <p>{sponsor.description}</p>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Sponsers;