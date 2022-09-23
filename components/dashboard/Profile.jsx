import {
  Avatar,
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { RiFlashlightLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
const Profile = () => {
  return (
    <Menu size={"lg"}>
      <MenuButton>
        <Avatar size={"md"} />
      </MenuButton>
      <MenuList>
        <MenuGroup title="@akinkunmi">
          <MenuItem>
            <Icon as={CgProfile} mr={2} w={5} h={5} />
            My Account
          </MenuItem>
          <MenuItem>
            <Icon
              as={RiFlashlightLine}
              color="brand.accent"
              mr={2}
              size={50}
              w={5}
              h={5}
            />
            Upgrade to Pro
          </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup>
          <MenuItem>
            <Icon as={IoIosLogOut} mr={2} w={5} h={5} />
            Logout
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default Profile;
