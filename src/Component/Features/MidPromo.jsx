import React from "react";
import "../../Styles/midPromo.scss";
const MidPromo = () => {
  return (
    <div className="promoContainer">
      <div className="promo">
        <div>
          <img
            src="https://www.getharvest.com/hs-fs/hubfs/site-images/features-quote-1.jpg?width=563&name=features-quote-1.jpg"
            alt=""
          />
        </div>
        <div>
          <p>
            Harvest’s easy, clean time tracking allows us to focus on the tough
            engineering problems where we bring value to our clients.
          </p>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default MidPromo;
