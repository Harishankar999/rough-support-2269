import React from "react";
import { Link } from "react-router-dom";

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
          <div>
            <img
              src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-time.svg"
              alt=""
            />
            Time Tracking
          </div>
        </Link>
        <Link to="">
          <div>
            <img
              src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-report.svg"
              alt=""
            />
            Reports & Analysis
          </div>
        </Link>
        <Link to="">
          <div>
            <img
              src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-invoice.svg"
              alt=""
            />
            Invoicing & Payments
          </div>
        </Link>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default FeaturesTop;
