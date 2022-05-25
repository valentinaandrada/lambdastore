import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import ItemListContainer from "./Container/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Container/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Container/Cart/Cart";
import CartContextProvider from "./context/CartContext";

function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App ff-primary">
          <NavBar />
          {/* <Hero /> */}
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Hero />
                  <ItemListContainer
                    banner={`Hello, welcome to Lambda Store ⨇ !`}
                  />
                </div>
              }
            />
            <Route
              path="/category/:cat"
              element={
                <div>
                  <Hero />
                  <ItemListContainer
                    banner={`Hello, welcome to Lambda Store ⨇ !`}
                  />
                </div>
              }
            />
            <Route path="/:category/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
