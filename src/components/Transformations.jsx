import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Transformations.css";

const TransformationCard = ({ item }) => {
  const { t } = useTranslation();
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const calcPosition = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    return Math.round((x / rect.width) * 100);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onTouchStart = (e) => {
      isDragging.current = true;
      setSliderPosition(calcPosition(e.touches[0].clientX));
    };
    const onTouchMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      setSliderPosition(calcPosition(e.touches[0].clientX));
    };
    const onTouchEnd = () => { isDragging.current = false; };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove",  onTouchMove,  { passive: false });
    el.addEventListener("touchend",   onTouchEnd,   { passive: true });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove",  onTouchMove);
      el.removeEventListener("touchend",   onTouchEnd);
    };
  }, []);

  return (
    <div className="trans-card">
      <div
        className="trans-slider-container"
        ref={containerRef}
        onMouseMove={(e) => {
          if (e.buttons !== 1) return;
          setSliderPosition(calcPosition(e.clientX));
        }}
      >
        {/* AFTER — z-index 1, always fully visible in background */}
        <img
          src={item.afterImg}
          alt={`After - ${item.name}`}
          className="slider-img slider-img--after"
          loading="lazy"
          draggable={false}
        />

        {/* BEFORE — z-index 2, clipped from right via clipPath */}
        <img
          src={item.beforeImg}
          alt={`Before - ${item.name}`}
          className="slider-img slider-img--before"
          loading="lazy"
          draggable={false}
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            WebkitClipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        />

        {/* Labels */}
        <span className="slider-label label-before">{t("trans_before")}</span>
        <span className="slider-label label-after">{t("trans_after")}</span>

        {/* Desktop range input */}
        <input
          type="range" min="0" max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="slider-input"
        />

        {/* Divider + handle */}
        <div className="slider-line" style={{ left: `${sliderPosition}%` }}>
          <div className="slider-handle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>
      </div>

      <div className="trans-info">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <span className="trans-duration">{item.duration}</span>
      </div>
    </div>
  );
};

const Transformations = () => {
  const { t } = useTranslation();

  const transformationsData = [
    { id: 1, name: "Ashraf S.", duration: `1 ${t("month")}`,   description: t("desc_fat_loss"),         beforeImg: "/images_resources/Transformations/12b.jpg",  afterImg: "/images_resources/Transformations/12a.jpg"  },
    { id: 2, name: "Sarah K.", duration: `1 ${t("month")}`,   description: t("desc_muscle_growth"),    beforeImg: "/images_resources/Transformations/10b.jpg",  afterImg: "/images_resources/Transformations/10a.jpg"  },
    { id: 3, name: "Mike D.",  duration: `11 ${t("months")}`, description: t("desc_fat_loss_journey"), beforeImg: "/images_resources/Transformations/4b.jpg",   afterImg: "/images_resources/Transformations/4a.jpg"   },
    { id: 4, name: "Omar Y.",  duration: `6 ${t("months")}`,  description: t("desc_clean_bulk"),       beforeImg: "/images_resources/Transformations/2b.jpg",   afterImg: "/images_resources/Transformations/2a.jpg"   },
    { id: 5, name: "Omar Y.",  duration: `6 ${t("months")}`,  description: t("desc_clean_bulk"),       beforeImg: "/images_resources/Transformations/11b.jpg",  afterImg: "/images_resources/Transformations/11a.jpg"  },
    { id: 6, name: "Omar Y.",  duration: `6 ${t("months")}`,  description: t("desc_clean_bulk"),       beforeImg: "/images_resources/Transformations/ashb.jpg", afterImg: "/images_resources/Transformations/asha.jpg" },
  ];

  return (
    <section id="transformations" className="transformations-section">
      <div className="trans-container">
        <div className="trans-header">
          <span className="subtitle">{t("trans_subtitle")}</span>
          <h2>{t("trans_title")} <span className="trans-highlight">{t("trans_highlight")}</span></h2>
        </div>
        <div className="transformations-grid">
          {transformationsData.map((item) => (
            <TransformationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformations;