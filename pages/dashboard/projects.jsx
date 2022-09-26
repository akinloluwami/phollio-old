import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Project from "../../components/dashboard/Project";
import DashboardLayout from "../../layouts/DashboardLayout";

const Projects = () => {
  return (
    <DashboardLayout>
      <Box>
        <Flex flexWrap={"wrap"} alignItems={"center"} justifyContent={"center"}>
          <Project />
          <Project />
          <Project />
          <Project />
        </Flex>
      </Box>
    </DashboardLayout>
  );
};

export default Projects;
