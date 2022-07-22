import { Box, Divider } from "@chakra-ui/react";
import React from "react";
import "../Styles/partners.scss";
const Partners = () => {
  return (
    <div className="brandsContainer" >
       <Divider
        orientation="horizontal"
        width={"95%"}
        margin={"auto"}
        bg={"#fa5d00"}
        height="2px"
      />
      <Box mt={12} mb='12'>
      <div className="brandsImg">
        <img
          src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-vw.svg?noresize"
          alt=""
        />
        <img
          src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-aclu.svg?noresize"
          alt=""
        />
        <img
          src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-conde.svg?noresize"
          alt=""
        />
        <img
          src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-dell.svg?noresize"
          alt=""
        />
        <img
          src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-amnesty.svg?noresize"
          alt=""
        />
        <img
          src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-deloitte.svg?noresize"
          alt=""
        />
        <img
          src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-lululemon.svg?noresize"
          alt=""
        />
        <img
          src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-yale.svg?noresize"
          alt=""
        />
      </div>
      </Box>
      <Divider
        orientation="horizontal"
        width={"95%"}
        margin={"auto"}
        bg={"#fa5d00"}
        height="2px"
      />
    </div>
  );
};

export default Partners;
