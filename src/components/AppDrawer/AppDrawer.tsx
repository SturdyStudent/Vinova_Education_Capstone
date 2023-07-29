import { useEffect } from "react";
import {
  Box,
  Typography,
  styled,
  Drawer,
  Avatar,
  Stack,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { ReactSVG } from "react-svg";
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

import ClockIcon from "../../assets/icons/clock.svg";
import { useHeaderStyles } from "../Header/HeaderStyles";
import ProfileImg from "../../assets/img/profile_img.png";
interface IAppDrawer {
  openNavBar?: boolean;
  setOpenNavbar: OpenDrawerFunction;
}
type OpenDrawerFunction = (isOpen: boolean) => void;
function AppDrawer({ openNavBar, setOpenNavbar }: IAppDrawer) {
  const classes = useHeaderStyles();
  const AppDrawer = styled(Drawer)(() => ({
    position: "relative", //imp
    width: "252px !important",
    color: "#808080",
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

  return (
    <AppDrawer
      anchor="left"
      open={openNavBar}
      PaperProps={{
        className: classes.drawer,
        style: {
          color: "#808080",
          borderRadius: "0 10px 10px 0",
        },
      }}
      transitionDuration={{ appear: 500, enter: 500, exit: 500 }}
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
            <Typography fontWeight={600} fontSize={"14px"} lineHeight={"20px"}>
              Lisa's Bags
            </Typography>
            <Typography fontSize={"12px"} lineHeight={"18px"} className="mt-1">
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
                  <ReactSVG src={item.icon} />
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
  );
}

export default AppDrawer;
