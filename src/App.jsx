import Navbar from "./components/Navbar";
import About from "./components/About";
import Transformations from "./components/Transformations";
import Sponsers from "./components/Sponsers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />

      <main className="content">
      <About />

<Transformations />


        <Sponsers />


<Contact />

      </main>
      <Footer />
    </>
  );
}

export default App;