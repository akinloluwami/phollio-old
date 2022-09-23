import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../components/dashboard/Sidebar";
import Navigation from "../components/dashboard/Navigation";
import Linkbar from "../components/dashboard/Linkbar";

const DashboardLayout = ({ children }) => {
  return (
    <Flex>
      <Box>
        <Sidebar />
      </Box>
      <Box w={"50%"} boxShadow={"base"}>
        <Navigation />
        <Box>{children}</Box>
      </Box>
      <Box w={"50%"} boxShadow={"base"}>
        <Linkbar />
        <Box>Page Preview</Box>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
