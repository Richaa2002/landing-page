import React from "react";
import "./Footer.css";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="footer-section">
        <div className="footer-section-cards">
          <div className="footer-card">
            <div className="footer-card-heading">Product</div>
            <div className="footer-card-para">Email Row</div>
            <div className="footer-card-para">Free Tools</div>
            <div className="footer-card-para">Agents</div>
            <div className="footer-card-para">Blog</div>
          </div>
        </div>
        <div className="footer-section-cards">
          <div className="footer-card">
            <div className="footer-card-heading">Resources</div>
            <div className="footer-card-para">our Agents</div>
            <div className="footer-card-para">Member Stories</div>
            <div className="footer-card-para">Video</div>
            <div className="footer-card-para">Free trial</div>
          </div>
        </div>
        <div className="footer-section-cards">
          <div className="footer-card">
            <div className="footer-card-heading">Company</div>
            <div className="footer-card-para">Patnerships</div>
            <div className="footer-card-para">Terms of use</div>
            <div className="footer-card-para">Privacy</div>
            <div className="footer-card-para">Sitemap</div>
          </div>
        </div>
        <div className="footer-section-cards">
          <div className="footer-card">
            <div className="footer-card-heading">Get in touch</div>
            <div className="footer-card-para1">
              You'll find your next Marketing Value
              <br />
              you prefer.
            </div>
            <div className="footer-icons">
              <span className="footer-icon">
                <FaFacebookF />
              </span>{" "}
              <span className="footer-icon">
                <FaTwitter />
              </span>{" "}
              <span className="footer-icon">
                <FaLinkedinIn />
              </span>
            </div>
          </div>
        </div>

        <div className="footer-section-last-para">
          <div className="footer-logo">Sasrico.</div>
          <div className="footer-copyright">
            Copyright2024.com,All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
