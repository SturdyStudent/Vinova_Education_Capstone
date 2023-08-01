import { Container, Box, Typography, styled, Stack } from "@mui/material";

import ClockIcon from "../../assets/icons/clock.svg";
import YoutubeIcon from "../../assets/icons/youtube.svg";
import { IArticleCard } from "../../services/interface";
import TitleText from "../TitleText/TitleText";

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
const CardRow = styled(Box)(() => ({
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

function ArticleCard({
  avatar,
  smallLogo,
  brandName,
  courseTitle,
  duration,
  isCourse,
  industry,
}: IArticleCard) {
  return (
    <ArticleCardContainer>
      {isCourse ? (
        ""
      ) : (
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          gap={"12px"}
          marginBottom={"4px"}
          width={"100%"}
        >
          <LogoContainer>
            <img src={smallLogo} alt="" className="object-fill w-full h-full" />
          </LogoContainer>
          <Typography fontSize={"10px"} fontWeight={600} lineHeight={"16px"}>
            {brandName}
          </Typography>
        </Stack>
      )}
      <CardRow>
        <CardAvatar>
          <img src={avatar} alt="" className="object-cover w-full h-full" />
        </CardAvatar>
        <DetailContainer>
          {isCourse ? (
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              gap={"12px"}
              marginBottom={"4px"}
              width={"100%"}
            >
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
            </Stack>
          ) : (
            ""
          )}
          <TitleText fontSize={"12px"} lineNumber={3} lineHeight={"18px"}>
            {courseTitle}
          </TitleText>
          {isCourse ? (
            <Typography
              color={"#CCA000"}
              fontSize={"12px"}
              fontWeight={600}
              textAlign={"left"}
              lineHeight={"18px"}
              marginTop={"4px"}
            >
              {industry}
            </Typography>
          ) : (
            ""
          )}

          <Stack
            flexDirection={"row"}
            gap={"8px"}
            alignItems={"center"}
            marginTop={"4px"}
            width={"100%"}
          >
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
          </Stack>
        </DetailContainer>
      </CardRow>
    </ArticleCardContainer>
  );
}

export default ArticleCard;
