import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  styled,
  Chip,
} from "@mui/material";

import ClockIcon from "../../assets/icons/clock.svg";
import CircleIcon from "@mui/icons-material/Circle";
import YoutubeIcon from "../../assets/icons/youtube.svg";

interface IArticleCard {
  avatar?: string;
  smallLogo?: string;
  brandName?: string;
  courseTitle?: string;
  duration?: number;
  isCourse?: boolean;
}

function ArticleCard({
  avatar,
  smallLogo,
  brandName,
  courseTitle,
  duration,
  isCourse,
}: IArticleCard) {
  const ArticleCardContainer = styled(Container)(() => ({
    width: "100%",
    borderRadius: "16px",
    background: "#FFF",
    padding: "16px !important",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)",
    textAlign: "right",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  }));
  const CardRow = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "start",
    width: "100%",
    gap: "16px",
    marginBottom: "8px",
  }));
  const DetailContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
  }));
  const CardAvatar = styled(Box)(() => ({
    width: "64px",
    height: "64px",
    minWidth: "64px",
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
    background: "#FDC600",
    padding: "8px 14px",
  }));

  return (
    <ArticleCardContainer>
      {isCourse ? (
        ""
      ) : (
        <Box className="flex items-center gap-3 mb-1" width={"100%"}>
          <LogoContainer>
            <img src={smallLogo} alt="" className="object-fill w-full h-full" />
          </LogoContainer>
          <Typography fontSize={"10px"} fontWeight={600} lineHeight={"16px"}>
            {brandName}
          </Typography>
        </Box>
      )}
      <CardRow>
        <CardAvatar>
          <img src={avatar} alt="" className="object-cover w-full h-full" />
        </CardAvatar>
        <DetailContainer>
          {isCourse ? (
            <Box className="flex items-center gap-3 mb-1" width={"100%"}>
              <LogoContainer>
                <img
                  src={smallLogo}
                  alt=""
                  className="object-fill w-full h-full"
                />
              </LogoContainer>
              <Typography
                fontSize={"12px"}
                fontWeight={600}
                lineHeight={"16px"}
              >
                {brandName}
              </Typography>
            </Box>
          ) : (
            ""
          )}
          <Typography
            fontSize={"12px"}
            fontWeight={600}
            color={"#1A1A1A"}
            lineHeight={"18px"}
            textOverflow={"ellipsis"}
            display={"-webkit-box"}
            textAlign={"left"}
            sx={{
              WebkitLineClamp: "3",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {courseTitle}
          </Typography>
          {isCourse ? (
            <Typography
              color={"#CCA000"}
              fontSize={"12px"}
              fontWeight={600}
              textAlign={"left"}
              lineHeight={"18px"}
              marginTop={"4px"}
            >
              Accounting
            </Typography>
          ) : (
            ""
          )}

          <Box className="flex gap-2 items-center mt-1" width={"100%"}>
            <img src={ClockIcon} width={"16px"} height="16px" />
            <Typography fontSize={"12px"} lineHeight={"18px"} color={"#808080"}>
              {duration} mins {isCourse ? "" : "read"}
            </Typography>
            {isCourse ? (
              <>
                <img src={YoutubeIcon} width={"16px"} height="16px" />
                <Typography
                  fontSize={"12px"}
                  lineHeight={"18px"}
                  color={"#808080"}
                >
                  4 Videos
                </Typography>
              </>
            ) : (
              ""
            )}
          </Box>
        </DetailContainer>
      </CardRow>
    </ArticleCardContainer>
  );
}

export default ArticleCard;
