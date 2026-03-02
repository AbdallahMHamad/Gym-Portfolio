import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./WhatsAppButton.css";

const WHATSAPP_NUMBER = "966581145883";
const COLLAB_NUMBER   = "966581145883";

const WhatsAppButton = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const floatRef   = useRef(null);
  const outsideRef = useRef(null);

  // ── Position state (bottom/right from viewport edges) ──
  const [pos, setPos] = useState({ bottom: 24, right: 16 });

  // Track drag state
  const drag = useRef({
    dragging: false,
    startX: 0,
    startY: 0,
    startRight: 16,
    startBottom: 24,
    moved: false,        // distinguishes drag from tap
  });

  // ── Drag logic ──
  const getClientXY = (e) => {
    if (e.touches) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    return { x: e.clientX, y: e.clientY };
  };

  const onDragStart = (e) => {
    // Don't drag when clicking option links
    if (e.target.closest(".whatsapp-option")) return;

    const { x, y } = getClientXY(e);
    drag.current = {
      dragging: true,
      startX: x,
      startY: y,
      startRight: pos.right,
      startBottom: pos.bottom,
      moved: false,
    };
  };

  useEffect(() => {
    const onMove = (e) => {
      if (!drag.current.dragging) return;
      const { x, y } = getClientXY(e);

      const dx = x - drag.current.startX;
      const dy = y - drag.current.startY;

      // Mark as moved if finger/cursor traveled more than 5px
      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
        drag.current.moved = true;
      }

      if (!drag.current.moved) return;

      // Prevent page scroll while dragging
      e.preventDefault();

      const el = floatRef.current;
      if (!el) return;

      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const { offsetWidth: w, offsetHeight: h } = el;

      // Calculate new right/bottom (invert dx because right is from right edge)
      let newRight  = drag.current.startRight  - dx;
      let newBottom = drag.current.startBottom - dy;

      // Clamp to viewport with padding
      const pad = 8;
      newRight  = Math.max(pad, Math.min(newRight,  vw - w - pad));
      newBottom = Math.max(pad, Math.min(newBottom, vh - h - pad));

      setPos({ right: newRight, bottom: newBottom });
    };

    const onEnd = () => {
      drag.current.dragging = false;
    };

    window.addEventListener("mousemove",  onMove, { passive: false });
    window.addEventListener("touchmove",  onMove, { passive: false });
    window.addEventListener("mouseup",    onEnd);
    window.addEventListener("touchend",   onEnd);

    return () => {
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("touchmove",  onMove);
      window.removeEventListener("mouseup",    onEnd);
      window.removeEventListener("touchend",   onEnd);
    };
  }, [pos]);

  // ── Close on outside click ──
  useEffect(() => {
    const handler = (e) => {
      if (floatRef.current && !floatRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown",  handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown",  handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []);

  // ── Toggle — only if user didn't drag ──
  const handleTriggerClick = () => {
    if (drag.current.moved) return; // ignore tap after drag
    setOpen((prev) => !prev);
  };

  const subscriptionMsg = encodeURIComponent("مرحباً كوتش سلمان، دخلت من الموقع وأريد الحصول على استشارة مجانية وبدء التحول الخاص بي.");
  const collabMsg       = encodeURIComponent("مرحباً كوتش سلمان، دخلت من الموقع وأريد التحدث معك بخصوص فرصة تعاون.");

  const subscriptionUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${subscriptionMsg}`;
  const collabUrl       = `https://wa.me/${COLLAB_NUMBER}?text=${collabMsg}`;

  return (
    <div
      ref={floatRef}
      className={`whatsapp-float ${open ? "open" : ""}`}
      style={{ bottom: pos.bottom, right: pos.right }}
      onMouseDown={onDragStart}
      onTouchStart={onDragStart}
    >
      {/* ── Options ── */}
      <div className="whatsapp-options">
        <a
          href={subscriptionUrl}
          className="whatsapp-option"
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          <div className="option-icon"><i className="fas fa-dumbbell" /></div>
          <div className="option-text">
            <span className="option-label">{t('whatsapp_subscription', 'الاشتراكات')}</span>
            <span className="option-sublabel">{t('whatsapp_subscription_sub', 'برامج التدريب والتغذية')}</span>
          </div>
        </a>

        <a
          href={collabUrl}
          className="whatsapp-option"
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          <div className="option-icon"><i className="fas fa-handshake" /></div>
          <div className="option-text">
            <span className="option-label">{t('whatsapp_collab', 'التعاون')}</span>
            <span className="option-sublabel">{t('whatsapp_collab_sub', 'شراكات وإعلانات')}</span>
          </div>
        </a>
      </div>

      {/* ── Trigger ── */}
      <button
        className="whatsapp-trigger"
        onClick={handleTriggerClick}
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