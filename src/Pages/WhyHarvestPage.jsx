import React from "react";
import Footer from "../Component/Footer";
import MidHarvest from "../Component/MidHarvest";
import Partners from "../Component/Partners";
import TimeTracking from "../Component/TimeTracking";
import TrialCard from "../Component/TrialCard";
import { Box } from '@chakra-ui/react';

const WhyHarvestPage = () => {
  return (
    <div>
      <TrialCard />
      <MidHarvest />
      <Box paddingBottom={20}>
      <Partners />
      </Box>
      <TimeTracking />
      <Footer />
    </div>
  );
};

export default WhyHarvestPage;
