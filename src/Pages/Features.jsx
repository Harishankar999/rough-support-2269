import React from "react";
import FeaturesTop from "../Component/Features/FeaturesTop";
import MidFeature from "../Component/Features/MidFeature";
import data from "../Component/Features/midData.json";
import MidPromo from "../Component/Features/MidPromo";
import Footer from "../Component/Footer";

const Features = () => {
  const mid = data.mid;
  const mid1 = data.mid1;
  const mid2 = data.mid2;
  return (
    <div>
      <FeaturesTop />
      {mid.map((i) => {
        return <MidFeature key={i.id} items={{ ...i }} />;
      })}
      <MidPromo
        img={
          "https://www.getharvest.com/hs-fs/hubfs/site-images/features-quote-1.jpg?width=563&name=features-quote-1.jpg"
        }
        promo="Harvest’s easy, clean time tracking allows us to focus on the tough
            engineering problems where we bring value to our clients."
      />
      {mid1.map((i) => {
        return <MidFeature key={i.id} items={{ ...i }} />;
      })}

      <MidPromo
        img={
          "https://www.getharvest.com/hs-fs/hubfs/site-images/features-quote-2.jpg?width=563&name=features-quote-2.jpg"
        }
        promo="We really focus on work-life balance in remote work… Time tracking reveals if somebody is overburdened and that becomes an immediate conversation."
      />

      {mid2.map((i) => {
        return <MidFeature key={i.id} items={{ ...i }} />;
      })}

      <Footer />
    </div>
  );
};

export default Features;
