import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Avatar,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useHeaderStyles } from "./HeaderStyles";
import ProfileImg from "../../assets/img/profile_img.png";
import SearchIcon from "../../assets/icons/search.svg";
import MessageIcon from "../../assets/icons/Messenger.svg";
import JustifyAlignIcon from "../../assets/icons/align-justify.svg";
import LevelBadge from "../LevelBadge/LevelBadge";
import AppDrawer from "../AppDrawer/AppDrawer";

function Header() {
  const classes = useHeaderStyles();
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);

  useEffect(() => setOpenNavbar(openNavbar), [openNavbar]);

  return (
    <>
      <AppBar className={classes.headerContaier}>
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
      </AppBar>
      <AppDrawer openNavBar={openNavbar} setOpenNavbar={setOpenNavbar} />
    </>
  );
}

export default Header;
