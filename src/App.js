import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemCount currentStock={11} initialQuantity={1} /> 
    </div>
  );
}

export default App;
