import { Link as RouteLink } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsTwitter } from "react-icons/bs";

import { BsLinkedin, BsInstagram } from "react-icons/bs";
const Logo = () => {
  return (
    <Box>
      <Text marginLeft={"-80px"} fontSize={"6xl"}>
        Harvest
      </Text>
    </Box>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bg={useColorModeValue("Black", "white")} height="60vh">
      <Box
        bg={useColorModeValue("Black", "white")}
        color={useColorModeValue("white", "white")}
      >
        <Container as={Stack} maxW={"6xl"} py={10} fontWeight={"500"}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
            spacing={8}
          >
            <Stack spacing={6}>
              <Box>
                <Logo color={useColorModeValue("gray.700", "white")} />
              </Box>
            </Stack>
            <Stack align={"flex-start"} width="200px" marginLeft={"150px"}>
              <ListHeader>Harvest</ListHeader>
              <RouteLink to="">
                <Text _hover={{ color: "red" }}>Home</Text>
              </RouteLink>
              <RouteLink to="">
                <Text _hover={{ color: "red" }}>Why Harvest?</Text>
              </RouteLink>
              <RouteLink to="">
                <Text _hover={{ color: "red" }}>Features</Text>
              </RouteLink>
              <RouteLink to="">
                <Text _hover={{ color: "red" }}>Pricing</Text>
              </RouteLink>
              <RouteLink to="">
                <Text _hover={{ color: "red" }}>Integrations</Text>
              </RouteLink>
              <RouteLink to="">
                <Text _hover={{ color: "red" }}>Apps</Text>
              </RouteLink>
              <RouteLink to="">
                <Text _hover={{ color: "red" }}>Security</Text>
              </RouteLink>
            </Stack>
            <Stack align={"flex-start"} width="200px" marginLeft="70px">
              <ListHeader>Community</ListHeader>
              <RouteLink to="">
                <Text _hover={{ color: "red" }}>Customer stories</Text>
              </RouteLink>
              <RouteLink to="">
                <Text _hover={{ color: "red" }}>Resources</Text>
              </RouteLink>
              <RouteLink to="">
                <Text _hover={{ color: "red" }}>Webinars</Text>
              </RouteLink>
              <RouteLink to="">
                <Text _hover={{ color: "red" }}>Help & support</Text>
              </RouteLink>
              <RouteLink to="">
                <Text _hover={{ color: "red" }}>Integrate with Harvest</Text>
              </RouteLink>
              <RouteLink to="">
                <Text _hover={{ color: "red" }}>Time Well Spent</Text>
              </RouteLink>
              <RouteLink to="">
                <Text _hover={{ color: "red" }}>Time in This Time</Text>
              </RouteLink>
            </Stack>
            <Stack align={"flex-start"} width="200px" marginLeft="70px">
              <ListHeader>Company</ListHeader>
              <RouteLink to="">
                <Text _hover={{ color: "red" }}>About us</Text>
              </RouteLink>
              <RouteLink to="">
                <Text _hover={{ color: "red" }}>Blog</Text>
              </RouteLink>
              <RouteLink to="">
                <Text _hover={{ color: "red" }}>Careers</Text>
              </RouteLink>
              <RouteLink to="">
                <Text _hover={{ color: "red" }}>Legal</Text>
              </RouteLink>
              <RouteLink to="">
                <Text _hover={{ color: "red" }}>Contact us</Text>
              </RouteLink>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
      <Box>
        <Button
          width={"80%"}
          color="whiteAlpha.700"
          colorScheme="gray"
          _hover={{ bg: "gray" }}
          variant={"outline"}
          borderRadius="50px"
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
      >
        <Box>
          <Text fontWeight={"500"} fontSize={"lg"}>
            © 2006-2022 Harvest
          </Text>
        </Box>
        <HStack
          justifyContent={"space-between"}
          width="400px"
          cursor={"pointer"}
        >
          <HStack>
            <BsTwitter />
            <Text> Twitter</Text>
          </HStack>
          <HStack>
            <BsLinkedin />
            <Text> Linkedin</Text>
          </HStack>
          <HStack>
            <BsInstagram />
            <Text> Twitter</Text>
          </HStack>
        </HStack>
      </HStack>
    </Box>
  );
}
