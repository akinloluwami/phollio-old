import {
  Box,
  Button,
  Center,
  CloseButton,
  Flex,
  Heading,
  ScaleFade,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const Share = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box position={"relative"}>
      <Button backgroundColor={"brand.accent"} onClick={onToggle}>
        Share
      </Button>
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Box
          mt={1}
          h={"500px"}
          w={"434px"}
          position={"absolute"}
          background={"#2D3748"}
          right={0}
          borderRadius={"2xl"}
          boxShadow={"base"}
        >
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            py={3}
            px={2}
          >
            <Text></Text>
            <Heading size={"sm"}>Share your Phollio</Heading>
            <CloseButton size="md" onClick={onToggle} />
          </Flex>
          <Text w={"80%"} m={"auto"} fontSize={"sm"}>
            Get more visitors by sharing your Linktree everywhere.
          </Text>
        </Box>
      </ScaleFade>
    </Box>
  );
};

export default Share;
