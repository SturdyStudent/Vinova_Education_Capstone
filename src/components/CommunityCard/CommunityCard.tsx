import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  styled,
  Avatar,
} from "@mui/material";

import UserAvatar1 from "../../assets/img/member-1.jpg";
import { ICommunityCard } from "../../services/interface";

function CommunityCard({ logo, communityName }: ICommunityCard) {
  const CommunityCardContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
  }));
  const CardLogo = styled(Box)(() => ({
    width: "100px",
    height: "100px",
    border: "2px solid #f2f2f2",
    borderRadius: "20px",
    boxShadow: "0px 0px 0px 2px #f2f2f2 inset",
    overflow: "hidden",
  }));

  return (
    <CommunityCardContainer className="carousel-item">
      <CardLogo>
        <img src={logo} alt="" className="object-cover w-full h-full" />
      </CardLogo>
      <Typography
        fontSize={"16px"}
        fontWeight={600}
        color={"black"}
        lineHeight={"24px"}
      >
        {communityName}
      </Typography>
    </CommunityCardContainer>
  );
}

export default CommunityCard;
