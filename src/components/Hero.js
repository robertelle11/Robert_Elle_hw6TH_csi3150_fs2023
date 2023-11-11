import React from "react";
//import "./TravelBlog.css";
import img from "../assets/HeroSection-bg-image.jpg";

const Hero = () => {
  return (
    <div>
      <div className="Hero">
        <img src={img} alt="" className="Hero-Img" />

        <h1 className="Head">Best Travel Destinations</h1>
        <h2 className="Sub-Head">[3] of the best places to travel</h2>
      </div>
    </div>
  );
};

export default Hero;
