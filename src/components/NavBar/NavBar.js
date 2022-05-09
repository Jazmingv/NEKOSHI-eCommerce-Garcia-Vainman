import "../../App.css";
import "./NavBar.css";

import CartWidget from "./CartWidget/CartWidget.js";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <header>
      <div className="nav-wrapper">
        <HamburgerMenu />
        <div className="container-logo">
          <Link to="/">
            <h1>NEKOSHI</h1>
          </Link>
        </div>
        <div className="menu-icons">
          <CartWidget />
        </div>
      </div>
    </header>
  );
}

export default NavBar;