import React from "react";
import "./Section8.css";
import pic1Img from "../../Images/pic1.webp";
import pic2Img from "../../Images/pic2.jpeg";
import pic3Img from "../../Images/pic3.webp";

const Section8 = () => {
  return (
    <div className="section8-main-container">
      <div className="section8-container">
        <div className="section8-upper-container">
          <div className="section8-upper-main-heading">Dasboard</div>
          <div className="section8-upper-sec-heading">
            <div className="section8-upper-sec-para1">Our latest updates</div>
            <div className="section8-upper-sec-para2">View all</div>
          </div>
        </div>
        <div className="section8-lower-container">
          <div className="section8-lower-cards">
            <img className="section8-img" src={pic1Img} alt="pic" />
            <div className="section8-lower-card-heading">
              <div className="section-lower-card-heading1">CLOUD</div>
              <div className="section-lower-card-heading2">
                APP DEVELOPMENT{" "}
              </div>
            </div>
            <div className="section8-lower-card-para">
              15+ Most Effective and Proven
              <br />
              Time Management Techniques
            </div>
            <div className="section8-lower-card-para1">
              October 27,2021| 4 min read
            </div>
          </div>
          <div className="section8-lower-cards">
            <img className="section8-img" src={pic2Img} alt="pic" />
            <div className="section8-lower-card-heading">
              <div className="section-lower-card-heading1">SERVER</div>
            </div>
            <div className="section8-lower-card-para">
              15+ Most Effective and Proven
              <br />
              Time Management Techniques
            </div>
            <div className="section8-lower-card-para1">
              October 27,2021| 4 min read
            </div>
          </div>
          <div className="section8-lower-cards">
            <img className="section8-img" src={pic3Img} alt="pic" />
            <div className="section8-lower-card-heading">
              <div className="section-lower-card-heading1">BUSINESS</div>
            </div>
            <div className="section8-lower-card-para">
              15+ Most Effective and Proven
              <br />
              Time Management Techniques
            </div>
            <div className="section8-lower-card-para1">
              October 27,2021| 4 min read
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
