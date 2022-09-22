import { Box, Button } from "@chakra-ui/react";
import React from "react";

const StrategyButton = ({ icon, text, action }) => {
  return (
    <Button onClick={action}>
      <Box>{icon}</Box>
    </Button>
  );
};

export default StrategyButton;
