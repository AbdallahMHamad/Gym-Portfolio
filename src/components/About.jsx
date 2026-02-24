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
  const { t } = useTranslation();

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

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % originalImages.length);
  };

  return (
    <section id="about" className="section dark about-section">
      <div className="about-container">

        {/* ── TEXT SIDE (order 1 on all screens) ── */}
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

          {/* On desktop: stats sit here inside about-content */}
          {/* On mobile: CSS order:4 pushes it below the image */}
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

        {/* ── IMAGE SIDE (order 2 on desktop, order 3 on mobile) ── */}
        <div className="about-image" onClick={nextImage}>
          <div className="image-wrapper">
            {originalImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`كوتش محمد سلمان مدرب لياقة بدنية أونلاين - صورة رقم ${index + 1}`}
                className={`hero-image-original ${index === currentIndex ? "active" : "hidden"}`}
              />
            ))}
            <div className="image-tap-hint">{t('about_tap_hint')}</div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;