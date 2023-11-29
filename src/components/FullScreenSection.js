import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({
  children,
  isDarkBackground = false,
  backgroundColor,
  ...boxProps
}) => {
  return (
    <VStack
      backgroundColor={backgroundColor || (isDarkBackground ? "#000" : "#fff")}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
