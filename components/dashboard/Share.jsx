import {
  Box,
  Button,
  Center,
  CloseButton,
  Flex,
  Heading,
  Icon,
  ScaleFade,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BsChevronRight } from "react-icons/bs";
import sharingOptions from "../../utils/sharingOptions";
import { SiLinktree } from "react-icons/si";

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
          h={"440px"}
          w={"434px"}
          position={"absolute"}
          background={"#2D3748"}
          right={0}
          px={2}
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
          <Text w={"80%"} m={"auto"} fontSize={"sm"} py={2}>
            Get more visitors by sharing your Linktree everywhere.
          </Text>
          <Box mt={5}>
            {sharingOptions.map((option) => (
              <Button
                width={"100%"}
                backgroundColor={"transparent"}
                py={8}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                my={3}
              >
                <Text fontSize={"md"} fontWeight={"light"}>
                  {option.title}
                </Text>
                <Icon as={BsChevronRight} h={5} w={5} />
              </Button>
            ))}
          </Box>
          <Button
            w={"100%"}
            variant="outline"
            display={"flex"}
            justifyContent={"space-between"}
            mt={8}
          >
            <Flex alignItems={"center"}>
              <Icon as={SiLinktree} h={5} w={5} mr={2} />
              <Text fontWeight={"hairline"}>phollio.com/akinkunmi</Text>
            </Flex>
            <Text fontWeight={"hairline"}>Copy</Text>
          </Button>
        </Box>
      </ScaleFade>
    </Box>
  );
};

export default Share;
