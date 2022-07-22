import React from "react";

import {
  Box,
  Button,
  Divider,
  HStack,
  Image,
  Tab,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const data = {
  first: [
    {
      id: "1",
      image:
        "https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-zehner.jpg?width=840&height=561&name=home-photo-zehner.jpg",
      heading:
        "We really focus on work-life balance in remote work… Time tracking reveals if somebody is overburdened and that becomes an immediate conversation.",
      name: "Noah Gedrich, Zehner",
    },
  ],
  second: [
    {
      id: "2",
      image:
        "https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-dovetail.jpg?width=840&height=561&name=home-photo-dovetail.jpg",
      heading:
        "We needed something that worked, something super simple, because we don’t want to have to teach people how to use it as part of onboarding.",
      name: "Nick Frandsen, Dovetail",
    },
  ],
  third: [
    {
      id: "3",
      image:
        "https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-cooper.jpg?width=840&height=561&name=home-photo-cooper.jpg",
      heading:
        "Having an easy, clean way to track time allows us to focus on the tough engineering problems where we bring value to our clients.",
      name: "Genevieve Laing, Cooper Perkins",
    },
  ],
  four: [
    {
      id: "4",
      image:
        "https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-luminary.jpg?width=840&height=561&name=home-photo-luminary.jpg",
      heading:
        "Harvest was key to helping me start my company – it allowed us to move from managing a lot of subcontractors to managing a staff quite easily.",
      name: "Sara Holoubek, Luminary Labs",
    },
  ],
};

const CustomerStories = () => {
  const [item, setItem] = useState(data.first);
  const handleClick1 = () => {
    setItem(data.first);
  };
  const handleClick2 = () => {
    setItem(data.second);
  };
  const handleClick3 = () => {
    setItem(data.third);
  };
  const handleClick4 = () => {
    setItem(data.four);
  };
  //   console.log(item);
  return (
    <Box padding={"40px 0px 40px 0px"}>
      <Box
        paddingTop={"70px"}
        border={"1px solid #fff8f1"}
        textAlign="left"
        width={"90%"}
        margin={"auto"}
      >
        <Text fontSize={"20px"} fontWeight="bold" color={"#fa5d00"}>
          CUSTOMER STORIES
        </Text>
        <Text fontSize={"40px"}>Helping teams thrive since 2006</Text>
        <Text fontWeight={"300"} fontSize={"25px"}>
          Teams of all sizes, types, and industries trust Harvest to track their
          time.
        </Text>
      </Box>

      <Box>
        {item.map((el) => {
          return (
            <Box
              padding="40px 0px 40px 0px"
              margin="auto"
              key={el.id}
              width="90%"
            >
              <HStack
                borderRight="1px solid red"
                borderLeft={"1px solid red"}
                textAlign={"left"}
                padding="20px"
              >
                <Box width={"50%"}>
                  <Text width={"85%"} fontWeight={"500"} fontSize={"28px"}>
                    <span className="span4">"</span>
                    {el.heading}
                    <span className="span4">"</span>
                  </Text>
                  <Text fontSize={"25px"} color="gray">
                    {el.name}
                  </Text>
                </Box>
                <Divider orientation="vertical" height={"100%"} />
                <Box width={"50%"}>
                  <Image src={el.image} width="90%" />
                </Box>
              </HStack>
            </Box>
          );
        })}
      </Box>
      <HStack
        width={"90%"}
        margin="auto"
        marginTop={"-100px"}
        marginRight="10px"
      >
        <Tabs variant="soft-rounded" colorScheme={"red"}>
          <TabList display={"flex"} width="170px" justifyContent="space-around">
            <Tab
              border={"1px solid"}
              w="30px"
              h="30px"
              borderRadius="100%"
              onClick={handleClick1}
            ></Tab>
            <Tab
              border={"1px solid"}
              w="30px"
              h="30px"
              borderRadius="100%"
              onClick={handleClick2}
            ></Tab>
            <Tab
              border={"1px solid"}
              w="30px"
              h="30px"
              borderRadius="100%"
              onClick={handleClick3}
            ></Tab>
            <Tab
              border={"1px solid"}
              w="30px"
              h="30px"
              borderRadius="100%"
              onClick={handleClick4}
            ></Tab>
          </TabList>
        </Tabs>
      </HStack>
    </Box>
  );
};

export default CustomerStories;
