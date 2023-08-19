import { Box, Typography, styled, Avatar } from "@mui/material";

import { IMemberCard } from "../../services/interface";
import YellowButton from "../YellowStyledButton/YellowButton";
import TitleText from "../TitleText/TitleText";

const MemberCardContainer = styled(Box)(() => ({
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

function MemberCard({
  backgroundPanel,
  profilePic,
  memberName,
  companyName,
  industry,
}: IMemberCard) {
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
      <TitleText
        children={memberName}
        fontSize="14px"
        lineHeight="20px"
        lineNumber={2}
      />
      <TitleText
        color={"#808080"}
        lineNumber={2}
        fontSize={"12px"}
        lineHeight={"18px"}
      >
        {companyName}
      </TitleText>
      <TitleText
        color="#808080"
        lineNumber={1}
        fontSize={"10px"}
        lineHeight={"16px"}
      >
        {industry}{" "}
      </TitleText>
      <Box width={"102px"}>
        <YellowButton fontSize="16px">Follow</YellowButton>
      </Box>
    </MemberCardContainer>
  );
}

export default MemberCard;
