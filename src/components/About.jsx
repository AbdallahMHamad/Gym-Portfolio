import React, { useState, useEffect, useRef } from "react";


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
    return (
   <section id="about" className="section dark about-section">
          <div className="about-container">
            
            <div className="about-content">
              <span className="subtitle"> ONLINE COACHING</span>
              
              <h1 className="hero-title">
                <span className="highlight">Stop Wishing, Start <span style={{color:"var(--yellow-main)"}}>Doing</span></span>
              </h1>
              
              <p className="description">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem autem minus, saepe alias repellendus accusantium vero. Labore, maiores? Dolore culpa amet molestiae doloribus repellendus est beatae soluta quis aut ad?              </p>

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

            <div className="about-image">
              <img 
                src="/images_resources/salman.png" 
                alt="Coach Salman" 
              />
              <div className="glow-effect"></div>
            </div>

          </div>
        </section>
    );
}
export default About;