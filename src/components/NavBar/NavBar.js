import "../../App.css";
import "./NavBar.css";

import CartWidget from "./Widgets/CartWidget.js";
import FavoritesWidget from "./Widgets/FavoritesWidget";
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
          <FavoritesWidget />
        </div>
      </div>
    </header>
  );
}

export default NavBar;