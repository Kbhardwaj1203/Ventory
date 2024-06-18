import React from "react";
import '../assets/styles/footer.scss'
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="app__footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="logo">
            <p>Ventory</p>
          </div>
          <div className="footer__cta">
            <p>Ready to get Started?</p>
            <button>Get Started</button>
          </div>
        </div>
        <div className="footer__middle">
          <div className="left__middle">
            <p>Subscribe to our Newsletter</p>
            <div className="input__container">
              <input type="text" placeholder="Email address" />
              <button>Go</button>
            </div>
          </div>
          <p className="copyright">
            &#169; 2024 Grig Technologies Pvt Ltd
          </p>
        </div>
        <div className="footer__bottom">
          <div className="left__bottom">
            <ul>
              <li>Terms & conditions</li>
              <li>Privacy Policy</li>
              <li>Return & Refund Policy</li>
              <li>Plans & Pricing</li>
            </ul>
          </div>
          <div className="right__bottom">
            <ul>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <BsTwitter />
              </li>
              <li>
                <BsInstagram />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;