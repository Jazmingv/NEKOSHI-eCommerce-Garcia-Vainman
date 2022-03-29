import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="MainPage">
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App;
