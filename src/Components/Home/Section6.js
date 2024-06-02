import React, { useState } from "react";
import "./Section6.css";
import {
  FaAirbnb,
  FaBitcoin,
  FaDropbox,
  FaGithub,
  FaHubspot,
  FaMagento,
  FaSlack,
} from "react-icons/fa";
import ReactSlider from "react-slider";

const Section6 = () => {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div className="Section6-main-container">
      <div className="Section6-container">
        <div className="section6-main-heading">INTEGRATION</div>
        <div className="section6-uppar-boxes">
          <div className="Zapier">Zapier</div>
          <div className="Github">
            <FaGithub />
          </div>
          <div className="Arrow">Arrow</div>
          <div className="slack">
            <FaSlack />
            slack
          </div>
          <div className="Mangento">
            <FaMagento /> Mangento
          </div>
        </div>
        <div className="section6-lower-boxes">
          <div className="otify">otify</div>
          <div className="dropbox">
            <FaDropbox />
            Dropbox
          </div>
          <div className="Hubspot">
            Hubsp
            <FaHubspot />t
          </div>
          <div className="Bitcoin">
            bitcoin
            <FaBitcoin />
          </div>
          <div className="Airbnb">
            <div className="Zapier">
              airbnb
              <FaAirbnb />
            </div>
          </div>
          <div className="empty"></div>
        </div>
        {/* <div className="slider-container">
          <div className="slider-label">Adjust Value</div>
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            value={sliderValue}
            onChange={setSliderValue}
            min={0}
            max={100}
          />
          <div className="slider-value">Value: {sliderValue}</div>
  </div> */}
      </div>
    </div>
  );
};

export default Section6;
