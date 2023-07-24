import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Avatar,
  Typography,
  Drawer,
  styled,
  Stack,
  ListItemText,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import { useState } from "react";
import { useHeaderStyles } from "./HeaderStyles";
import ProfileImg from "../../assets/img/profile_img.png";
import SearchIcon from "../../assets/icons/search.svg";
import MessageIcon from "../../assets/icons/Messenger.svg";
import JustifyAlignIcon from "../../assets/icons/align-justify.svg";
import LevelBadge from "../LevelBadge/LevelBadge";
import CheckIcon from "../../assets/icons/check.svg";
import FlowerIcon from "../../assets/icons/blueFlowerIcon.svg";
import CircleIcon from "@mui/icons-material/Circle";
import {
  UserIcon,
  DashboardIcon,
  CalendarIcon,
  SingleUserIcon,
  LogoutIcon,
  HelpIcon,
  SettingIcon,
  BookIcon,
  BookmarkIcon,
  NotificationIcon,
} from "../../assets/icons";

function Header() {
  const classes = useHeaderStyles();
  const [openNavbar, setOpenNavbar] = useState<boolean>();

  const drawerItemList = [
    {
      icon: SingleUserIcon,
      label: "My Profile",
    },
    {
      icon: DashboardIcon,
      label: "Dashboard",
    },
    {
      icon: NotificationIcon,
      label: "Notifications",
    },
    {
      icon: CalendarIcon,
      label: "My Events",
    },
    {
      icon: BookmarkIcon,
      label: "My Bookmarks",
    },
    {
      icon: UserIcon,
      label: "My Groups",
    },
    {
      icon: SettingIcon,
      label: "Account Settings",
    },
    {
      icon: HelpIcon,
      label: "Help & Support",
    },
    {
      icon: BookIcon,
      label: "Community Guidelines",
    },
    {
      icon: LogoutIcon,
      label: "Log out",
    },
  ];

  const CoursesCardContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "108px",
    height: "253px",
    padding: "8px",
    gap: "8px",
    borderRadius: "16px",
    background: "#FFF",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)",
  }));
  const AppDrawer = styled(Drawer)(() => ({
    position: "relative", //imp
    width: "252px !important",
  }));
  const DetailContainer = styled(Box)(() => ({
    background: "black",
    display: "flex",
    flexDirection: "column",
    color: "white",
    gap: "30px",
    padding: "24px 16px 14px 16px",
    borderRadius: "0 0px 16px 16px",
  }));

  return (
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
      <AppDrawer
        anchor="left"
        open={openNavbar}
        PaperProps={{ className: classes.drawer }}
        onClose={() => setOpenNavbar(false)}
      >
        <DetailContainer>
          <div className="flex gap-2">
            <Avatar
              alt="profile_img"
              sx={{ width: "56px", height: "56px", border: "2px solid white" }}
              src={ProfileImg}
            />
            <Box className="flex flex-col">
              <div className="flex gap-2">
                <Typography fontWeight={600} fontSize={"18px"}>
                  Lisa Dlamini
                </Typography>
                <Stack position={"relative"}>
                  <img src={FlowerIcon} width={"24px"} height={"24px"} />
                  <img
                    src={CheckIcon}
                    width={"20px"}
                    height={"20px"}
                    className="absolute"
                    style={{ top: "2px", right: "2px" }}
                  />
                </Stack>
              </div>
              <Typography
                fontWeight={600}
                fontSize={"14px"}
                lineHeight={"20px"}
              >
                Lisa's Bags
              </Typography>
              <Typography
                fontSize={"12px"}
                lineHeight={"18px"}
                className="mt-1"
              >
                Apparel & Fashion
              </Typography>
            </Box>
          </div>
          <Typography fontSize={"14px"} fontWeight={600} lineHeight={"20px"}>
            220 Followers{" "}
            <span>
              {" "}
              <CircleIcon
                sx={{ width: "4px", height: "4px", color: "white" }}
              />{" "}
            </span>{" "}
            150 Following
          </Typography>
        </DetailContainer>
        <List>
          {drawerItemList &&
            drawerItemList.map((item) => (
              <>
                <ListItem>
                  <span>
                    <img src={item.icon} />
                  </span>
                  <ListItemText>
                    <Typography
                      paddingLeft={"8px"}
                      lineHeight={"20px"}
                      fontSize={"14px"}
                    >
                      {item.label}
                    </Typography>
                  </ListItemText>
                </ListItem>
                <Divider />
              </>
            ))}
        </List>
      </AppDrawer>
      <Box height={"8px"} />
      <LevelBadge />
      <Box height={"8px"} />
    </AppBar>
  );
}

export default Header;
