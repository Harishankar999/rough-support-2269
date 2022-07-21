import { Box } from "@chakra-ui/react";
import React from "react";
import { Routes, Route} from "react-router-dom";
import Features from "./Features";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import WhyHarvestPage from "./WhyHarvestPage"
const MainRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/whyharvest" element={<WhyHarvestPage />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </Box>
  );
};

export default MainRoutes;
