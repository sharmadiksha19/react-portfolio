import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { Box, Text, Image } from "@chakra-ui/react";
import { greeting, bio1, bio2 } from "./data";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
 <VStack spacing={4} textAlign="center" color="white">
      <Avatar size="xl" name="Pete" src="https://i.pravatar.cc/150?img=7" />
      <Heading as="h1">{greeting}</Heading>
      <Text fontSize="lg">{bio1}</Text>
      <Text fontSize="lg">{bio2}</Text>
    </VStack>
    <Box textAlign="center">
  <Image src="https://i.pravatar.cc/150?img=7" borderRadius="full" boxSize="150px" mb={4} />
  <Text fontSize="xl" fontWeight="bold" mb={2}>
    {greeting}
  </Text>
  <Text color="gray.600" fontSize="md" mb={4}>
    {bio1} <br /> {bio2}
  </Text>
</Box>
  </FullScreenSection>
);

export default LandingSection;
