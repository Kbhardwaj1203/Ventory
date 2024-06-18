import React from "react";
import { analytics } from '../Data/dummy'
import Mobile from '../Images/Mobile.png'
import '../assets/styles/analytics1.scss'

const Analytics2 = () => {
  return (
    <div className="app__analytics">
      <div className="analytics__container">
        <div className="left__analytics">
          <div className="left__text">
            <h1>Customer's App</h1>
            <p>
              Seamless Experience, Stunning UI: Discover Ventory's Customer App
            </p>
            <p>
              Empower customers with our mobile web app – your gateway to
              seamless transactions and personalized journeys. Designed for
              partner's end users, this innovative interface redefines
              engagement and elevates convenience.
            </p>
          </div>
          <div className="left__analytics__container">
            {analytics.map((analytic, index) => (
              <div className="analytic__container" key={index}>
                <div className="analytics__icon">{analytic.desc}</div>
                <p>{analytic.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div  className="right__analytics">
          <img src={Mobile} alt=""  draggable={false}/>
        </div>
      </div>
    </div>
  );
};

export default Analytics2;
