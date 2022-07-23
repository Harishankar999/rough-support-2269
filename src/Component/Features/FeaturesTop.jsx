import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/featuresTop.scss";

const FeaturesTop = () => {
  return (
    <div className="featuresContainer">
      <div className="featuresText">
        <h4>Everything your team needs to keep ticking</h4>
        <p>
          Intuitive time tracking and powerful insights that help your team
          thrive.
        </p>
      </div>
      <div className="linksContainer">
        <Link to="">
          <div className="featuresLogo" style={{ marginRight: "10px" }}>
            <div className="logo">
              <img
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-time.svg"
                alt=""
              />
              <p>Time Tracking</p>
            </div>
            <div>
              <img
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/arrow-down-24.svg"
                alt=""
              />
            </div>
          </div>
        </Link>
        <Link to="">
          <div className="featuresLogo" style={{ marginRight: "10px" }}>
            <div className="logo">
              <img
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-report.svg"
                alt=""
              />
              <p>Reports & Analysis</p>
            </div>
            <div>
              <img
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/arrow-down-24.svg"
                alt=""
              />
            </div>
          </div>
        </Link>
        <Link to="">
          <div className="featuresLogo">
            <div className="logo">
              <img
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-invoice.svg"
                alt=""
              />
              <p>Invoicing & Payments</p>
            </div>
            <div>
              <img
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/arrow-down-24.svg"
                alt=""
              />
            </div>
          </div>
        </Link>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default FeaturesTop;
