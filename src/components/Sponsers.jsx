import React from "react";
import "./Sponsers.css";
const sponsorsData = [
    {
        id: 1,
        name: "Myprotein ME",
        description: "Premium supplements fueling our athletes with the purest whey isolate and pre-workout formulas.",
        logo: "/images_resources/Logos/Myproteinme.jpg", 

    },
    {
        id: 2,
        name: "Squatwolf",
        description: "Clothing brand for athletes and fitness enthusiasts based in Dubai.",
        logo: "/images_resources/Logos/Squatwolf.jpg", 

    },
    {
        id: 3,
        name: "Ghithaa - غذاء",
        description: "Health food for athletes and fitness enthusiasts.",
        logo: "/images_resources/Logos/ghithaa_sa.jpg", 
    }
];

function Sponsers() {
    return (
        <section id="sponsers" className="section dark sponsers-section">
            <div className="section-container">
                
                {/* Header */}
                <div className="section-header">
                    <span className="subtitle">Partnerships</span>
                    <h2 className="section-title">Our Trusted <span className="highlight">Sponsors</span></h2>
                    <p className="section-description">Collaborating with industry leaders to bring you the best results.</p>
                </div>

                {/* New Promo Code Box */}
                <div className="promo-banner">
                    <div className="promo-content">
                        <span className="promo-label">Special Offer</span>
                        <p>Use code <span className="promo-code">MS99</span> for a <strong>10% Discount</strong> on all the products of our sponsors</p>
                    </div>
                </div>

                {/* Grid */}
                <div className="sponsers-grid">
                    {sponsorsData.map((sponsor) => (
                        <div key={sponsor.id} className="sponsor-card">
                            <div className="sponsor-logo-wrapper">
                                <img 
                                    src={sponsor.logo} 
                                    alt={`${sponsor.name} Logo`} 
                                    onError={(e) => e.target.src='https://via.placeholder.com/200x100/333/fff?text=LOGO'}
                                />
                            </div>

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