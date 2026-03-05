import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Sponsers.css";

function Sponsers() {
    const { t } = useTranslation();
    const [tappedId, setTappedId] = useState(null);

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

    // 1. مراقبة الضغطات في أي مكان بالشاشة لإلغاء التحديد
    useEffect(() => {
        const handleClickOutside = (e) => {
            // إذا الضغطة ما كانت على كارد من كروت الرعاة، الغي التحديد
            if (!e.target.closest('.sponsor-card')) {
                setTappedId(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside); // مهمة جداً للموبايل

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, []);

    const handleCardClick = (id) => {
        setTappedId(id);
        
        // 2. إلغاء التحديد تلقائياً بعد أقل من ثانية
        // عشان لما اليوزر يرجع من الانستغرام يلاقي الكارد رجعت لشكلها الطبيعي
        setTimeout(() => {
            setTappedId(null);
        }, 800);
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
                <div className="sponsers-grid">
                    {sponsorsData.map((sponsor) => (
                        <a
                            key={sponsor.id}
                            href={sponsor.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`sponsor-card ${tappedId === sponsor.id ? 'tapped' : ''}`}
                            onClick={() => handleCardClick(sponsor.id)}
                            onBlur={() => setTappedId(null)} // 3. حماية إضافية لو المتصفح علق الفوكس عليها
                            style={{ textDecoration: 'none', color: 'inherit' }}
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