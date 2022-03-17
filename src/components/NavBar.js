import "../App.css";
//import {}

function NavBar() {
  return (
      <header className="main-header">
        <div className="container-logo">
          <img src="logo192.png" className="img-header" alt="logo" />
        </div>
        <ul className="navbar-links">
          <li>
            <button className="navbar-btn">Home</button>
          </li>
          <li>
            <button className="navbar-btn">Productos</button>
          </li>
          <li>
            <button className="navbar-btn">Nosotros</button>
          </li>
          <li>
            <button className="navbar-btn">Contacto</button>
          </li>
        </ul>
      </header>
  );
}

export default NavBar;
