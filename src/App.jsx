import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import ItemListContainer from "./Container/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Container/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App ff-primary">
        <NavBar />
        <Hero />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                banner={`Hello, welcome to Lambda Store ⨇ !`}
              />
            }
          />
          <Route
            path="/categories/:cat"
            element={
              <ItemListContainer
                banner={`Hello, welcome to Lambda Store ⨇ !`}
              />
            }
          />
          <Route path="/:category/:id" element={<ItemDetailContainer />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
