import React from "react";
import "./Transformations.css";

const transformationsData = [
  {
    id: 1,
    name: "Ashraf S.",
    duration: "1 Month",
    description: "Lost 8kg fat and diet plan",
    beforeImg: "/images_resources/Transformations/ashb.jpg",
    afterImg: "/images_resources/Transformations/asha.jpg",
  },
  {
    id: 2,
    name: "Sarah K.",
    duration: "1 Month",
    description: "Muscle growth & definition",
    beforeImg: "/images_resources/Transformations/10b.jpg",
    afterImg: "/images_resources/Transformations/10a.jpg",
  },
  {
    id: 3,
    name: "Mike D.",
    duration: "11 Months",
    description: "Incredible fat loss journey",
    beforeImg: "/images_resources/Transformations/4b.jpg",
    afterImg: "/images_resources/Transformations/4a.jpg",
  },
  {
    id: 4,
    name: "Omar Y.",
    duration: "6 Months",
    description: "Clean bulk & muscle gain",
    beforeImg: "/images_resources/Transformations/2b.jpg",
    afterImg: "/images_resources/Transformations/2a.jpg",
  },
];

const Transformations = () => {
  return (
    <section id="transformations" className="transformations-section">
      <div className="trans-container">
        
        <div className="trans-header">
          <span className="trans-subtitle">REAL RESULTS</span>
          <h2>Client <span className="trans-highlight">Transformations</span></h2>
        </div>

        <div className="transformations-grid">
          {transformationsData.map((item) => (
            <div key={item.id} className="trans-card">
              <div className="trans-images-box">
                <div className="trans-img-wrapper">
                  <span className="trans-label label-before">Before</span>
                  <img 
                    src={item.beforeImg} 
                    alt={`${item.name} Before`} 
                    onError={(e) => e.target.src='https://via.placeholder.com/400x500/111/fff?text=Before'} 
                  />
                </div>
                <div className="trans-img-wrapper">
                  <span className="trans-label label-after">After</span>
                  <img 
                    src={item.afterImg} 
                    alt={`${item.name} After`} 
                    onError={(e) => e.target.src='https://via.placeholder.com/400x500/f5c400/000?text=After'} 
                  />
                </div>
              </div>

              <div className="trans-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="trans-duration">
                   {item.duration}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Transformations;