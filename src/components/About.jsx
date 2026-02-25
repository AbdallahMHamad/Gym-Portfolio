import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next"; 
import "./About.css";

const CountUp = ({ end, duration = 1000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return <span ref={countRef}>{count}</span>;
};


function About() {
  const { t, i18n } = useTranslation(); // جلب i18n لمعرفة اتجاه اللغة

  const originalImages = [
    "/images_resources/salman/1.jfif",
    "/images_resources/salman/2.jfif",
    "/images_resources/salman/3.jfif",
    "/images_resources/salman/backss.jpg",
    "/images_resources/salman/back2.jpg",
    "/images_resources/salman/packs.jpg",
    "/images_resources/salman/pose.jpg",
    "/images_resources/salman/side.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // تشغيل الكاروسيل تلقائياً كل 3.5 ثوانٍ
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % originalImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [originalImages.length]);

  // دوال سحب الصورة (Swipe) للموبايل
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    // مراعاة اتجاه اللغة RTL أو LTR عند السحب
    const isRTL = i18n.language === 'ar';

    if (isLeftSwipe) {
      setCurrentIndex((prev) => isRTL ? (prev === 0 ? originalImages.length - 1 : prev - 1) : (prev + 1) % originalImages.length);
    }
    if (isRightSwipe) {
      setCurrentIndex((prev) => isRTL ? (prev + 1) % originalImages.length : (prev === 0 ? originalImages.length - 1 : prev - 1));
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section id="about" className="section dark about-section">
      <div className="about-container">

        {/* ── TEXT SIDE ── */}
        <div className="about-content">
          <div className="coach-name-tag">
            <span className="line"></span>
            <span className="name">{t('about_name')}</span>
          </div>

          <span className="subtitle">{t('about_subtitle')}</span>

          <h1 className="hero-title">
            {t('about_title_stop')} <br />
            {t('about_title_start')} <span style={{ color: "var(--yellow-main)" }}>{t('about_title_doing')}</span>
          </h1>

          <div className="uk-certification-badge">
            <span className="flag-icon">GB</span>
            <span className="cert-text">{t('about_cert')}</span>
          </div>

          <p className="description">
            {t('about_desc')}
          </p>

          <div className="stats-grid">
            <div className="stat-box highlighted-stat">
              <h3><CountUp end={100} duration={1000} />+</h3>
              <p>{t('about_stat_clients')}</p>
            </div>

            <div className="stat-box highlighted-stat">
              <h3><CountUp end={7} duration={500} />+</h3>
              <p>{t('about_stat_years')}</p>
            </div>

            <div className="stat-box highlighted-stat">
              <h3 className="uk-text">UK</h3>
              <p>{t('about_stat_uk')}</p>
            </div>
          </div>
        </div>

        {/* ── IMAGE CAROUSEL SIDE ── */}
        <div className="about-image">
          <div 
            className="image-wrapper"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* التراك الذي يحمل الصور ويتحرك */}
            <div 
              className="carousel-track"
              style={{
                // في اللغة العربية (RTL) يتحرك التراك باتجاه الموجب، وفي الإنجليزية (LTR) بالسالب
                transform: `translateX(${i18n.language === 'ar' ? currentIndex * 100 : -currentIndex * 100}%)`
              }}
            >
              {originalImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`كوتش محمد سلمان - صورة ${index + 1}`}
                  className="carousel-slide"
                />
              ))}
            </div>

            {/* نقاط التنقل السفلية (Dots) */}
            <div className="carousel-dots">
              {originalImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${currentIndex === idx ? "active" : ""}`}
                  onClick={() => setCurrentIndex(idx)}
                ></span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;