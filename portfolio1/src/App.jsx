import style from "./App.module.css"; 
import Navbar from "./Component/Navbar";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Project from "./Pages/Project";


function App() {

  return (
    <>
     <div className={style.App}>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Project/>
      <Footer/>
     </div>
    </>
  )
}

export default App
