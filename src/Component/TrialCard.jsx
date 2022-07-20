import React from "react";
import "../Styles/trialCard.scss";

const TrialCard = () => {
  return (
    <div className="trialContainer">
      <div className="trialText">
        <h4>Help your team spend time wisely</h4>
        <p>
          Harvest time tracking makes it easy to capture time, gain insights
          from past projects, and get paid for your work.
        </p>
      </div>
      <div className="btnContainer">
        <button>Try Harvest Free</button>
        <p>Free 30-day trial. No credit card required.</p>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default TrialCard;
