import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";

const Accordian = () => {
  return (
    <Box padding={10}>
      <Accordion defaultIndex={[]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton   _expanded={{  color: 'tomato' }}>
              <Box flex="1" textAlign="left">
                <Text fontSize={"2xl"} fontWeight="400">
                  How do I sign up for the free plan?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text fontSize={"xl"} textAlign="start" mt={5} fontWeight="100">
              When your trial account meets the free plan’s requirements, you
              can sign up for the free version during the upgrade process. On
              the Upgrade Your Harvest Plan page, click the switch to the free
              version link below the plan options.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton  _expanded={{  color: 'tomato' }}>
              <Box flex="1" textAlign="left">
                <Text fontSize={"2xl"} fontWeight="400">
                  What happens at the end of my trial?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text fontSize={"xl"} textAlign="start" mt={5} fontWeight="100">
              When your trial account meets the free plan’s requirements, you
              can sign up for the free version during the upgrade process. On
              the Upgrade Your Harvest Plan page, click the switch to the free
              version link below the plan options.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton  _expanded={{  color: 'tomato' }}>
              <Box flex="1" textAlign="left">
                <Text fontSize={"2xl"} fontWeight="400">
                  Does my team qualify for any discounts?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text fontSize={"xl"} textAlign="start" mt={5} fontWeight="100">
              When your trial account meets the free plan’s requirements, you
              can sign up for the free version during the upgrade process. On
              the Upgrade Your Harvest Plan page, click the switch to the free
              version link below the plan options.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton  _expanded={{  color: 'tomato' }}>
              <Box flex="1" textAlign="left">
                <Text fontSize={"2xl"} fontWeight="400">
                  How can I get a quote for my team?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text fontSize={"xl"} textAlign="start" mt={5} fontWeight="100">
              When your trial account meets the free plan’s requirements, you
              can sign up for the free version during the upgrade process. On
              the Upgrade Your Harvest Plan page, click the switch to the free
              version link below the plan options.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton  _expanded={{  color: 'tomato' }}>
              <Box flex="1" textAlign="left">
                <Text fontSize={"2xl"} fontWeight="400">
                  What are our payment options?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text fontSize={"xl"} textAlign="start" mt={5} fontWeight="100">
              When your trial account meets the free plan’s requirements, you
              can sign up for the free version during the upgrade process. On
              the Upgrade Your Harvest Plan page, click the switch to the free
              version link below the plan options.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton  _expanded={{  color: 'tomato' }}>
              <Box flex="1" textAlign="left">
                <Text fontSize={"2xl"} fontWeight="400">
                  What happens if my team size changes?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text fontSize={"xl"} textAlign="start" mt={5} fontWeight="100">
              When your trial account meets the free plan’s requirements, you
              can sign up for the free version during the upgrade process. On
              the Upgrade Your Harvest Plan page, click the switch to the free
              version link below the plan options.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton  _expanded={{  color: 'tomato' }}>
              <Box flex="1" textAlign="left">
                <Text fontSize={"2xl"} fontWeight="400">
                  Can we switch our billing frequency?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text fontSize={"xl"} textAlign="start" mt={5} fontWeight="200">
              When your trial account meets the free plan’s requirements, you
              can sign up for the free version during the upgrade process. On
              the Upgrade Your Harvest Plan page, click the switch to the free
              version link below the plan options.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Accordian;

// How do I sign up for the free plan?
// What happens at the end of my trial?
// Does my team qualify for any discounts?
// How can I get a quote for my team?
// What are our payment options?
// What happens if my team size changes?
// Can we switch our billing frequency?
