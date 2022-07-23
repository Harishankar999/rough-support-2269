import React from "react";

import { Box, VStack, Flex, Heading, Text } from "@chakra-ui/react";

import styles from "./Integration.module.css";
import { IntegrationPart2 } from "./IntegrationPart2";
import Footer from "../Footer";

export const Integrations = () => {
  return (
    <Box width={"99%"} height="550px">
      <Box width={"97%"} height="500px">
        <Flex width={"98%"} height="470px" margin={"auto"}>
          <VStack mt={"8%"} width={"50%"} height="400px">
            <Heading>
              Time tracking integrated with <br /> your team's favourite apps
            </Heading>

            <Text fontSize="2xl">
              Harvest works with the most popular tools <br /> so your team can
              track time effortlessly.
            </Text>
          </VStack>
          <VStack width={"50%"} height="500px">
            <Box width={"100%"} height="400px">
              {/* -----------round Box Start --------------- */}

              <a href="https://www.getharvest.com/integrations/asana">
                {" "}
                <Box
                  mt={"2%"}
                  className={styles.Round}
                  position="absolute"
                  top="9%"
                  left="68%"
                  borderRadius={"50%"}
                  width={"10%"}
                  height="100px"
                  border={"1px solid white"}
                  paddingLeft="1%"
                  paddingTop={"1%"}
                >
                  <img
                    width={"80%"}
                    height="80px"
                    src="https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-asana.png?width=135&name=integration-bubble-asana.png"
                    alt=""
                  />
                </Box>
              </a>

              {/* --------------------Top Box End--------------------- */}

              <Box
                className={styles.Round}
                backgroundImage="url('https://19495563.fs1.hubspotusercontent-na1.net/hubfs/19495563/raw_assets/public/harvest-theme/images/integrations/integrations-wheel.svg')"
                backgroundPosition="center"
                borderRadius={"50%"}
                backgroundRepeat="no-repeat"
                position="absolute"
                top="35%"
                left="68%"
                width={"11%"}
                height="100px"
                border={"1px solid white"}
              ></Box>
              {/* ------------------Center Box End----------------- */}

              <a href="https://www.getharvest.com/integrations/stripe">
                {" "}
                <Box
                  className={styles.Round}
                  position="absolute"
                  top="65%"
                  left="69%"
                  borderRadius={"50%"}
                  width={"10%"}
                  height="22%"
                  border={"1px solid white"}
                  paddingLeft="1%"
                  paddingTop={"1%"}
                >
                  <img
                    width={"80%"}
                    height="80px"
                    src="https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-stripe.png?width=135&name=integration-bubble-stripe.png"
                    alt=""
                  />
                </Box>
              </a>

              {/* ----------------Bottom Box End-------------------- */}

              <a href="https://www.getharvest.com/integrations/trello">
                {" "}
                <Box
                  className={styles.Round}
                  position="absolute"
                  top="35%"
                  left="85%"
                  borderRadius={"50%"}
                  width={"9%"}
                  height="100px"
                  border={"1px solid white"}
                  paddingLeft="1%"
                  paddingTop={"1%"}
                >
                  <img
                    width={"80%"}
                    height="80px"
                    src="https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-trello.png?width=135&name=integration-bubble-trello.png"
                    alt=""
                  />
                </Box>
              </a>

              {/* -------Center Box Right End -------------- */}

              <a href="https://www.getharvest.com/integrations/google-calendar">
                {" "}
                <Box
                  className={styles.Round}
                  position="absolute"
                  top="35%"
                  left="54%"
                  borderRadius={"50%"}
                  width={"9%"}
                  height="100px"
                  border={"1px solid white"}
                  paddingLeft="1%"
                  paddingTop={"1%"}
                >
                  <img
                    width={"80%"}
                    height="80px"
                    src="https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-gcal.png?width=135&name=integration-bubble-gcal.png"
                    alt=""
                  />
                </Box>
              </a>

              {/* -------------Top Left Box ------------- */}

              <a href="https://www.getharvest.com/integrations/jira">
                {" "}
                <Box
                  className={styles.Round}
                  position="absolute"
                  top="19%"
                  left="60%"
                  borderRadius={"50%"}
                  width={"9%"}
                  height="100px"
                  border={"1px solid white"}
                  paddingLeft="1%"
                  paddingTop={"1%"}
                >
                  <img
                    width={"80%"}
                    height="80px"
                    src="https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-jira.png?width=135&name=integration-bubble-jira.png"
                    alt=""
                  />
                </Box>
              </a>

              {/* ------------Top Left Box Corner----------------- */}

              <a href="https://www.getharvest.com/integrations/slack">
                {" "}
                <Box
                  className={styles.Round}
                  position="absolute"
                  top="18%"
                  left="80%"
                  borderRadius={"50%"}
                  width={"9%"}
                  height="100px"
                  border={"1px solid white"}
                  paddingLeft="1%"
                  paddingTop={"1%"}
                >
                  <img
                    width={"80%"}
                    height="80px"
                    src="https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-slack.png?width=135&name=integration-bubble-slack.png"
                    alt=""
                  />
                </Box>
              </a>

              {/* ---------Top Right Box Corner------------------- */}

              <a href="https://www.getharvest.com/integrations/quickbooks-online">
                {" "}
                <Box
                  className={styles.Round}
                  position="absolute"
                  top="51%"
                  left="79%"
                  borderRadius={"50%"}
                  width={"9%"}
                  height="100px"
                  border={"1px solid white"}
                  paddingLeft="1%"
                  paddingTop={"1%"}
                >
                  <img
                    width={"80%"}
                    height="80px"
                    src="https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-qbo.png?width=135&name=integration-bubble-qbo.png"
                    alt=""
                  />
                </Box>
              </a>

              {/* ----------Bottom Right Box Corner--------- */}

              <a href="https://www.getharvest.com/integrations/github">
                {" "}
                <Box
                  className={styles.Round}
                  position="absolute"
                  top="51%"
                  left="60%"
                  borderRadius={"50%"}
                  width={"9%"}
                  height="100px"
                  border={"1px solid white"}
                  paddingLeft="1%"
                  paddingTop={"1%"}
                >
                  <img
                    width={"80%"}
                    height="80px"
                    src="https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-github.png?width=135&name=integration-bubble-github.png"
                    alt=""
                  />
                </Box>
              </a>

              {/* ----------Bottom Left Box Corner----------- */}

              {/* ---------------round Box End--------------- */}
            </Box>
          </VStack>
        </Flex>
      </Box>
      <IntegrationPart2 />
      {/* <Footer/> */}
    </Box>
  );
};
