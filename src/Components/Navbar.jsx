import React from "react";
import { useState } from "react";
import { routes } from  '../Data/dummy'
import '../assets/styles/navbar.scss';
const Navbar = () => {
  const [bgColor, setBgColor] = useState(false);

  function changeNavbarBackgroundColor() {
    if (window.scrollY >= 70) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  }

  window.addEventListener("scroll", changeNavbarBackgroundColor);

  return (
    <div className={bgColor ? "app__navbar active" : "app__navbar"}>
      <div className="navbar__logo">
        <p>Ventory</p>
      </div>
      <ul className="navbar__routes">
        {routes.map((route, index) => (
          <li key={index} className="route">
            <a href={route.path}> {route.name}</a>
          </li>
        ))}
      </ul>
      <div className="navbar__buttons">
        <button
          className="onebtn"
        >
          Login
        </button>
        <button>
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;