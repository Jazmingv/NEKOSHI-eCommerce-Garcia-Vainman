import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="container">
      <div className="info">
        <div className="info-container">
          <h1>404</h1>
          <h2>
            Sorry, we cannot find the requested page.
            <br />
            <span>You are lost!</span>
          </h2>
          <button className="normal">
          <Link to={"/"}>Go to home page</Link>
          </button>
        </div>
      </div>
      <div className="container-img">
        <img src={require("../../assets/photo.jpg")} />
      </div>
    </div>
  );
};

export default ErrorPage;
