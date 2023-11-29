import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, date, imageSrc }) => {
  return (
    <VStack align="start" spacing={4}>
      <Image src={imageSrc} alt={title} borderRadius="lg" />
      <VStack align="start" spacing={1}>
        <Heading size="md">{title}</Heading>
        <Text color="gray.600">{description}</Text>
      </VStack>
      <HStack justify="space-between" w="full">
        <Text fontSize="sm" color="gray.500">
          {date}
        </Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
