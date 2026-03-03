import React, { useState, useEffect, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import "./WhatsAppButton.css";

const WHATSAPP_NUMBER = "966581145883";
const COLLAB_NUMBER   = "966581145883";

const WhatsAppButton = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen]           = useState(false);
  const [bottomOffset, setBottom] = useState(24);
  const floatRef                  = useRef(null);
  const rafRef                    = useRef(null);
  const isRTL = i18n.language?.startsWith("ar");

  /* ── Safe-area + visualViewport offset ──────────────────────
     نحسب bottom مرة واحدة عند mount وعند resize/orientationchange فقط.
     لا نسمع على scroll حتى ما يتحرك الزر مع toolbar سفاري.
  ─────────────────────────────────────────────────────────── */
  const computeBottom = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      // safe-area-inset-bottom — iOS notch / home-indicator
      const safeArea = parseInt(
        getComputedStyle(document.documentElement)
          .getPropertyValue("--sab") || "0",
        10
      );
      setBottom(24 + (safeArea || 0));
    });
  }, []);

  useEffect(() => {
    // كتابة safe-area-inset-bottom في CSS var عشان نقدر نقرأها بـ JS
    const styleEl = document.createElement("style");
    styleEl.id    = "sab-helper";
    styleEl.textContent = `:root { --sab: env(safe-area-inset-bottom, 0px); }`;
    document.head.appendChild(styleEl);

    computeBottom();

    window.addEventListener("resize",            computeBottom);
    window.addEventListener("orientationchange", computeBottom);

    // visualViewport resize = keyboard / toolbar تغير
    window.visualViewport?.addEventListener("resize", computeBottom);

    return () => {
      window.removeEventListener("resize",            computeBottom);
      window.removeEventListener("orientationchange", computeBottom);
      window.visualViewport?.removeEventListener("resize", computeBottom);
      document.getElementById("sab-helper")?.remove();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [computeBottom]);

  /* ── Close on outside tap ─────────────────────────────────── */
  useEffect(() => {
    const h = (e) => {
      if (floatRef.current && !floatRef.current.contains(e.target))
        setOpen(false);
    };
    document.addEventListener("mousedown",  h);
    document.addEventListener("touchstart", h, { passive: true });
    return () => {
      document.removeEventListener("mousedown",  h);
      document.removeEventListener("touchstart", h);
    };
  }, []);

  const subscriptionMsg = encodeURIComponent(t("whatsapp_training_msg"));
  const collabMsg       = encodeURIComponent(t("whatsapp_collab_msg"));
  const subscriptionUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${subscriptionMsg}`;
  const collabUrl       = `https://wa.me/${COLLAB_NUMBER}?text=${collabMsg}`;

  return (
    <div
      ref={floatRef}
      className={`whatsapp-float ${open ? "open" : ""} ${isRTL ? "rtl" : "ltr"}`}
      style={{ bottom: `${bottomOffset}px` }}   /* ← JS-driven, not CSS */
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
          <span className="option-label">{t("whatsapp_subscription", "الاشتراكات")}</span>
        </a>

        <a
          href={collabUrl}
          className="whatsapp-option"
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          <div className="option-icon"><i className="fas fa-handshake" /></div>
          <span className="option-label">{t("whatsapp_collab", "التعاون")}</span>
        </a>
      </div>

      <button
        className="whatsapp-trigger"
        onClick={() => setOpen((p) => !p)}
        aria-label="WhatsApp"
      >
        <div className="pulse-effect" />
        <i className={`fab ${open ? "fa-times" : "fa-whatsapp"}`} />
      </button>
    </div>
  );
};

export default WhatsAppButton;