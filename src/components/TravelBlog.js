import React from "react";
import "./TravelBlog.css";
//import data from "./TravelData";

const TravelBlog = (props) => {
  return (
    <div className="page2">
      <h1 className="title">{props.title}</h1>
      <div className="img-container">
        <img src={props.img1} alt="" className="img1" />
        <img src={props.img2} alt="" className="img2" />
        <img src={props.img2} alt="" className="img3" />
      </div>
      <p className="description">{props.description}</p>
      <div></div> {/* place for next section */}
      <br />
    </div>
  );
};

export default TravelBlog;
