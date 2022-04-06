import "../App.css";
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";
//import {}

function NavBar() {
  return (
      <header className="main-header">
        <div className="container-logo">
          <img src="logo192.png" className="img-header" alt="logo" />
        </div>
        <ul className="navbar-links">
          <li>
            <button className="navbar-btn">
              <Link to={'/'}>Home</Link>
              </button>
          </li>
          <li>
            <button className="navbar-btn">
            <Link to={'/products'}>Productos</Link>
              </button>
          </li>
          <li>
            <button className="navbar-btn">
            <Link to={'/aboutus'}>Nosotros</Link>
              </button>
          </li>
          <li>
            <button className="navbar-btn">
            <Link to={'/'}>Contacto</Link>
            </button>
          </li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </header>
  );
}

export default NavBar;
