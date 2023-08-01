import { Box, styled, Avatar, Stack, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import ProfileImg from "../../../assets/img/profile_img.png";
import { CheckIcon, FlowerIcon } from "../../../assets/icons/index";

const DetailContainer = styled(Box)(() => ({
  background: "black",
  display: "flex",
  flexDirection: "column",
  color: "white",
  gap: "30px",
  padding: "24px 16px 14px 16px",
  borderRadius: "0 0px 16px 16px",
}));

function DrawerHeader() {
  return (
    <DetailContainer>
      <div className="flex gap-2">
        <Avatar
          alt="profile_img"
          sx={{ width: "56px", height: "56px", border: "2px solid white" }}
          src={ProfileImg}
        />
        <Stack>
          <Box display={"flex"} gap={"8px"}>
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
          </Box>
          <Typography fontWeight={600} fontSize={"14px"} lineHeight={"20px"}>
            Lisa's Bags
          </Typography>
          <Typography fontSize={"12px"} lineHeight={"18px"} className="mt-1">
            Apparel & Fashion
          </Typography>
        </Stack>
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
  );
}

export default DrawerHeader;
