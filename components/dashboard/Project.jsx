import { Box, Input } from "@chakra-ui/react";
import React from "react";

const Project = () => {
  return (
    <Box width={"250px"} my={3} mx={5}>
      <Box
        width={"250px"}
        height={"150px"}
        bg={"rgba(0,0,0,0.2)"}
        mb={2}
        borderRadius={"md"}
      ></Box>
      <Input placeholder="Title" mb={2} />
      <Input placeholder="URL" />
    </Box>
  );
};

export default Project;
