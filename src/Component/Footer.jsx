import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const col = {
  bg: "rgb(29, 28, 28)",
  color: "white",
  _hover: { color: "#fa5d00" },
};

const Logo = () => {
  return (
    <Box>
      <Text marginLeft={"-80px"} fontSize={"6xl"} {...col}>
        {" "}
        Harvest
      </Text>
    </Box>
  );
};


export default function Footer() {
  return (
    <Box {...col}>
      <Divider
        orientation="horizontal"
        width={"100%"}
        margin={"auto"}
        height="1px"
      />
      <Container as={Stack} maxW={"5xl"} py={10} {...col}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
          {...col}
        >
          <Stack spacing={6} {...col}>
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
          </Stack>
          <Stack
            align={"flex-start"}
            width="200px"
            marginLeft={"150px"}
            {...col}
          >
            <Text
              fontWeight={600}
              fontSize={"2xl"}
              color="white"
              bg="rgb(29, 28, 28)"
            >
              HARVEST
            </Text>

            <RouteLink to="">
              <Text {...col}>Home</Text>
            </RouteLink>
            <RouteLink to="">
              <Text {...col}>Why Harvest?</Text>
            </RouteLink>
            <RouteLink to="">
              <Text {...col}>Features</Text>
            </RouteLink>
            <RouteLink to="">
              <Text {...col}>Pricing</Text>
            </RouteLink>
            <RouteLink to="">
              <Text {...col}>Integrations</Text>
            </RouteLink>
            <RouteLink to="">
              <Text {...col}>Apps</Text>
            </RouteLink>
            <RouteLink to="">
              <Text {...col}>Security</Text>
            </RouteLink>
          </Stack>
          <Stack align={"flex-start"} width="200px" marginLeft="70px" {...col}>
            <Text
              fontWeight={600}
              fontSize={"2xl"}
              color="white"
              bg="rgb(29, 28, 28)"
            >
              COMMUNITY
            </Text>
            <RouteLink to="">
              <Text {...col}>Customer stories</Text>
            </RouteLink>
            <RouteLink to="">
              <Text {...col}>Resources</Text>
            </RouteLink>
            <RouteLink to="">
              <Text {...col}>Webinars</Text>
            </RouteLink>
            <RouteLink to="">
              <Text {...col}>Help support</Text>
            </RouteLink>
            <RouteLink to="">
              <Text {...col}>Integrate with Harvest</Text>
            </RouteLink>
            <RouteLink to="">
              <Text {...col}>Time Well Spent</Text>
            </RouteLink>
            <RouteLink to="">
              <Text {...col}>Time in This Time</Text>
            </RouteLink>
          </Stack>
          <Stack align={"flex-start"} width="200px" marginLeft="70px" {...col}>
            <Text
              fontWeight={600}
              fontSize={"2xl"}
              color="white"
              bg="rgb(29, 28, 28)"
            >
              COMPANY
            </Text>

            <RouteLink to="">
              <Text {...col}>About us</Text>
            </RouteLink>
            <RouteLink to="">
              <Text {...col}>Blog</Text>
            </RouteLink>
            <RouteLink to="">
              <Text {...col}>Careers</Text>
            </RouteLink>
            <RouteLink to="">
              <Text {...col}>Legal</Text>
            </RouteLink>
            <RouteLink to="">
              <Text {...col}>Contact us</Text>
            </RouteLink>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box width={"90%"} margin="auto" {...col}>
        <Button
          width={"80%"}
          color="black.700"
          colorScheme="gray"
          _hover={{ bg: "gray" }}
          variant={"outline"}
          borderRadius="50px"
          marginLeft={"150px"}
          border="1px solid"
          {...col}
        >
          We also make: Harvest Forecast – the fast and simple way to schedule
          your team across projects.
        </Button>
      </Box>
      <HStack
        color={"gray"}
        width={"80%"}
        margin={"auto"}
        marginTop="50px"
        justifyContent={"space-between"}
        padding="20px 0px 20px 0px"
        {...col}
      >
        <Box>
          <Text fontWeight={"500"} fontSize={"lg"} {...col}>
            © 2006-2022 Harvest
          </Text>
        </Box>
        <HStack
          justifyContent={"space-between"}
          width="400px"
          cursor={"pointer"}
          {...col}
        >
          <HStack {...col}>
            <BsTwitter color="red" size={20} />
            <Text {...col}> Twitter</Text>
          </HStack>
          <HStack {...col}>
            <BsLinkedin color="red" size={20} />
            <Text {...col}> Linkedin</Text>
          </HStack>
          <HStack {...col}>
            <BsInstagram color="red" size={20} />
            <Text {...col}> Twitter</Text>
          </HStack>
        </HStack>
      </HStack>
    </Box>
  );
}
