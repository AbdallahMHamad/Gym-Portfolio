import Navbar from "./components/Navbar";
import About from "./components/About";
import Transformations from "./components/Transformations";
import Sponsers from "./components/Sponsers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />

      <main className="content">

        {/* About — no delay, first section the user sees */}
        <ScrollReveal direction="up" distance="md">
          <About />
        </ScrollReveal>

        {/* Transformations — slight extra travel for drama */}
        <ScrollReveal direction="up" distance="lg" delay={50}>
          <Transformations />
        </ScrollReveal>

        {/* Sponsors — comes up from below, brief delay */}
        <ScrollReveal direction="up" distance="md" delay={50}>
          <Sponsers />
        </ScrollReveal>

        {/* Contact — final section, clean entrance */}
        <ScrollReveal direction="up" distance="md" delay={50}>
          <Contact />
        </ScrollReveal>

      </main>

      {/* Footer fades in last — subtle, no movement needed */}
      <ScrollReveal direction="up" distance="sm">
        <Footer />
      </ScrollReveal>
    </>
  );
}

export default App;