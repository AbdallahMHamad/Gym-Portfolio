import Navbar from "./components/Navbar";
import Transformations from "./components/Transformations";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />

      <main className="content">
        <section id="about" className="section dark about-section">
          <div className="about-container">
            
            <div className="about-content">
              <span className="subtitle">ELITE ONLINE COACHING</span>
              
              <h1 className="hero-title">
                Transform Your Body,<br />
                <span className="highlight">Transform Your Life</span>
              </h1>
              
              <p className="description">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem autem minus, saepe alias repellendus accusantium vero. Labore, maiores? Dolore culpa amet molestiae doloribus repellendus est beatae soluta quis aut ad?              </p>

              <div className="cta-group">
                <a href="#plans" className="btn-primary">View Programs</a>
                <a href="#transformations" className="btn-secondary">See Results</a>
              </div>

              <div className="stats-grid">
                <div className="stat-box">
                  <h3>500+</h3>
                  <p>Clients Transformed</p>
                </div>
                <div className="stat-box">
                  <h3>10+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-box">
                  <h3>15+</h3>
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

<Transformations />


        <section id="plans" className="section dark">
          <h1>Plans</h1>
        </section>

        <section id="contact" className="section gray">
          <h1>Contact</h1>
        </section>
      </main>
    </>
  );
}

export default App;