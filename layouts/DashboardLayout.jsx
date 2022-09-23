import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../components/dashboard/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <Flex>
      <Box>
        <Sidebar />
      </Box>
      <Box>
        <Flex>Navbar</Flex>
        <Box>{children}</Box>
      </Box>
      <Box>
        <Flex>Link Bar</Flex>
        <Box>Page Preview</Box>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
