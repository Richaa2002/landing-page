import React from "react";
import "./Section7.css";
import { IoIosStar } from "react-icons/io";

const Section7 = () => {
  return (
    <div style={{ padding: " 30px 180px ", color: "black" }}>
      <div className="section7-main-container">
        <div className="rectangular-container7">
          <div className="rect1-div"></div>
        </div>

        <div className="section7-heading">TESTIMONALS</div>
        <div className="section7-main-heading">
          <div className="section7-main-heading1">
            See what our
            <br />
            <span className="section7-main-heading-text">customers </span>had to
            say
          </div>
          <div className="section7-main-heading2">View all</div>
        </div>
        <div className="section7-main-lower-container">
          <div className="section7-lower-container">
            <div className="section7-stars">
              <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />{" "}
              <IoIosStar />
            </div>
            <div className="section7-lower-container-main-para">
              "Our members are so impressed.It's intuitive.
              <br />
              It's clean.It's distraction free.If you're building
              <br /> a community.
            </div>
            <div className="section7-lower-container-sec-para">
              Sabo Masties
            </div>
            <div className="section7-lower-container-third-para">
              Founder @ Rolex
            </div>
          </div>
          <div className="section7-lower-container">
            <div className="section7-stars">
              <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />{" "}
              <IoIosStar />
            </div>
            <div className="section7-lower-container-main-para">
              "Our members are so impressed.It's intuitive.
              <br />
              It's clean.It's distraction free.If you're building
              <br /> a community.
            </div>
            <div className="section7-lower-container-sec-para">
              Sabo Masties
            </div>
            <div className="section7-lower-container-third-para">
              Founder @ Rolex
            </div>
          </div>
          <div className="section7-lower-container">
            <div className="section7-stars">
              <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />{" "}
              <IoIosStar />
            </div>
            <div className="section7-lower-container-main-para">
              "Our members are so impressed.It's intuitive.
              <br />
              It's clean.It's distraction free.If you're building
              <br /> a community.
            </div>
            <div className="section7-lower-container-sec-para">
              Sabo Masties
            </div>
            <div className="section7-lower-container-third-para">
              Founder @ Rolex
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
