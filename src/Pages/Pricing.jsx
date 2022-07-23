import React, { useState } from "react";
import {
  Flex,
  Heading,
  Stack,
  Text,
  Box,
  useBreakpointValue,
  Divider,
} from "@chakra-ui/react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { Card } from "../Component/Card";
import { ImageNhead } from "../Component/ImageNhead";
import Partners from "../Component/Partners";
import Accordian from "../Component/Accordian";
import TimeTracking from "../Component/TimeTracking";
import Footer from "../Component/Footer";

function Pricing() {
  const [dollar, setDollar] = useState(12);
  const [time, setTime] = useState("/Month");

  console.log(dollar, time);

  return (
    <Box textAlign={"center"}>
      <Stack minH={"15vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={10} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "4xl" }}>
              <Text
                as={"samp"}
                position={"relative"}
                _after={{
                  content: "''",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                Simple, flexible pricing
              </Text>
              <br />{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              All features are included in every plan
            </Text>
            <Tabs
              variant="un-styled"
              align="center"
              onChange={(e) => {
                if (e === 0) {
                  setDollar(12);
                  setTime("/Month");
                } else if (e === 1) {
                  setDollar(10);
                  setTime("Per Seat/Year");
                }
              }}
            >
              <TabList padding={"10px"}>
                <Tab
                  _selected={{ color: "white", bg: "#fa5d00" }}
                  borderRadius={"5px"}
                  w={"130px"}
                >
                  Monthly
                </Tab>
                <Tab
                  _selected={{ color: "white", bg: "#fa5d00" }}
                  borderRadius={"5px"}
                  w={"130px"}
                >
                  Annual
                </Tab>
              </TabList>
            </Tabs>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              Save <strong color="black">10%</strong> with annual plan
            </Text>
          </Stack>
        </Flex>
      </Stack>

      <Flex justify={"center"} gap={10}>
        <Card status={"Free"} dollar={"0"} time={"Forever"} />
        <Card status={"Pro"} dollar={dollar} time={time} />
      </Flex>

      <ImageNhead />
     

      <Partners />
 

      <Box>
        <Flex>
          <Box w={"50%"}>
            <Text fontSize={"4xl"} padding={12}>
              Frequently asked questions
            </Text>
          </Box>

          <Box w={"50%"} padding={"20px"}>
            <Accordian />
          </Box>
        </Flex>
      </Box>

      <Box bg="tomato">
        <TimeTracking />
      </Box>

      <Footer />
    </Box>
  );
}

export { Pricing };
