import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Line = ({ text }) => {
  return (
    <Flex alignItems={"center"} gap={2} width={"350px"}>
      <Box w={"42.5%"} h={"1px"} backgroundColor={"gray.500"}></Box>
      <Text width={"40%"} textAlign="center">
        or {text} with
      </Text>
      <Box w={"42.5%"} h={"1px"} backgroundColor={"gray.500"}></Box>
    </Flex>
  );
};

export default Line;
