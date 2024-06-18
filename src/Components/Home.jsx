import React from "react";
import '../assets/styles/home.scss'
import { TiTick } from "react-icons/ti";
const Home = () => {
  return (
    
    <div className="app__home">  
         <div className="home__text">
            <h1>Make Your Business</h1>
            <h1>More Powerful</h1>
         </div>
      <div className="ticks__container">
        <p>
          <span>
            <TiTick />
          </span>
          Lifetime Support
        </p>
        <p>
          <span>
            <TiTick />
          </span>
          Increased Growth
        </p>
      </div>
      <div className="input__container">
        <input type="text" placeholder="Input your email" />
        <button>Verify</button>
      </div>
    </div>
  );
};

export default Home;
