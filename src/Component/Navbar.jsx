import React from "react";
import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import homeIMG from "../Img/home.png";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      className="Box"
      border={"1px solid #fff8f1"}
      height="100px"
      bg="#fff8f1"
    >
      <Flex border={"1px solid #fff8f1"} margin="25px 100px">
        <Box>
          <RouterLink to="/">
            <Image height={"35px"} src={homeIMG} />
          </RouterLink>
        </Box>

        <HStack
          border="1px solid #fff8f1"
          width="90%"
          justifyContent="space-between"
        >
          <HStack
            gap="10px"
            marginLeft="50px"
            fontSize={"lg"}
            fontWeight={"bold"}
            bg="#fff8f1"
          >
            <RouterLink to="">
              <Text _hover={{ color: "red" }}>Why Harvest?</Text>
            </RouterLink>
            <RouterLink to="">
              <Text _hover={{ color: "red" }}>Features</Text>
            </RouterLink>
            <RouterLink to="">
              <Text _hover={{ color: "red" }}>Customers</Text>
            </RouterLink>
            <RouterLink to="">
              <Text _hover={{ color: "red" }}>Integrations</Text>
            </RouterLink>
            <RouterLink to="">
              <Text _hover={{ color: "red" }}>Pricing</Text>
            </RouterLink>
          </HStack>
          <HStack>
            <RouterLink to="">
              <Text
                _hover={{ color: "red" }}
                marginRight={"10px"}
                colorScheme={"red"}
                fontSize={"lg"}
                fontWeight={"bold"}
              >
                Sign Up
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
