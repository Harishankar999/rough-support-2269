import React from "react";
import data from "./content.json"
import SmallMidHarvest from "./SmallMidHarvest";

const MidHarvest = () => {
    const contents = data.contents
  return (
    <div>
      {contents.map((i) => {
        return <SmallMidHarvest key={i.id} items={{...i}} />
      })}
    </div>
  );
};

export default MidHarvest;
