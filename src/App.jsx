import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import ItemListContainer from "./Container/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Container/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Container/Cart/Cart";
import CartContextProvider from "./context/CartContext";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App ff-primary">
          <Banner
            message={`Welcome to LAMBDA store! Free delivery from 40 EUR - Returns extended to 60 days`}
          />
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Hero />
                  <ItemListContainer />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/category/:cat"
              element={
                <div>
                  <Hero />
                  <ItemListContainer />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/:category/:id"
              element={
                <div>
                  <ItemDetailContainer />
                  <Footer />
                </div>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
