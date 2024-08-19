import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/screens/Home";
import ProductDetails from "./components/screens/ProductDetails";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CatogeriesForMen from "./components/screens/CatogoriesForMen";
import CategoriesForWomen from "./components/screens/CategoriesForWomen";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/men" element={<CatogeriesForMen />} />
          <Route path="/women" element={<CategoriesForWomen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
