import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="MainPage">
        <ItemListContainer />
        <ItemDetailContainer />
      </div>
    </div>
  );
}

export default App;
