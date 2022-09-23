import { Avatar, Box, Flex } from "@chakra-ui/react";
import React from "react";
import Logo from "../../components/Logo";
import Profile from "./Profile";
const Sidebar = () => {
  return (
    <Flex
      boxShadow={"base"}
      height={"100vh"}
      py={2}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Logo />
      <Box>
        <Profile />
      </Box>
    </Flex>
  );
};

export default Sidebar;
