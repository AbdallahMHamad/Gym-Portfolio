import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />

      <main className="content">
        <section id="about" className="section dark">
          <h1>About Section</h1>
        </section>

        <section id="transformations" className="section gray">
          <h1>Transformations</h1>
        </section>

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
