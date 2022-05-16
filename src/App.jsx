import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import ItemListContainer from "./Container/ItemListContainer/ItemListContainer";

function App() {
  return (

      <div className="App ff-primary">
        <NavBar />
        <Hero />
              <ItemListContainer
                banner={`Hello, welcome to Lambda Store ⨇ !`}
              />
      </div>
  );
}

export default App;
