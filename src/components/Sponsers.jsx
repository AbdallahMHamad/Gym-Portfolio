import React from "react";
import "./Sponsers.css";
const sponsorsData = [
    {
        id: 1,
        name: "Myprotein ME",
        description: "Premium supplements fueling our athletes with the purest whey isolate and pre-workout formulas.",
        logo: "/images_resources/Myproteinme.jpg", 

    },
    {
        id: 2,
        name: "Squatwolf",
        description: "Clothing brand for athletes and fitness enthusiasts based in Dubai.",
        logo: "/images_resources/Squatwolf.jpg", 

    },
    {
        id: 3,
        name: "Ghithaa - غذاء",
        description: "Health food for athletes and fitness enthusiasts.",
        logo: "/images_resources/ghithaa_sa.jpg", 
    }
];

function Sponsers() {
    return (
        <section id="sponsers" className="section dark sponsers-section">
            <div className="section-container">
                
                {/* Header */}
                <div className="section-header">
                    <span className="subtitle">TRUSTED PARTNERS</span>
                    <h2>Our <span className="highlight">Sponsors</span></h2>
                </div>

                {/* Grid */}
                <div className="sponsers-grid">
                    {sponsorsData.map((sponsor) => (
                        <div key={sponsor.id} className="sponsor-card">
                            
                            {/* Logo Area */}
                            <div className="sponsor-logo-wrapper">
                                <img 
                                    src={sponsor.logo} 
                                    alt={`${sponsor.name} Logo`} 
                                    // Fallback if image is missing
                                    onError={(e) => e.target.src='https://via.placeholder.com/200x100/333/fff?text=LOGO'}
                                />
                            </div>

                            {/* Content Area */}
                            <div className="sponsor-content">
                                <h3>{sponsor.name}</h3>
                                <div className="divider"></div>
                                <p>{sponsor.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Sponsers;