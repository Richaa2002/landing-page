import React from "react";
import "./Section1.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import { BiColor } from "react-icons/bi";

const Section1 = () => {
  return (
    <div style={{padding:"60px "}}>
      <div className="Section1-container">
        <div className="container-1">
          <div className="left-container">
            Trusted by 20,000+<br></br>customers across the world
            <p className="section1-link">
              <a href="https://example.com">WATCH THEIR STORY</a>
            </p>
          </div>

          <div className="right-container">
            <div className="brand askimat">Askimat</div>
            <div className="brand nutrilix">Nutrilix</div>
            <div className="brand nutrilix">Nutrilix</div>
            <div className="brand upglam">Upglam</div>
            <div className="brand investify">Investify</div>
          </div>
        </div>

        <div className="container-2">
          <div className="left-container-lower">
            Donec bibendum, dui id <br></br>ultrices molestie, neque neque
            <br></br>porta felis,idviverra ligula<br></br>justo interdum mi.
          </div>

          <div className="right-container-lower">
            <div className="card1">
              <div className="review1">4.8</div>
              <div className="review-star" style={{ color: "yellow" }}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="rater_name">Trustpilot</div>
            </div>
            <div className="card2">
              <div className="review2">4.5</div>
              <div className="review-star" style={{ color: "yellow" }}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="rater_name">Capterra</div>
            </div>
            <div className="card3">
              <div className="review3">4.9</div>
              <div className="review-star" style={{ color: "yellow" }}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="rater_name">Apple store</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
