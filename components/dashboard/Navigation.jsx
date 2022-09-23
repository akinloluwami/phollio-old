import { Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Links from "../../utils/navigationLinks";

const Navigation = () => {
  return (
    <Flex gap={5} boxShadow="base" py={2}>
      {Links.map((link, i) => (
        <Link key={i} href={"/dashboard" + link.route}>
          <Button backgroundColor={"transparent"} size="md">
            <Text fontSize={"md"} fontWeight={"light"}>
              {link.title}
            </Text>
          </Button>
        </Link>
      ))}
    </Flex>
  );
};

export default Navigation;
