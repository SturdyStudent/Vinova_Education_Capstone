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
import { ICourseCard } from "../../services/interface";

function CoursesCard({
  avatar,
  smallLogo,
  brandName,
  courseTitle,
  duration,
  isArticle,
  isEducationCourse,
  summary,
}: ICourseCard) {
  const isEducationTab = isArticle || isEducationCourse;
  const CoursesCardContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: isEducationTab ? "158px" : "108px",
    height: isArticle ? "331px" : isEducationCourse ? "290px" : "269px",
    padding: "8px",
    gap: "8px",
    borderRadius: "16px",
    background: "#FFF",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)",
  }));
  const CardAvatar = styled(Box)(() => ({
    width: isEducationTab ? "100%" : "100px",
    height: isEducationTab ? "135px" : "100px",
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
        className={`flex items-center ${isEducationTab ? "gap-3" : "gap-1"}`}
        width={"100%"}
      >
        <LogoContainer>
          <img src={smallLogo} alt="" className="object-fill w-full h-full" />
        </LogoContainer>
        <Typography fontSize={"10px"} fontWeight={600} lineHeight={"16px"}>
          {brandName}
        </Typography>
      </Box>
      {isEducationCourse ? (
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
          {courseTitle} - {<span style={{ fontWeight: "400" }}>{summary}</span>}
        </Typography>
      ) : (
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
          {courseTitle}{" "}
        </Typography>
      )}

      <Typography
        fontSize={"12px"}
        lineHeight={"18px"}
        textOverflow={"ellipsis"}
        display={isEducationCourse ? "none" : "-webkit-box"}
        sx={{
          WebkitLineClamp: "3",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {summary}
      </Typography>
      {isEducationCourse ? (
        <Typography
          color={"#CCA000"}
          fontSize={"12px"}
          fontWeight={600}
          textAlign={"left"}
          width={"100%"}
          lineHeight={"18px"}
        >
          Digital Marketing
        </Typography>
      ) : (
        ""
      )}
      <Box className="flex gap-2 items-center" width={"100%"}>
        <Box width={"14px"} height={"14px"}>
          <img src={ClockIcon} alt="" className="object-fill w-full h-full" />
        </Box>
        <Typography fontSize={"12px"} lineHeight={"18px"} color={"#808080"}>
          {duration} mins
        </Typography>
      </Box>
      {isEducationTab ? (
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
