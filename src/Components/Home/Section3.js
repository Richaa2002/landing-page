import React from "react";
import "./Section3.css";
import manImg from "../../Images/man.png";
import { CiSettings } from "react-icons/ci";

const Section3 = () => {
  return (
    <div style={{ padding: "60px " }}>
      <div className="section3-container">
        <div className="rectangular-container">
          <div className="rect-div"></div>
        </div>
        <div className="section3-left-container">
          <div className="left-upper-container">
            <div className="left-upper-container-heading">
              POWERFUL ANALYTICS
            </div>
            <div className="left-upper-container-main-heading">
              Scale
              <span className="left-upper-container-main-heading-word">
                {" "}
                faster{" "}
              </span>
              then
            </div>
            <div className="left-upper-container-main-heading">
              ever before with
            </div>
            <div className="left-upper-container-main-heading">Sassco</div>
          </div>
          <div className="left-lower-container">
            <div className="section3-box">
              <div className="setting1-icon">
                <CiSettings className="icon-1" />
                <div className="box-main-para-1">Powerful dashboard</div>
                <div className="box-sec-para-1">Combine multiple reports</div>
                <div className="box-sec-para-1">into a single dashboard</div>
              </div>
            </div>
            <div className="section-3box">
              <div className="setting1-icon">
                <CiSettings className="icon-1" />
                <div className="box-main-para-1">Always in Sync</div>
                <div className="box-sec-para-1">Combine multiple reports</div>
                <div className="box-sec-para-1">into a single dashboard</div>
              </div>
            </div>
          </div>
        </div>
        <div className="section3-right-container">
          {/* <div className="section3-img-bg"> */}
          <img className="section3-img" src={manImg} alt="Man Illustration" />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Section3;
