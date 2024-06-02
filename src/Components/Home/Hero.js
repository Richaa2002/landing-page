import React from "react";
import "./Hero.css";
import girlImg from "../../Images/girl.png";
import { AiOutlineMail } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="Hero-section">
      <div>
        <div className="Hero-heading">
          <span className="Hero-fpara">Sasrico</span> makes it
        </div>
        <div className="Hero-heading">easy to run your </div>
        <div className="Hero-heading">business.</div>
        <div className="Hero-main-paragraph">
          There is a time management facility through this modern software.
        </div>

        <div className="Hero-main-paragraph">
          Effective time management allows you to achieve great results.
        </div>
        <div className="Hero-form">
          <form className="email-form">
            <div className="input-icon">
               {/* <div className="email-icon"> 
                <AiOutlineMail />
              </div> */}
              <input
                type="email"
                placeholder="Enter your mail"
                className="email-input"
              />
              <button type="submit" className="submit-button">
                Get started
              </button>
            </div>
          </form>
        </div>
        <div className="hero-second-para">
          <span className="hero-second-para1">
            <span class="checkmark">&#10003;</span>No credit card is required
          </span>
          <span className="hero-second-para2">
            <span class="checkmark">&#10003;</span>Get 15 days free trail
          </span>
        </div>
      </div>
      <div className="img-container">
        <div className="Hero-img-bg">
          <img className="Hero-img" src={girlImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
