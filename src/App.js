import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer>
        <br />
        <h1>Welcome!</h1>
      </ItemListContainer>    
    </div>
  );
}

export default App;
