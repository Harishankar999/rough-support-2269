import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Flex,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

function Card({ status, dollar, time }) {
  return (
    <Box>
      <Center py={6}>
        <Box
          w={"400px"}
          padding={"20px"}
          border="1px solid red"
          borderBottomRightRadius={"20px"}
          borderTopLeftRadius={"20px"}
          boxShadow={"2xl"}
        >
          <Stack
            textAlign={"center"}
            p={6}
            color={useColorModeValue("gray.800", "white")}
            align={"center"}
          >
            <Flex direction={"row"} gap={20}>
              <Stack>
                <Text color={"red"} fontSize="3xl">
                  {status}
                </Text>
              </Stack>
              <Stack direction={"row"} align={"center"} justify={"center"}>
                <Text fontSize={"3xl"}>$</Text>
                <Text fontSize={"6xl"} fontWeight={800}>
                  {dollar}
                </Text>
                <Text color={"gray.500"}>{time}</Text>
              </Stack>
            </Flex>
          </Stack>

          <Box bg={useColorModeValue("gray.50", "gray.900")} px={2} py={4}>
            <Button
              mt={10}
              w={"full"}
              color={"white"}
              rounded={"xl"}
              boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
              bgGradient="linear(to-r, green,green)"
              _hover={{
                bgGradient: "linear(to-r, green.100,green.100)",
                boxShadow: "xl",
                color: "green",
              }}
            >
             30-day free trial
            </Button>
            <Text color="grey" textAlign="start" py="2">
              No credit card required.
            </Text>
          </Box>
          <Box>
            <List
              spacing={3}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              mb={"20px"}
            >
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Easy time and expense tracking{" "}
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Apps for all your devices{" "}
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Insight into your projects and team
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Seamless invoicing and payments
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Support from real humans
              </ListItem>
            </List>
          </Box>
        </Box>
      </Center>
    </Box>
  );
}

export { Card };
