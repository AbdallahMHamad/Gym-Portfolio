import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./WhatsAppButton.css";

const WHATSAPP_NUMBER = "966581145883";
const COLLAB_NUMBER   = "966581145883";

const WhatsAppButton = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const floatRef = useRef(null);
  const isRTL = i18n.language?.startsWith("ar");

  // Close on outside click
  useEffect(() => {
    const h = (e) => {
      if (floatRef.current && !floatRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown",  h);
    document.addEventListener("touchstart", h);
    return () => {
      document.removeEventListener("mousedown",  h);
      document.removeEventListener("touchstart", h);
    };
  }, []);

  // التعديل هنا: استخدام t() لجلب الرسالة حسب اللغة الحالية للموقع
  const subscriptionMsg = encodeURIComponent(t('whatsapp_training_msg'));
  const collabMsg       = encodeURIComponent(t('whatsapp_collab_msg'));
  
  const subscriptionUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${subscriptionMsg}`;
  const collabUrl       = `https://wa.me/${COLLAB_NUMBER}?text=${collabMsg}`;

  return (
    <div
      ref={floatRef}
      className={`whatsapp-float ${open ? "open" : ""} ${isRTL ? "rtl" : "ltr"}`}
    >
      <div className="whatsapp-options">
        <a
          href={subscriptionUrl}
          className="whatsapp-option"
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          <div className="option-icon"><i className="fas fa-dumbbell" /></div>
          <span className="option-label">{t('whatsapp_subscription', 'الاشتراكات')}</span>
        </a>

        <a
          href={collabUrl}
          className="whatsapp-option"
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          <div className="option-icon"><i className="fas fa-handshake" /></div>
          <span className="option-label">{t('whatsapp_collab', 'التعاون')}</span>
        </a>
      </div>

      {/* Main trigger */}
      <button
        className="whatsapp-trigger"
        onClick={() => setOpen(p => !p)}
        aria-label="WhatsApp"
      >
        <div className="pulse-effect" />
        <i className={`fab ${open ? "fa-times" : "fa-whatsapp"}`} />
      </button>
    </div>
  );
};

export default WhatsAppButton;