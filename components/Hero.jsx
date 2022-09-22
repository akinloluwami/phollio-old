import { Box, Button, Center, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [username, setUsername] = useState("");
  return (
    <Center>
      <Box mt={5}>
        <Text textAlign={"center"} fontSize={"60px"} fontWeight={"extrabold"}>
          Showcase your projects <br /> with style
        </Text>
        <Text textAlign={"center"} fontSize={"20"} mt={2}>
          Easily share your social link, project, or any link with your
          visitors.
        </Text>
        <Center>
          <Flex
            mt={8}
            alignItems={"center"}
            gap={2}
            backgroundColor={"rgba(0,0,0,0.2)"}
            p={3.5}
            borderRadius={"200"}
          >
            <Flex alignItems={"center"}>
              <Text fontSize={"xl"}>phollio.com/</Text>
              <Input
                placeholder="yourname"
                pl={1}
                fontSize={"xl"}
                autoFocus={true}
                ml={0.5}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </Flex>
            <Link href={`signup?username=${username}`}>
              <Button
                size={"md"}
                backgroundColor={"brand.accent"}
                borderRadius={"3xl"}
              >
                Start my page
              </Button>
            </Link>
          </Flex>
        </Center>
      </Box>
    </Center>
  );
};

export default Hero;
