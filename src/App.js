import "./App.module.css";
import NavActions from "./Components/Nav/NavActions/NavActions";
import NavBar from "./Components/Nav/NavBar/NavBar";
import Product1 from "./Components/Main/Item1/Item1";
function App() {
  return (
    <div className="App">
      <div>
        <NavActions />
        <NavBar />
      </div>
      <div>
        <Product1 />
      </div>
    </div>
  );
}

export default App;
