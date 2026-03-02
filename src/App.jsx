import { useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Transformations from "./components/Transformations";
import Sponsers from "./components/Sponsers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import WhatsAppButton from "./components/whatsappbutton";
import "./index.css";

// Inline viewport fix — no separate file needed
const useStableViewport = () => {
  useEffect(() => {
    const setVH = () => {
      const vh = (window.visualViewport?.height ?? window.innerHeight) * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVH();
    window.addEventListener("resize", setVH);
    return () => window.removeEventListener("resize", setVH);
  }, []);
};

function App() {
  useStableViewport();

  return (
    <>
      <WhatsAppButton />
      <Navbar />

      <main className="content">
        <ScrollReveal direction="up" distance="md">
          <About />
        </ScrollReveal>

        <ScrollReveal direction="up" distance="lg" delay={50}>
          <Transformations />
        </ScrollReveal>

        <ScrollReveal direction="up" distance="md" delay={50}>
          <Sponsers />
        </ScrollReveal>

        <ScrollReveal direction="up" distance="md" delay={50}>
          <Contact />
        </ScrollReveal>
      </main>

      <ScrollReveal direction="up" distance="sm">
        <Footer />
      </ScrollReveal>
    </>
  );
}

export default App;