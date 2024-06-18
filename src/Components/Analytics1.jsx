import React from "react";
import "../assets/styles/analytics1.scss";
import Partner from "../Images/Partner.png";
const Analytics1 = () => {
  return (
    <div className="app__analytics">
      <div className="analytics__container">
        <div className="left__analytics">
          <div className="left__text">
            <h1>Partner's App</h1>
            <p>Empowering Partners for Success.</p>
            <p>
              Explore the future of business management with a sneak peek into
              our revolutionary dashboard. Tailored for our partners, this
              intuitive interface merges cutting-edge technology with
              user-centric design, offering a glimpse into the seamless
              efficiency and powerful insights that await in the Ventory
              ecosystem. Elevate your business experience – the future is now,
              and it's at your fingertips.
            </p>
          </div>
        </div>
        <div className="right__analytics">
          <img src={Partner} alt="" draggable={false} />
        </div>
      </div>
    </div>
  );
};

export default Analytics1;
