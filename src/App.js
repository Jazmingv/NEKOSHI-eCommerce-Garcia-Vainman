//react & react-router-dom dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

//css sheets
import "./App.css";

//components
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetails/ItemDetailContainer";

//pages
import Home from "./pages/Home/Home";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Cart from "./pages/Cart";

//contexts
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <div className="content-wrap">
            <NavBar />
            <div className="main-wrap">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products/:id" element={<ItemDetailContainer />} />
                <Route path="/error" element={<ErrorPage />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
