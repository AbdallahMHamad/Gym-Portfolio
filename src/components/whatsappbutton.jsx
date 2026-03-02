import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./WhatsAppButton.css";

const WHATSAPP_NUMBER     = "966581145883";
const COLLAB_NUMBER       = "966581145883"; // same number, different message

const WhatsAppButton = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []);

  const subscriptionMsg = encodeURIComponent(
    "مرحباً كوتش سلمان، دخلت من الموقع وأريد الحصول على استشارة مجانية وبدء التحول الخاص بي."
  );

  const collabMsg = encodeURIComponent(
    "مرحباً كوتش سلمان، دخلت من الموقع وأريد التحدث معك بخصوص فرصة تعاون."
  );

  const subscriptionUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${subscriptionMsg}`;
  const collabUrl       = `https://wa.me/${COLLAB_NUMBER}?text=${collabMsg}`;

  return (
    <div className={`whatsapp-float ${open ? "open" : ""}`} ref={ref}>

      {/* ── Expandable options ── */}
      <div className="whatsapp-options">

        {/* Subscription */}
        <a
          href={subscriptionUrl}
          className="whatsapp-option"
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          <div className="option-icon">
            <i className="fas fa-dumbbell" />
          </div>
          <div className="option-text">
            <span className="option-label">{t('whatsapp_subscription', 'الاشتراكات')}</span>
            <span className="option-sublabel">{t('whatsapp_subscription_sub', 'برامج التدريب والتغذية')}</span>
          </div>
        </a>

        {/* Collaboration */}
        <a
          href={collabUrl}
          className="whatsapp-option"
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          <div className="option-icon">
            <i className="fas fa-handshake" />
          </div>
          <div className="option-text">
            <span className="option-label">{t('whatsapp_collab', 'التعاون')}</span>
            <span className="option-sublabel">{t('whatsapp_collab_sub', 'شراكات وإعلانات')}</span>
          </div>
        </a>

      </div>

      {/* ── Main trigger button ── */}
      <button
        className="whatsapp-trigger"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="WhatsApp"
      >
        <div className="pulse-effect" />
        <i className={`fab ${open ? "fa-times" : "fa-whatsapp"}`} />
        <span className="whatsapp-trigger-label">
          {t('whatsapp_cta', 'تواصل معنا')}
        </span>
      </button>

    </div>
  );
};

export default WhatsAppButton;