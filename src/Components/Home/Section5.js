import React from "react";
import "./Section5.css";
import { CiSearch } from "react-icons/ci";
import {
  MdKeyboardDoubleArrowDown,
  MdOutlineKeyboardDoubleArrowUp,
} from "react-icons/md";

const Section5 = () => {
  return (
    <div className="section5-main-container">
      <div className="section5-heading">Dashboard</div>
      <div>
        <div className="section5-main-heading">
          Create a social media <br />
          <span className="section5-text-change">strategy</span> that works.
        </div>
      </div>
      <div>
        <div className="section5-black-container"></div>
        <div className="section5-white-container">
          <div className="section5-left-container">
            <div className="left-container-heading">Saasco</div>
            <div className="left1"></div>
            <div className="left1"></div>
            <div className="left1"></div>
            <div className="left1"></div>
            <div className="left1"></div>
          </div>
          {/* right container */}
          <div className="-section5-right-container">
            <div className="right-container-main-heading">
              <div className="main-heading-name">Hi,Smith</div>
              <div className="section5-search-icon">
                <CiSearch />
                <span className="Search here">Search here</span>
              </div>
            </div>

            {/* right uppar section */}
            <div className="section5-right-uppar-section">
              <div className="section5-right-uppar-box">
                <div className="section5-arrow" style={{ color: " #FC7C79" }}>
                  <MdKeyboardDoubleArrowDown />{" "}
                  <span style={{ color: "black" }}>10.9K</span>{" "}
                  <span className="uppar-section-percent">-7.3%</span>
                </div>
                <div className="section5-right-uppar-box-para">
                  Compared from last Week
                </div>
              </div>
              <div className="section5-right-uppar-box">
                <div className="section5-arrow" style={{ color: "#75B662" }}>
                  <MdOutlineKeyboardDoubleArrowUp />{" "}
                  <span style={{ color: "black" }}>$2.1M</span>{" "}
                  <span
                    className="uppar-section-percent"
                    style={{ color: "#75B662" }}
                  >
                    +2.4%
                  </span>
                </div>
                <div className="section5-right-uppar-box-para">
                  Compared from last Week
                </div>
              </div>
              <div className="section5-right-uppar-box">
                <div className="section5-arrow" style={{ color: "#FC7C79" }}>
                  <MdKeyboardDoubleArrowDown />{" "}
                  <span style={{ color: "black" }}>$982K</span>{" "}
                  <span className="uppar-section-percent">-9.7%</span>
                </div>
                <div className="section5-right-uppar-box-para">
                  Compared from last Week
                </div>
              </div>
              <div className="section5-right-uppar-box">
                <div className="section5-arrow" style={{ color: "#75B662" }}>
                  <MdOutlineKeyboardDoubleArrowUp />{" "}
                  <span style={{ color: "black" }}>120.99K</span>{" "}
                  <span
                    className="uppar-section-percent"
                    style={{ color: "#75B662" }}
                  >
                    +12%
                  </span>
                </div>
                <div className="section5-right-uppar-box-para">
                  Compared from last Week
                </div>
              </div>
            </div>
            {/* right lower-section */}
            <div className="section5-right-lower-section">
              <div className="section5-right-lower-box">
                <div className="section5-right-lower-heading">
                  <div className="right-lower-main-heading">
                    Sales Figures
                  </div>
                  <div className="section5-right-lower-heading1">
                    <div className="right-lower-main-heading">Advertisment</div>
                    <div className="right-lower-main-heading">Marketing</div>
                  </div>
                </div>
                <div className="right-lower-second -para">
                  <div>12k</div>
                  <div>10k</div>
                  <div>8k</div>
                  <div>6k</div>
                  <div>4k</div>
                  <div>2k</div>
                </div>
                <div className="right-lower-footer">
                  <div>9 am</div>
                  <div>10 am</div>
                  <div>11 am</div>
                  <div className="right-lower-mid-timing">12 am</div>
                  <div>1 pm</div>
                  <div>2 pm</div>
                  <div>3 pm</div>
                </div>
              </div>

              <div className="section5-right-lower-box1">
                <div className="right-lower-box1-heading">Sources</div>
                <div className="right-lower-box1-para">
                  <div>66.324k</div>
                  <div>35.244k</div>
                  <div>12.993k</div>
                  <div>8.293k</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
