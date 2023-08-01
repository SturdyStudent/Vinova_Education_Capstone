import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Avatar,
  Typography,
  styled,
} from "@mui/material";
import { useState, useEffect } from "react";

import ProfileImg from "../../assets/img/profile_img.png";
import SearchIcon from "../../assets/icons/search.svg";
import MessageIcon from "../../assets/icons/Messenger.svg";
import JustifyAlignIcon from "../../assets/icons/alignJustify.svg";
import LevelBadge from "../LevelBadge/LevelBadge";
import AppDrawer from "../AppDrawer/AppDrawer";

const StyledAppbar = styled(AppBar)(() => ({
  position: "relative !important" as "relative",
  padding: "28px 16px 10px 16px !important" as "padding",
  top: 0,
  left: 0,
  right: 0,
  color: "#808080",
}));

function Header() {
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);

  useEffect(() => setOpenNavbar(openNavbar), [openNavbar]);

  return (
    <>
      <StyledAppbar>
        <Toolbar sx={{ padding: "0 !important" }}>
          <IconButton
            sx={{ padding: "0 !important", marginRight: "10px" }}
            onClick={() => setOpenNavbar(true)}
          >
            <img className="w-62 h-6" src={JustifyAlignIcon} alt="hamburger" />
          </IconButton>
          <Avatar
            alt="profile_img"
            sx={{ width: "56px", height: "56px" }}
            src={ProfileImg}
          />
          <Box className={"flex-grow text-left ml-4"}>
            <Typography fontSize={"16px"} lineHeight={"24px"}>
              Hello,
            </Typography>
            <Typography fontSize={"20px"} fontWeight={600} lineHeight={"30px"}>
              Lisa
            </Typography>
          </Box>
          <Box className={"h-14 flex gap-4 items-start"}>
            <IconButton sx={{ padding: "0 !important" }}>
              <img className="w-62 h-6" src={SearchIcon} alt="search" />
            </IconButton>
            <IconButton sx={{ padding: "0 !important" }}>
              <img src={MessageIcon} alt="message" />
            </IconButton>
          </Box>
        </Toolbar>

        <Box height={"8px"} />
        <LevelBadge />
        <Box height={"8px"} />
      </StyledAppbar>
      <AppDrawer openNavBar={openNavbar} setOpenNavbar={setOpenNavbar} />
    </>
  );
}

export default Header;
