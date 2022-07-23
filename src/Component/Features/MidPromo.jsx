import React from "react";
import "../../Styles/midPromo.scss";
const MidPromo = ({promo, img}) => {
  return (
    <div className="promoContainer">
      <div className="promo">
        <div>
          <img
            src={img}
            alt=""
          />
        </div>
        <div>
          <p>
            {promo}
          </p>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default MidPromo;
