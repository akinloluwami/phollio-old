import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";

const Navbar = () => {
  const [pathname, setPathname] = useState("");
  const router = useRouter();

  useEffect(() => {
    setPathname(router.pathname);
  }, []);
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      px={"40"}
      py={"5"}
    >
      <Logo />
      <Flex alignItems={"center"} gap={4}>
        {pathname === "/login" ? (
          <Text fontWeight={"bold"} cursor={"pointer"}>
            New to Phollio?
          </Text>
        ) : pathname === "/signup" ? (
          <Text fontWeight={"bold"} cursor={"pointer"}>
            Already have an account?
          </Text>
        ) : (
          <Link href={"/login"}>
            <Text fontWeight={"bold"} cursor={"pointer"}>
              Login
            </Text>
          </Link>
        )}
        {pathname !== "/signup" ? (
          <Link href={"/signup"}>
            <Button
              backgroundColor={"brand.accent"}
              borderRadius={"3xl"}
              _hover={{
                opacity: 0.8,
              }}
            >
              Sign Up
            </Button>
          </Link>
        ) : (
          <Link href={"/login"}>
            <Button
              backgroundColor={"brand.accent"}
              borderRadius={"3xl"}
              _hover={{
                opacity: 0.8,
              }}
            >
              Login
            </Button>
          </Link>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
