import { Route, Routes } from "react-router-dom";
import "./app.scss";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Signup from "./Component/auth/Signup";
import Signin from "./Component/auth/Signin";
import NotFound from "./Pages/NotFound";
import Employes from "./Pages/Employes";
import Product from "./Pages/Product";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/employ" element={<Employes />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
