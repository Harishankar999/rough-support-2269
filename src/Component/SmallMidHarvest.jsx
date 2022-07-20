import React from "react";
import "../Styles/smallMidHarvest.scss";

const SmallMidHarvest = ({ items }) => {
  return items.id % 2 !== 0 ? (
    <div className="mainMidContainer">
      <div className="contents">
        <div className="leftMid">
          <h4>{items.heading}</h4>
          <p>{items.para}</p>
          {items.points.map((i) => {
            return <p>{i.line}</p>;
          })}
          <button>Browse features</button>
        </div>
        <div className="rightMid">
          <div className="imgContainer">
            <img src={items.img} alt="" />
          </div>
          <div className="quoteContainer">
            <p>
              <em>"{items.quote}"</em>
            </p>
            <p>{items.quote_by}</p>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  ) : (
    <div className="mainMidContainer">
      <div className="contents">
        <div className="rightMid">
          <div className="imgContainer">
            <img src={items.img} alt="" />
          </div>
          <div className="quoteContainer">
            <p>
              <em>"{items.quote}"</em>
            </p>
            <p>{items.quote_by}</p>
          </div>
        </div>
        <div className="leftMid">
          <h4>{items.heading}</h4>
          <p>{items.para}</p>
          {items.points.map((i) => {
            return <p>{i.line}</p>;
          })}
          <button>Browse features</button>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default SmallMidHarvest;
