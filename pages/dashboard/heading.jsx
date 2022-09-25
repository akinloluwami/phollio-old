import { Avatar, Box, Button, Flex, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

const Heading = () => {
  return (
    <DashboardLayout>
      <Flex flexDirection={"column"} alignItems={"center"}>
        <Flex alignItems={"center"} my={5}>
          <Avatar size={"xl"} name={"Akinkunmi"} />
          <Button size={"sm"} ml={5}>
            Add profile image
          </Button>
        </Flex>
        <Box width={"70%"}>
          <Input placeholder={"Display name"} my={2} />
          <Input placeholder={"Professional title"} my={2} />
          <Textarea placeholder={"Bio"} my={2} />
        </Box>
        <Button my={2} backgroundColor={"brand.accent"}>
          Sace changes
        </Button>
      </Flex>
    </DashboardLayout>
  );
};

export default Heading;
