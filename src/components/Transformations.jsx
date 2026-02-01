import React from "react";

const transformationsData = [
  {
    id: 1,
    name: "Ahmed S.",
    duration: "12 Weeks",
    description: "Lost 15kg & Built Muscle",
    beforeImg: "/images_resources/before1.jpg", // Placeholder path
    afterImg: "/images_resources/after1.jpg",   // Placeholder path
  },
  {
    id: 2,
    name: "Sarah K.",
    duration: "6 Months",
    description: "Competition Prep Ready",
    beforeImg: "/images_resources/before2.jpg",
    afterImg: "/images_resources/after2.jpg",
  },
  {
    id: 3,
    name: "Mike D.",
    duration: "16 Weeks",
    description: "Total Body Recomposition",
    beforeImg: "/images_resources/before3.jpg",
    afterImg: "/images_resources/after3.jpg",
  },
  {
    id: 4,
    name: "Omar Y.",
    duration: "8 Weeks",
    description: "Fat Loss Focus",
    beforeImg: "/images_resources/before4.jpg",
    afterImg: "/images_resources/after4.jpg",
  },
];

const Transformations = () => {
  return (
    <section id="transformations" className="section gray transformations-section">
      <div className="section-container">
        
        <div className="section-header">
          <span className="subtitle">REAL RESULTS</span>
          <h2>Client <span className="highlight">Transformations</span></h2>
        </div>

        <div className="transformations-grid">
          {transformationsData.map((item) => (
            <div key={item.id} className="trans-card">
              {/* Images Container */}
              <div className="trans-images">
                <div className="img-wrapper">
                  <span className="img-label">Before</span>
                  {/* Using placeholder images if you don't have files yet */}
                  <img src={item.beforeImg} alt={`${item.name} Before`} onError={(e) => e.target.src='https://via.placeholder.com/150/333/fff?text=Before'} />
                </div>
                <div className="img-wrapper">
                  <span className="img-label">After</span>
                  <img src={item.afterImg} alt={`${item.name} After`} onError={(e) => e.target.src='https://via.placeholder.com/150/f5c400/000?text=After'} />
                </div>
              </div>

              {/* Card Info */}
              <div className="trans-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="duration-badge">
                  <i className="fa-regular fa-clock"></i> {item.duration}
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