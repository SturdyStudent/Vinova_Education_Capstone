import { Container, Box, Typography, Stack, styled } from "@mui/material";

import CircleIcon from "@mui/icons-material/Circle";
import { IEventCard } from "../../services/interface";
import LocationIcon from "../../assets/icons/location.svg";
import YellowButton from "../YellowStyledButton/YellowButton";

const EventCardContainer = styled(Container)(() => ({
  width: "100%",
  borderRadius: "16px",
  background: "#FFF",
  padding: "8px !important",
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)",
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
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
  width: "100px",
  height: "100px",
  borderRadius: "8px",
  overflow: "hidden",
}));
const LogoContainer = styled(Box)(() => ({
  width: "16px",
  height: "16px",
  border: "1.5px solid #e6e6e6",
  borderRadius: "50%",
  overflow: "hidden",
}));

function EventCard({
  avatar,
  smallLogo,
  brandName,
  courseTitle,
  date,
  from,
  to,
}: IEventCard) {
  return (
    <EventCardContainer>
      <CardRow>
        <CardAvatar>
          <img src={avatar} alt="" className="object-cover w-full h-full" />
        </CardAvatar>
        <DetailContainer>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            gap={"8px"}
            marginBottom={"4px"}
          >
            <LogoContainer>
              <img
                src={smallLogo}
                alt=""
                className="object-fill w-full h-full"
              />
            </LogoContainer>
            <Typography
              fontSize={"10px"}
              color={"black"}
              fontWeight={600}
              lineHeight={"16px"}
            >
              {brandName}
            </Typography>
          </Stack>
          <Typography
            fontSize={"16px"}
            fontWeight={600}
            color={"#1A1A1A"}
            lineHeight={"24px"}
            textOverflow={"ellipsis"}
            display={"-webkit-box"}
            textAlign={"left"}
            sx={{
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {courseTitle}
          </Typography>
          <Stack
            flexDirection={"row"}
            gap={"8px"}
            alignItems={"center"}
            marginTop={"8px"}
            width={"100%"}
          >
            <Typography fontSize={"12px"} lineHeight={"18px"} color={"#808080"}>
              {date?.toLocaleDateString()}
            </Typography>
            <CircleIcon
              sx={{ width: "4px", color: "#808080", height: "4px" }}
            />
            <Typography fontSize={"12px"} lineHeight={"18px"} color={"#808080"}>
              {from} - {to}
            </Typography>
          </Stack>
          <Stack
            flexDirection={"row"}
            gap={"8px"}
            alignItems={"center"}
            marginTop={"4px"}
            width={"100%"}
          >
            <img src={LocationIcon} width={"16px"} height="16px" />
            <Typography fontSize={"12px"} lineHeight={"18px"} color={"#808080"}>
              Cape Town - CITCC
            </Typography>
          </Stack>
        </DetailContainer>
      </CardRow>
      <Box className="w-min">
        <YellowButton fontSize="14px">Register</YellowButton>
      </Box>
    </EventCardContainer>
  );
}

export default EventCard;
