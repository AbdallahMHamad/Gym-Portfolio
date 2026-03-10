import React, { useState, useEffect, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next"; 
import "./About.css";

// مكون العداد الرقمي
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
  const timerRef = useRef(null);

  const originalImages = [
    "/images_resources/salman/1.webp",
    "/images_resources/salman/2.webp",
    "/images_resources/salman/3.webp",
    "/images_resources/salman/backss.webp",
    "/images_resources/salman/back2.webp",
    "/images_resources/salman/packs.webp",
    "/images_resources/salman/pose.webp",
    "/images_resources/salman/side.webp"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const isDraggingHorizontally = useRef(false);
  const wrapperRef = useRef(null);

  // دالة تشغيل التايمر مع إعادة الضبط (Reset)
  const startAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % originalImages.length);
    }, 7000);
  }, [originalImages.length]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startAutoPlay]);

  // منطق السحب (Swipe Logic) - معدل ليكون السحب لليسار هو "التالي"
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
        e.preventDefault(); 
      }
    };

    const onTouchEnd = (e) => {
      if (!isDraggingHorizontally.current) return;

      const distance = touchStartX.current - e.changedTouches[0].clientX;

      if (Math.abs(distance) > 50) {
        startAutoPlay(); // تصفير التايمر لمنع الـ Glitch

        if (distance > 50) {
          // سحب اليد من اليمين إلى اليسار (Swipe Left) -> اذهب للصورة التالية
          setCurrentIndex((prev) => (prev + 1) % originalImages.length);
        } else {
          // سحب اليد من اليسار إلى اليمين (Swipe Right) -> اذهب للصورة السابقة
          setCurrentIndex((prev) => 
            prev === 0 ? originalImages.length - 1 : prev - 1
          );
        }
      }
      isDraggingHorizontally.current = false;
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [originalImages.length, startAutoPlay]);

  const handleDotClick = (idx) => {
    setCurrentIndex(idx);
    startAutoPlay();
  };

  return (
    <section id="about" className="section dark about-section">
      <div className="about-container">

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

        <div className="about-image">
          <div className="image-wrapper" ref={wrapperRef}>
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                direction: 'ltr',
                display: 'flex',
                transition: 'transform 0.6s ease-in-out'
              }}
            >
{originalImages.map((img, index) => (
  <img
    key={index}
    src={img}
    alt={`Coach Salman - ${index + 1}`}
    className="carousel-slide"
    style={{ minWidth: '100%', objectFit: 'cover' }}
    loading={index === 0 ? "eager" : "lazy"} 
    {...(index === 0 ? { fetchpriority: "high" } : {})} 
  />
))}  
          </div>

            <div className="carousel-dots" style={{ direction: 'ltr' }}>
              {originalImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${currentIndex === idx ? "active" : ""}`}
                  onClick={() => handleDotClick(idx)}
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