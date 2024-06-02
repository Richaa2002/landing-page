import react from "react";
import "./Section9.css";
import { DiVim } from "react-icons/di";

const Section9 = () => {
  return (
    <div className="section9-main-container">
      <div className="section9-container">
        <div className="section9-container-main-heading">
          Ready to get started?
        </div>
        <div className="section9-container-main-para">
          Get your first box of clear contact lenses for just $1
        </div>
        <form className="section9-email-form">
          <div className="section9-input-icon">
            <input
              type="email"
              placeholder="Enter your mail"
              className="email-input"
            />
            <button type="submit" className="section9-submit-button">
              Get started
            </button>
          </div>
        </form>
          <span className="section9-second-para1">
            <span class="section9-checkmark">&#10003;</span>No credit card is
            required
          </span>
          <span className="section9-second-para2">
            <span class="section9-checkmark">&#10003;</span>Get 15 days free
            trail
          </span>
        
      </div>
    </div>
  );
};
export default Section9;
