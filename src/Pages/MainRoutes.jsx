import { Box } from "@chakra-ui/react";
import React from "react";

import Features from "./Features";

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

import WhyHarvestPage from "./WhyHarvestPage";

import { Pricing } from "./Pricing";
import { Integrations } from "../Component/Integration/Integrations";

const MainRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/features" element={<Features />} />

        <Route path="/whyharvest" element={<WhyHarvestPage />} />

        <Route path="/pricing" element={<Pricing />} />
        <Route path="/integration" element={<Integrations />} />
      </Routes>
    </Box>
  );
};

export default MainRoutes;
