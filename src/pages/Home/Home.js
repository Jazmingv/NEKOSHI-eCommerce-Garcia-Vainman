import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";
import "./Home.css";

const Home = () => {
  return (
    <div className="MainPage">
      <Link to={"/products"}>
        <div className="focus">
          <div className="focus-text">
            <h2>NEW PRODUCTS!!</h2>
            <p>See our new Kimetsu no Yaiba T-Shirts!</p>
          </div>
          <img src={require("../../assets/banner.jpg")} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default Home;
