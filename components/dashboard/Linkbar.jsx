import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import Share from "./Share";

const Linkbar = () => {
  return (
    <Flex
      boxShadow="base"
      px={6}
      py={2}
      gap={5}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Flex>
        <Text>My Phollio:</Text>
        <Link href="https://phollio.com/akinkunmi" ml={2} target={"_blank"}>
          <Text
            fontSize={"sm"}
            textDecoration="underline"
            color={"brand.accent"}
          >
            https://phollio.com/akinknumi
          </Text>
        </Link>
      </Flex>
      <Share />
    </Flex>
  );
};

export default Linkbar;
