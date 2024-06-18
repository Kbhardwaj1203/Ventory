import React from "react";
import Home from "../Images/Home.png";
import "../assets/styles/HomeContainer.scss";
const HomeContainer = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <h1 className="sub-title">Why Ventory?</h1>
          <p className="title">Because we care about your business.</p>
          <p className="description">
            At Ventory, we go beyond conventional inventory management, crafting
            an experience that transcends expectations. Embrace a future where
            precision, innovation, and efficiency converge to propel your
            business to new heights with Ventory's advanced solutions.
          </p>
          <button>Sign Up</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={Home} alt="home image" draggable={false} />
          </div>
          {/* <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default HomeContainer;
