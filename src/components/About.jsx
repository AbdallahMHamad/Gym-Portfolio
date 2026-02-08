import React, { useState, useEffect, useRef } from "react";
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
          observer.disconnect(); // Run animation only once
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the item is visible
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Calculate current number based on progress
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return <span ref={countRef}>{count}</span>;
};


function About() {
  // Array of original .jfif images
  const originalImages = [
    "/images_resources/salman/1.jfif",
    "/images_resources/salman/2.jfif",
    "/images_resources/salman/3.jfif",
    "/images_resources/salman/4.jfif"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % originalImages.length);
  };

  return (
    
    <section id="about" className="section dark about-section">
      <div className="about-container">
        <div className="about-content">
          {/* Identity Line */}
      <div className="coach-name-tag">
        <span className="line"></span>
        <span className="name">Mohammad Salman</span>
      </div>
          <span className="subtitle">ONLINE COACHING</span>
          <h1 className="hero-title">
            Stop Wishing, <br />
            Start <span style={{ color: "var(--yellow-main)" }}>Doing</span>
          </h1>
          <p className="description">
            Transform your physique with expert guidance. Whether you're looking to lose fat or build elite muscle, I provide the roadmap to your best self.
          </p>

          <div className="cta-group">
            <a href="#plans" className="btn-primary">View Programs</a>
            <a href="#transformations" className="btn-secondary">See Results</a>
          </div>

          <div className="stats-grid">
            <div className="stat-box">
              <h3>
                {/* Duration is in milliseconds (2000 = 2 seconds) */}
                <CountUp end={100} duration={1000} />+
              </h3>
              <p>Clients Transformed</p>
            </div>
            
            <div className="stat-box">
              <h3>
                <CountUp end={7} duration={500} />+
              </h3>
              <p>Years Experience</p>
            </div>
            
            <div className="stat-box">
              <h3>
                <CountUp end={8} duration={500} />+
              </h3>
              <p>Certifications</p>
            </div>
          </div>
        </div>

        <div className="about-image" onClick={nextImage}>
          {originalImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Coach Salman ${index}`}
              className={`hero-image-original ${index === currentIndex ? "active" : "hidden"}`}
            />
          ))}
          <div className="image-tap-hint">Tap to swap</div>
        </div>
      </div>
    </section>
  );
}

export default About;