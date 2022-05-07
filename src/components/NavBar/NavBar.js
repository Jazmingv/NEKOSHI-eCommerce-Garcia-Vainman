import "../../App.css";
import "./NavBar.css";

import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [activeMenu, setactiveMenu] = useState(false);

  const handleToggle = () => {
    setactiveMenu(!activeMenu);
  };

  return (
    <header>
      <div className="nav-wrapper">
        <div className="container-logo">
          <Link to="/">
            <h1>NEKOSHI</h1>
          </Link>
        </div>
        <ul className="navbar-links">
          <li>
            <button className="navbar-btn is-active">
              <Link to={"/"}>Home</Link>
            </button>
          </li>
          <li>
            <button className="navbar-btn">
              <Link to={"/products"}>Productos</Link>
            </button>
          </li>
          <li>
            <button className="navbar-btn">
              <Link to={"/aboutus"}>Nosotros</Link>
            </button>
          </li>
          <li>
            <button className="navbar-btn">
              <Link to={"/contact"}>Contacto</Link>
            </button>
          </li>
        </ul>
        <div className="menu-icons">
          <CartWidget />
          <button className={activeMenu ? "menu-hamburger is-active" : "menu-hamburger"}
          onClick={handleToggle}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;