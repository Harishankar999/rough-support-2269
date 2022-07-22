import React from "react";
import "../../Styles/midFeatures.scss";

const MidFeature = ({ items }) => {
  console.log(items);
  return (
    <div className="featuresMid">
      <div className="featuresFirst">
        <div>
          <h2>{items.heading}</h2>
          <p>{items.para}</p>
          <button>Start your free trial</button>
        </div>
        <div>
          <img src={items.img} alt="" />
        </div>
      </div>
      <div className="featuresSecond">
      {items.card.map((i) => {
        return (
          
            <div className="firstData">
              <div>
                <img src={i.cardImg} alt="" />
                <h3>{i.cardHeading}</h3>
              </div>
              <div>
                <p>{i.cardPara}</p>
              </div>
            </div>
          
        );
      })}
      </div>

      <div className="line"></div>
    </div>
  );
};

export default MidFeature;
