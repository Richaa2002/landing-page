import React from "react";
import "./Section4.css";
import { IoIosCheckmark } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";

const Section4 = () => {
  return (
    <div style={{ padding: "60px " }}>
      <div className="Section4-main-container">
        <div className="Section4-left-section">
          <div className="left-section-box">
            <div>
              <div className="left-box-main-heading">Data Save</div>
              <div className="left-box-main-para">Viverra tristique</div>
            </div>
            <div className="left-box-sec-para dollar-icon">
              <span>
                <FaDollarSign />
                82,347
              </span>
            </div>
            <div className="section4-last-para">
              <div className="left-box-last-para">Foclisis</div>
              <div className="left-box-last-para">Sed</div>
              <div className="left-box-last-para">
                <span className="change-color-text">Molestie</span>
              </div>
              <div className="left-box-last-para">Cursus</div>
              <div className="left-box-last-para">Elit</div>
            </div>
          </div>
          <div className="left-section-box2">
            <div className="left-section-box">
              <div>
                <div className="left-box-main-heading">Data Save</div>
                <div className="left-box-main-para">Viverra tristique</div>
              </div>
              <div className="left-box-sec-para dollar-icon">
                <span>
                  <FaDollarSign />
                  82,347
                </span>
              </div>
              <div className="section4-last-para">
                <div className="left-box-last-para">Foclisis</div>
                <div className="left-box-last-para">Sed</div>
                <div className="left-box-last-para">
                  <span className="change-color-text">Molestie</span>
                </div>
                <div className="left-box-last-para">Cursus</div>
                <div className="left-box-last-para">Elit</div>
              </div>
            </div>
            <div className="left-section-box">
              <div>
                <div className="left-box-main-heading">Data Save</div>
                <div className="left-box-main-para">Viverra tristique</div>
              </div>
              <div className="left-box-sec-para dollar-icon">
                <span>
                  <FaDollarSign />
                  82,347
                </span>
              </div>
              <div className="section4-last-para">
                <div className="left-box-last-para">Foclisis</div>
                <div className="left-box-last-para">Sed</div>
                <div className="left-box-last-para">
                  <span className="change-color-text">Molestie</span>
                </div>
                <div className="left-box-last-para">Cursus</div>
                <div className="left-box-last-para">Elit</div>
              </div>
            </div>
          </div>
        </div>
        <div className="section4-right-section">
          <div className="right-section-heading">COLLABORATE</div>
          <div className="right-section-main-heading">
            Describe your
            <br />
            products for all
            <br />
            <span className="Section4-customers">customers</span>
          </div>

          <div className="Section4-right-middle-section">
            <div className="middle-box">
              <div className="middle-box-1stpara">
                <span className="check-icon">
                  <IoIosCheckmark />
                </span>
                Organize your data
              </div>
              <div className="middle-box-2ndstpara">
                {" "}
                <span className="check-icon">
                  <IoIosCheckmark />
                </span>
                Work with any team
              </div>
              <div className="middle-box-3rdpara">
                {" "}
                <span className="check-icon">
                  <IoIosCheckmark />
                </span>
                Business analytics
              </div>
            </div>
            <div className="middle-box">
              <div className="middle-box-4thpara">
                {" "}
                <span className="check-icon">
                  <IoIosCheckmark />
                </span>
                Always in sync
              </div>
              <div className="middle-box-5thtpara">
                {" "}
                <span className="check-icon">
                  <IoIosCheckmark />
                </span>
                Embedded analytics
              </div>
            </div>
          </div>

          <button type="submit" className="get-started-button">
            Get started now
          </button>
        </div>
      </div>
    </div>
  );
};
export default Section4;
