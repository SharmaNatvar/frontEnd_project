import { Route, Routes } from "react-router-dom";
import "./app.scss";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Signin from "./Component/auth/Signin";
import NotFound from "./Pages/NotFound";
import Employes from "./Pages/Employes";
import Product from "./Pages/Product";
import AddForm from "./Component/AddForm";
import AddProduct from "./Component/AddProduct";
import ProdectRouter from "./Component/auth/ProdectRouter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/" element={<ProdectRouter />}>
          <Route path="/home" element={<Home />} />
          <Route path="/employ" element={<Employes />} />
          <Route path="/product" element={<Product />} />
          <Route path="/addfrom/:id" element={<AddForm />} />
          <Route path="/addproduct/:id" element={<AddProduct />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
