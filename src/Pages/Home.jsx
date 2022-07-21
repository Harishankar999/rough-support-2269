import {
  Box,
  Button,
  Divider,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import { ArrowForwardIcon, StarIcon } from "@chakra-ui/icons";
import { ImStarHalf } from "react-icons/im";
import "./Home.css";
import { Link as RouterLink } from "react-router-dom";
import CustomerStories from "../Component/CustomerStories";
const Home = () => {
  return (
    <Box bg={"#fff8f1"}>
      <Navbar />
      <Box>
        <HStack border="1px solid #fff8f1" width={"90%"} margin="auto">
          <Box width={"50%"} border="1px solid #fff8f1">
            <HStack margin={"20px 0px 20px 0px"}>
              <StarIcon color={"#fa5d00 "} />
              <StarIcon color={"#fa5d00 "} />
              <StarIcon color={"#fa5d00 "} />
              <StarIcon color={"#fa5d00 "} />
              <ImStarHalf color={"#fa5d00 "} />
              <Text fontWeight={"400"}>
                4.6 <span>(491 reviews)</span>
              </Text>
            </HStack>
            <Text
              width={"79%"}
              textAlign={"left"}
              fontSize="4xl"
              fontFamily={"mono"}
            >
              Finally, time tracking your team actually wants to use
            </Text>
            <Text
              fontSize="18px"
              color={"gray"}
              textAlign={"left"}
              margin="10px 0px 10px 0px"
            >
              ☑<span className="span"> Time Tracking.</span>Easy & intuitive
              time tracking that captures all your time without changing the way
              you work.
            </Text>
            <Text
              fontSize="18px"
              color={"gray"}
              margin="15px 0px 15px 0px"
              textAlign={"left"}
            >
              ☑<span className="span">Reports & Analysis.</span>Instantly create
              reports across projects. Budgets, time, team capacity, cost
              breakdowns, and more.
            </Text>
            <Text
              fontSize="18px"
              color={"gray"}
              margin="15px 0px 15px 0px"
              textAlign={"left"}
            >
              ☑<span className="span">Invoicing & Payments.</span> Turn tracked
              time into invoices. Accept online payments. Sync with QuickBooks
              and Xero.
            </Text>
            <RouterLink to="">
              <Button
                width="200px"
                height={"60px"}
                color="white"
                display={"flex"}
                borderRadius="20px"
                bg={"#fa5d00"}
                colorScheme="cyan"
                margin="20px 0px 20px 0px"
              >
                Get Started
              </Button>
            </RouterLink>
            <Text
              fontWeight={"300"}
              fontSize="18px"
              textAlign={"left"}
              margin="10px 0px 10px 0px"
            >
              Free 30-day trial. No credit card required.
            </Text>
          </Box>
          <Box border={"1px solid #fff8f1"}>
            <Image
              width={"100%"}
              src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1001-Harvest-Home-SPZ-Hero/mobile-hero-img.png"
            />
          </Box>
        </HStack>
        <HStack
          paddingTop={"40px"}
          width={"90%"}
          margin="auto"
          justifyContent={"center"}
          alignItems="center"
        >
          <Text fontSize={"18"} color="gray">
            <span className="span2">70,000+ </span>companies track time with
            Harvest
          </Text>
          <Divider bg={"#fa5d00"} orientation="horizontal" width={"70%"} />
        </HStack>
        <HStack
          padding={"40px 0px 40px 0px"}
          alignItems={"center"}
          width={"90%"}
          margin="auto"
          justifyContent={"space-around"}
        >
          <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-vw.svg?noresize" />
          <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-aclu.svg?noresize" />
          <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-conde.svg?noresize" />
          <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-dell.svg?noresize" />
          <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-amnesty.svg?noresize" />
          <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-deloitte.svg?noresize" />
          <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-lululemon.svg?noresize" />
          <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-yale.svg?noresize" />
        </HStack>
        <Divider bg={"#fa5d00"} orientation="horizontal" width={"100%"} />
        <Box
          paddingTop={"70px"}
          border={"1px solid #fff8f1"}
          textAlign="left"
          width={"80%"}
          margin={"auto"}
        >
          <Text fontSize={"20px"} fontWeight="bold" color={"#fa5d00"}>
            FEATURES
          </Text>
          <Text fontSize={"40px"}>
            Everything you need to keep your team ticking
          </Text>
          <Text fontWeight={"300"} fontSize={"25px"}>
            Time tracking software that helps you keep time and get insights.
          </Text>
        </Box>
        <Box paddingTop={"50px"}>
          <HStack border={"1px solid #fff8f1"} width="90%" margin={"auto"}>
            <VStack width={"40%"} gap="30px">
              <RouterLink to="">
                <HStack
                  borderRadius={"12px"}
                  border="1px solid red"
                  width={"80%"}
                  padding="20px"
                  cursor={"pointer"}
                  _hover={{ bg: "red.100" }}
                  margin="auto"
                >
                  <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-time.svg" />
                  <Text fontSize={"18px"} textAlign={"left"}>
                    <span className="span span3">Time tracking </span>
                    Simple and intuitive time tracking your team will love.
                  </Text>
                </HStack>
              </RouterLink>
              <RouterLink to="">
                <HStack
                  borderRadius={"12px"}
                  border="1px solid red"
                  width={"82%"}
                  padding="20px"
                  cursor={"pointer"}
                  _hover={{ bg: "red.100" }}
                  margin="auto"
                >
                  <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-reporting.svg" />

                  <Text fontSize={"18px"} textAlign={"left"}>
                    <span className="span span3">Reports & analysis</span>
                    Unlock the insights that help your business thrive.
                  </Text>
                </HStack>
              </RouterLink>
              <RouterLink to="">
                <HStack
                  borderRadius={"12px"}
                  border="1px solid red"
                  width={"89%"}
                  padding="20px"
                  cursor={"pointer"}
                  _hover={{ bg: "red.100" }}
                  margin="auto"
                >
                  <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-invoicing.svg" />
                  <Text fontSize={"18px"} textAlign={"left"}>
                    <span className="span span3">Invoicing & payments </span>
                    Seamless invoicing and fast online payments.
                  </Text>
                </HStack>
              </RouterLink>
            </VStack>
            <Image
              src="https://www.getharvest.com/hs-fs/hubfs/screenshot-home-timesheets.png?width=2550&name=screenshot-home-timesheets.png"
              width={"60%"}
            />
          </HStack>
        </Box>
        <Box width={"83%"} margin="auto" padding={"40px 0px 40px 0px"}>
          <RouterLink to="">
            <Button
              fontSize={"20px"}
              height="50px"
              display="flex"
              colorScheme={"purple"}
              bg="black"
              color="white"
              borderRadius={"12px"}
              width="250px"
            >
              Discover all features
            </Button>
          </RouterLink>
        </Box>
        <Divider
          margin={"auto"}
          bg={"#fa5d00"}
          orientation="horizontal"
          width={"90%"}
        />
        <Box padding={"40px 0px 40px 0px"} width="90%" margin="auto">
          <HStack border={"1px solid #fff8f1"}>
            <Box width={"50%"}>
              <Image
                width={"100%"}
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illustrations/integrations-home.svg"
              />
            </Box>
            <Box
              border={"1px solid #fff8f1"}
              textAlign="left"
              width={"50%"}
              margin={"auto"}
            >
              <Text fontSize={"20px"} fontWeight="bold" color={"#fa5d00"}>
                INTEGRATIONS
              </Text>
              <Text
                padding={"10px 0px 10px 0px"}
                width={"90%"}
                fontSize={"40px"}
              >
                Integrated with the tools your team already knows and loves
              </Text>
              <Text
                padding={"10px 0px 10px 0px"}
                width="70%"
                fontWeight={"300"}
                fontSize={"25px"}
              >
                Your favorite apps work seamlessly with Harvest so you can keep
                projects on track however you work.
              </Text>
              <RouterLink to="">
                <Button
                  fontSize={"20px"}
                  height="50px"
                  display="flex"
                  colorScheme={"purple"}
                  bg="black"
                  color="white"
                  borderRadius={"12px"}
                  width="250px"
                  marginTop="10px"
                >
                  Browser integrations
                </Button>
              </RouterLink>
            </Box>
          </HStack>
        </Box>
        <Divider
          margin={"auto"}
          bg={"#fa5d00"}
          orientation="horizontal"
          width={"90%"}
        />
      </Box>
      <CustomerStories />
      <RouterLink to="">
        <Stack
          padding={"40px 0px 60px 0px"}
          justifyContent={"flex-start"}
          width="90%"
          margin={"auto"}
        >
          <Button
            fontSize={"20px"}
            height="50px"
            display="flex"
            colorScheme={"purple"}
            bg="black"
            color="white"
            borderRadius={"12px"}
            width="250px"
            marginTop="10px"
          >
            Meet Our Customer
          </Button>
        </Stack>
      </RouterLink>
      <Divider
        orientation="horizontal"
        width={"90%"}
        margin={"auto"}
        bg={"#fa5d00"}
        height="1px"
      />
      <Box padding={"60px 0px 60px 0px"}>
        <HStack
          textAlign={"left"}
          // border={"1px solid red"}
          width="90%"
          margin={"auto"}
        >
          <Box width={"50%"}>
            <Text
              margin={"20px"}
              fontSize={"20px"}
              fontWeight="bold"
              color={"#fa5d00"}
            >
              LEARNING RESOURCES
            </Text>
            <Text marginLeft={"20px"} width={"70%"} fontSize={"40px"}>
              Supporting your team along the way
            </Text>
          </Box>
          <VStack width={"50%"}>
            <Box
              _hover={{ bg: "red.100" }}
              borderTop={"1px solid red"}
              width="90%"
              padding="20px"
              cursor={"pointer"}
            >
              <HStack>
                <Image
                  marginRight="20px"
                  src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-folder.svg"
                />
                <Text width="60%" fontSize={"18px"} textAlign={"left"}>
                  <span className="span span3">Guides and templates </span>
                  Learn how to introduce your team to time tracking and make the
                  most of Harvest.
                </Text>
                <ArrowForwardIcon w={8} h={8} color="red" marginLeft={"10px"} />
              </HStack>
            </Box>
            <Box
              _hover={{ bg: "red.100" }}
              borderTop={"1px solid red"}
              width="90%"
              padding="20px"
              cursor={"pointer"}
            >
              <HStack>
                <Image
                  marginRight="20px"
                  src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-laptop.svg"
                />
                <Text width="60%" fontSize={"18px"} textAlign={"left"}>
                  <span className="span span3">Webinars </span>
                  Watch a quick intro to Harvest or sign up for a live session
                  with one of our Experts.
                </Text>
                <ArrowForwardIcon w={8} h={8} color="red" marginLeft={"10px"} />
              </HStack>
            </Box>
            <Box
              _hover={{ bg: "red.100" }}
              borderTop={"1px solid red"}
              width="90%"
              borderBottom="1px solid red"
              padding="20px"
              cursor={"pointer"}
            >
              <HStack>
                <Image
                  marginRight="20px"
                  src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-help.svg"
                />
                <Text width="60%" fontSize={"18px"} textAlign={"left"}>
                  <span className="span span3">Help Center </span>
                  Find the answers to all your questions or get in touch with
                  one of our friendly Experts.
                </Text>
                <ArrowForwardIcon w={8} h={8} color="red" marginLeft={"10px"} />
              </HStack>
            </Box>
          </VStack>
        </HStack>
      </Box>
      <Divider
        orientation="horizontal"
        width={"100%"}
        margin={"auto"}
        bg={"#fa5d00"}
        height="1px"
      />
      <Box bg={"white"} padding={"60px 0px 60px 0px"} border={"1px solid white"}>
        <HStack textAlign={"left"} width={"90%"} margin="auto">
          <Box width={"50%"}>
            <VStack textAlign={"left"}>
              <Text width={"90%"} fontSize={"40px"}>
                Start tracking time today
              </Text>
              <Text width={"90%"} fontWeight={"300"} fontSize={"25px"}>
                Join 70,000+ companies spending their time wisely with Harvest.
              </Text>
              <HStack
                padding={"30px"}
                justifyContent={"space-between"}
                gap="40px"
              >
                <RouterLink to="">
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
                </RouterLink>
                <Text>Free 30-day trial. No credit card required.</Text>
              </HStack>
            </VStack>
          </Box>
          <Box width={"50%"} paddingLeft="50px">
            <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/footer-illo-comp.svg" />
          </Box>
        </HStack>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
