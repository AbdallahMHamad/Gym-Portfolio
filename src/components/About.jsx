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
  const { t, i18n } = useTranslation();

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
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const isDraggingHorizontally = useRef(false);
  const wrapperRef = useRef(null);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % originalImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [originalImages.length]);

  // Attach touch listeners with { passive: false } so we can preventDefault
  // React's onTouchMove is passive by default and cannot preventDefault
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const onTouchStart = (e) => {
      touchStartX.current = e.targetTouches[0].clientX;
      touchStartY.current = e.targetTouches[0].clientY;
      isDraggingHorizontally.current = false;
    };

    const onTouchMove = (e) => {
      const dx = Math.abs(e.targetTouches[0].clientX - touchStartX.current);
      const dy = Math.abs(e.targetTouches[0].clientY - touchStartY.current);

      if (!isDraggingHorizontally.current && (dx > 5 || dy > 5)) {
        isDraggingHorizontally.current = dx > dy;
      }

      if (isDraggingHorizontally.current) {
        e.preventDefault(); // stops page from scrolling
      }
    };

    const onTouchEnd = (e) => {
      if (!isDraggingHorizontally.current) return;

      const distance = touchStartX.current - e.changedTouches[0].clientX;
      const isRTL = i18n.language === 'ar';

      if (distance > 50) {
        // Swiped left
        setCurrentIndex((prev) =>
          isRTL
            ? prev === 0 ? originalImages.length - 1 : prev - 1
            : (prev + 1) % originalImages.length
        );
      } else if (distance < -50) {
        // Swiped right
        setCurrentIndex((prev) =>
          isRTL
            ? (prev + 1) % originalImages.length
            : prev === 0 ? originalImages.length - 1 : prev - 1
        );
      }

      isDraggingHorizontally.current = false;
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false }); // passive:false is the key
    el.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [i18n.language, originalImages.length]);

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
            ref={wrapperRef}
          >
            <div
              className="carousel-track"
              style={{
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