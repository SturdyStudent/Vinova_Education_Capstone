import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  styled,
  Avatar,
} from "@mui/material";

import ClockIcon from "../../assets/icons/clock.svg";

interface ICoursesCard {
  avatar?: string;
  smallLogo?: string;
  brandName?: string;
  courseTitle?: string;
  duration?: string;
  isArticle?: boolean;
  summary?: string;
}

function CoursesCard({
  avatar,
  smallLogo,
  brandName,
  courseTitle,
  duration,
  isArticle,
  summary,
}: ICoursesCard) {
  const CoursesCardContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: isArticle ? "158px" : "108px",
    height: isArticle ? "331px" : "253px",
    padding: "8px",
    gap: "8px",
    borderRadius: "16px",
    background: "#FFF",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)",
  }));
  const CardAvatar = styled(Box)(() => ({
    width: isArticle ? "100%" : "100px",
    height: isArticle ? "135px" : "100px",
    borderRadius: "8px",
    overflow: "hidden",
  }));
  const LogoContainer = styled(Box)(() => ({
    width: "24px",
    height: "24px",
    border: "1.5px solid #e6e6e6",
    borderRadius: "50%",
    overflow: "hidden",
  }));
  const ActionButton = styled(Button)(() => ({
    height: "36px",
    borderRadius: "8px",
    width: "100%",
    background: "#FDC600",
    padding: "8px 4px",
  }));

  return (
    <CoursesCardContainer>
      <CardAvatar>
        <img src={avatar} alt="" className="object-cover w-full h-full" />
      </CardAvatar>
      <Box
        className={`flex items-center ${isArticle ? "gap-3" : "gap-1"}`}
        width={"100%"}
      >
        <LogoContainer>
          <img src={smallLogo} alt="" className="object-fill w-full h-full" />
        </LogoContainer>
        <Typography fontSize={"10px"} fontWeight={600} lineHeight={"16px"}>
          {brandName}
        </Typography>
      </Box>
      <Typography
        fontSize={"14px"}
        fontWeight={600}
        color={"#1A1A1A"}
        lineHeight={"20px"}
        textOverflow={"ellipsis"}
        display={"-webkit-box"}
        textAlign={"left"}
        sx={{
          WebkitLineClamp: "2",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          lineBreak: "anywhere",
        }}
      >
        {courseTitle}
      </Typography>
      <Typography
        fontSize={"12px"}
        lineHeight={"18px"}
        textOverflow={"ellipsis"}
        display={"-webkit-box"}
        sx={{
          WebkitLineClamp: "3",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          lineBreak: "anywhere",
        }}
      >
        {isArticle
          ? " Empowering SME Businesses Strategies for Success in a Challenging Environment"
          : ""}
        {summary}
      </Typography>
      <Box className="flex gap-2 items-center" width={"100%"}>
        <Box width={"14px"} height={"14px"}>
          <img src={ClockIcon} alt="" className="object-fill w-full h-full" />
        </Box>
        <Typography fontSize={"12px"} lineHeight={"18px"} color={"#808080"}>
          {duration}
        </Typography>
      </Box>
      {isArticle ? (
        ""
      ) : (
        <ActionButton>
          <Typography
            fontSize={"13px"}
            fontWeight={600}
            lineHeight={"20px"}
            textTransform={"none"}
          >
            Take course
          </Typography>
        </ActionButton>
      )}
    </CoursesCardContainer>
  );
}

export default CoursesCard;
