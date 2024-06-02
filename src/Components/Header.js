import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">Sasrico.</div>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#products" className="nav-link">
            products&#9662;
          </a>
        </li>
        <li className="nav-item">
          <a href="#Pricing" className="nav-link">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a href="#Resourses" className="nav-link">
            Resourses&#9662;
          </a>
        </li>
        <li className="nav-item">
          <a href="#Company" className="nav-link">
            Company&#9662;
          </a>
        </li>
        <li className="nav-item">
          <a href="#Contacts" className="nav-link">
            Contacts
          </a>
        </li>
      </ul>
      <span className="Hero-btns">
        <button type="submit">Log in</button>
        <button type="submit" className="gs-button">
          Get started
        </button>
      </span>
    </nav>
  );
};

export default Header;
