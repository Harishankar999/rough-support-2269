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
        <Link>
            <button>dfsdf</button>
        </Link>
        <Link>
            <button>sdfsdf</button>
        </Link>
        <Link>
            <button>dfsdfsd</button>
        </Link>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default FeaturesTop;
