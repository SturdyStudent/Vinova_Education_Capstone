import React from "react";
import { Box, Typography, styled, Button } from "@mui/material";
import Group1 from "../../assets/img/group-1.png";
import SmallLogo1 from "../../assets/img/smallLogo1.jpg";

function EventItem() {
  const ItemContainer = styled(Box)(({ theme }) => ({
    padding: "0px !important",
    background: "white",
    height: "76px",
    color: "black",
    display: "flex",
    gap: "8px",
    alignItems: "center",
  }));
  const LogoContainer = styled(Box)(() => ({
    width: "16px",
    height: "16px",
    border: "1.5px solid #e6e6e6",
    borderRadius: "50%",
    overflow: "hidden",
  }));
  const RegisterButton = styled(Button)(() => ({
    background: "#FDC600",
    height: "32px",
    width: "88px",
    borderRadius: "8px",
    textTransform: "none",
  }));
  const PictureContainer = styled(Box)(() => ({
    width: "76px",
    height: "76px",
    borderRadius: "20px",
    overflow: "hidden",
  }));

  return (
    <ItemContainer>
      <PictureContainer>
        <img src={Group1} className="object-fill h-full w-full" />
      </PictureContainer>
      <Box className={"flex flex-col gap-2 flex-1"}>
        <Box className="flex items-center gap-2 mb-1" width={"100%"}>
          <LogoContainer>
            <img
              src={SmallLogo1}
              alt=""
              className="object-fill w-full h-full"
            />
          </LogoContainer>
          <Typography fontSize={"10px"} fontWeight={600} lineHeight={"16px"}>
            BrownSense
          </Typography>
        </Box>
        <Typography
          fontSize={"16px"}
          fontWeight={600}
          lineHeight={"24px"}
          textOverflow={"ellipsis"}
          display={"-webkit-box"}
          textAlign={"left"}
          sx={{
            WebkitLineClamp: "1",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            lineBreak: "anywhere",
          }}
        >
          The Cosmetic Chef
        </Typography>
        {/* <Typography fontSize={"14px"} fontWeight={550} lineHeight={"20px"}>
          1.6K members
        </Typography> */}
        <Typography fontSize={"12px"} fontWeight={400} lineHeight={"18px"}>
          21 April 2023
        </Typography>
      </Box>
      <RegisterButton>
        <Typography fontSize={"14px"} fontWeight={600} lineHeight={"20px"}>
          Follow
        </Typography>
      </RegisterButton>
    </ItemContainer>
  );
}

export default EventItem;
