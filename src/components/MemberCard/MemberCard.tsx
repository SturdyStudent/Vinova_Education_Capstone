import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  styled,
  Avatar,
} from "@mui/material";
import BackgroundPanel1 from "../../assets/img/member_bg_1.png";
import UserAvatar1 from "../../assets/img/member-1.jpg";

interface IMemberCard {
  backgroundPanel?: string;
  profilePic?: string;
  memberName?: string;
  companyName?: string;
  industry?: string;
}

function MemberCard({
  backgroundPanel,
  profilePic,
  memberName,
  companyName,
  industry,
}: IMemberCard) {
  const MemberCardContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "158px",
    padding: "8px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    borderRadius: "16px",
    background: "#FFF",
    /* Shadow 1 */
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)",
  }));
  const MemberBackgroundPanel = styled(Box)(() => ({
    width: "142px",
    height: "115px",
    flexShrink: "0",
    position: "relative",
    display: "flex",
    justifyContent: "center",
  }));
  const AvatarContainer = styled(Avatar)(() => ({
    width: "68px",
    height: "68px",
    flexShrink: 0,
    borderRadius: "50%",
    position: "absolute",
    bottom: "-34px",
    margin: "0 auto",
    background: "#FFF",
    filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.10))",
  }));
  const FollowButton = styled(Button)(() => ({
    display: "flex",
    width: "102px",
    alignItems: "flex-start",
    borderRadius: "8px",
    background: "#FDC600",
    textTransform: "none",
  }));

  return (
    <MemberCardContainer>
      <MemberBackgroundPanel>
        <img src={backgroundPanel} className="object-fill w-full h-full" />
        <AvatarContainer>
          <Avatar
            src={profilePic}
            alt=".."
            className="object-cover"
            sx={{ width: "87%", height: "87%" }}
          />
        </AvatarContainer>
      </MemberBackgroundPanel>
      <Box sx={{ height: "30px" }} />
      <Typography
        fontWeight={600}
        fontSize="14px"
        lineHeight="20px"
        color={"#333333"}
      >
        {memberName}
      </Typography>
      <Typography
        color={"#808080"}
        fontSize={"12px"}
        fontWeight={500}
        lineHeight={"18px"}
      >
        {companyName}
      </Typography>
      <Typography
        color="#808080"
        fontSize={"10px"}
        fontWeight={400}
        lineHeight={"16px"}
      >
        {industry}
      </Typography>
      <FollowButton>
        <Typography color={"black"} fontWeight={600}>
          Follow
        </Typography>
      </FollowButton>
    </MemberCardContainer>
  );
}

export default MemberCard;
