import React from "react";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "../../../App.css";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  const [activeMenu, setactiveMenu] = useState(false);
  const [activeSlide, setactiveSlide] = useState(false);

  const handleToggle = (event) => {
    event.stopPropagation();
    setactiveMenu(!activeMenu);
    setactiveSlide(!activeSlide);
  };

  useEffect(() => {
    window.addEventListener("click", () => {
      if (activeMenu === true && activeSlide === true) {
        setactiveMenu(false);
        setactiveSlide(false);
      }
    });
  }, [setactiveMenu, setactiveSlide, activeMenu, activeSlide]);

  return (
    <div>
      <button
        className={activeMenu ? "menu-hamburger is-active" : "menu-hamburger"}
        onClick={handleToggle}
      >
        <span className="menu-span"></span>
        <span className="menu-span"></span>
        <span className="menu-span"></span>
      </button>
      <div className={activeMenu ? "slide is-active" : "slide"}>
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
      </div>
    </div>
  );
};

export default HamburgerMenu;
