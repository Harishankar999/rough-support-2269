import React from "react";

import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";

import homeIMG from "../Img/home.png";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const goto = (link) => {
    navigate(link)
  }

  // -webkit-box-shadow: 0px 0px 30px 0.1px rgba(0, 0, 0, 0.25);
  // box-shadow: 0px 0px 30px 0.1px rgba(0, 0, 0, 0.25);
  // -webkit-transition-duration: 0.5s;
  // transition-duration: 0.5s;
  // background-color: #000;
  // position: fixed;
  // width: 100%;
  // z-index: 1;

  return (
    <Box className="Box" height="100px">
      <Flex margin="25px 100px">
        <Box>
          <RouterLink to="/">
            <Image height={"35px"} src={homeIMG} />
          </RouterLink>
        </Box>

        <HStack
          width="90%"
          justifyContent="space-between"
        >
          <HStack
            gap="8px"
            marginLeft="25px"
            fontSize={"lg"}
            fontWeight={"bold"}
            bg="#fff8f1"
          >

            <RouterLink to="/whyharvest">


            {/* <RouterLink to="">


              <Text _hover={{ color: "red" }}>Why Harvest?</Text>
            </RouterLink>
            <RouterLink to="/features">
              <Text _hover={{ color: "red" }}>Features</Text>
            </RouterLink>
            <RouterLink to="">
              <Text _hover={{ color: "red" }}>Customers</Text>
            </RouterLink>
            <RouterLink to="">
              <Text _hover={{ color: "red" }}>Integrations</Text>
            </RouterLink>
            <RouterLink to="/pricing">
              <Text _hover={{ color: "red" }}>Pricing</Text>
            </RouterLink> */}

            <Tabs colorScheme='orange' border={'#fff8f1'} >
              <TabList>
                <Tab onClick={() => goto("/")}>Why Harvest?</Tab>
                <Tab onClick={() => goto("/")}> Features</Tab>
                <Tab onClick={() => goto("/")}>Customers</Tab>
                <Tab onClick={() => goto("/integration")}> Integrations</Tab>
                <Tab onClick={() => goto("/pricing")}>Pricing</Tab>
              </TabList>
            </Tabs>
          </HStack>
          <HStack>
            <RouterLink to="/login">
              <Text
                _hover={{ color: "red" }}
                marginRight={"10px"}
                colorScheme={"red"}
                fontSize={"lg"}
                fontWeight={"bold"}
              >
                Sign In
              </Text>
            </RouterLink>
            <Button
              fontSize={"lg"}
              height={"45px"}
              width="200px"
              borderRadius="10px"
              bg={"#fa5d00"}
              colorScheme={"red"}
              color="white"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Try Harvest free
            </Button>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
