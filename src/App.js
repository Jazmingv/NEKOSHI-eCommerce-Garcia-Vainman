import "./App.css";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetails/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
