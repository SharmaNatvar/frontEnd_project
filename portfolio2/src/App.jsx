import "./App.css";
import Navbar from "./Component/Navbar";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Skill from "./pages/Skill";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Skill />
        <Project/>
        <Experience />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
