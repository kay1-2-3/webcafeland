import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div id="banner-title">Welcome to Webcafe AI</div>
      <div>Curently looking to secure funding, please consider supporting us.</div>
      <img src="/cup192.png" alt="Webcafe" className="banner-logo" />
    </div>
  );
};

export default Banner;
