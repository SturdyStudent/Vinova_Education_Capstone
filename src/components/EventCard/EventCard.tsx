import { Container, Box, Typography, Button, styled } from "@mui/material";

import CircleIcon from "@mui/icons-material/Circle";
import { IEventCard } from "../../services/interface";
import LocationIcon from "../../assets/icons/location.svg";

function EventCard({
  avatar,
  smallLogo,
  brandName,
  courseTitle,
  date,
  from,
  to,
}: IEventCard) {
  const EventCardContainer = styled(Container)(() => ({
    width: "100%",
    borderRadius: "16px",
    background: "#FFF",
    padding: "8px !important",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)",
    textAlign: "right",
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
  const ActionButton = styled(Button)(() => ({
    height: "36px",
    borderRadius: "8px",
    background: "#FDC600",
    padding: "8px 14px",
  }));

  return (
    <EventCardContainer>
      <CardRow>
        <CardAvatar>
          <img src={avatar} alt="" className="object-cover w-full h-full" />
        </CardAvatar>
        <DetailContainer>
          <Box className="flex items-center gap-2 mb-1" width={"100%"}>
            <LogoContainer>
              <img
                src={smallLogo}
                alt=""
                className="object-fill w-full h-full"
              />
            </LogoContainer>
            <Typography fontSize={"10px"} fontWeight={600} lineHeight={"16px"}>
              {brandName}
            </Typography>
          </Box>
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
          <Box className="flex gap-2 items-center mt-2" width={"100%"}>
            <Typography fontSize={"12px"} lineHeight={"18px"} color={"#808080"}>
              {date?.toLocaleDateString()}
            </Typography>
            <CircleIcon
              sx={{ width: "4px", color: "#808080", height: "4px" }}
            />
            <Typography fontSize={"12px"} lineHeight={"18px"} color={"#808080"}>
              {from} - {to}
            </Typography>
          </Box>
          <Box className="flex gap-2 items-center mt-1" width={"100%"}>
            <img src={LocationIcon} width={"16px"} height="16px" />
            <Typography fontSize={"12px"} lineHeight={"18px"} color={"#808080"}>
              Cape Town - CITCC
            </Typography>
          </Box>
        </DetailContainer>
      </CardRow>
      <ActionButton>
        <Typography
          fontSize={"14px"}
          lineHeight={"20px"}
          fontWeight={600}
          color={"#000"}
          textTransform={"none"}
        >
          Register
        </Typography>
      </ActionButton>
    </EventCardContainer>
  );
}

export default EventCard;
