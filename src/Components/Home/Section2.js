import React from "react";
import "./Section2.css";
import { CiSettings } from "react-icons/ci";
import { GoGraph, GoPersonAdd } from "react-icons/go";
import { TbReportSearch } from "react-icons/tb";

const Section2 = () => {
  return (
    <section className="section2-container">
      <header className="section2-heading">Features</header>
      <div className="section2-main-heading">
        <span className="section2-main-heading-start">Paying Off</span> and
        adjust
      </div>
      <div className="section2-main-heading"> your strategy.</div>

      <div className="section2-boxes">
        <div className="box">
          <div className="icon">
            <CiSettings />
          </div>
          <div className="box-main-para">Analyze your data</div>
          <div className="box-second-para">
            Resources management is the process of pre-planning.
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <GoGraph />
          </div>
          <div className="box-main-para">Embedded </div>
          <div className="box-main-para">analytics </div>
          <div className="box-second-para">
            Resource management is the process of pre-planning.
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <GoPersonAdd />
          </div>
          <div className="box-main-para">Collaborate </div>
          <div className="box-main-para">securely </div>
          <div className="box-second-para">
            Resource management is the process of pre-planning.
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <TbReportSearch />
          </div>
          <div className="box-main-para">Unified reporting</div>
          <div className="box-second-para">
            Resource management is the process of pre-planning.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
