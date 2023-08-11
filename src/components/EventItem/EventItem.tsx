import { Box, Typography, styled, Button } from "@mui/material";
import { IEventItem } from "../../services/interface";
import YellowButton from "../YellowStyledButton/YellowButton";

const ItemContainer = styled(Box)(() => ({
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

function EventItem({
  isGroup,
  memberAmount,
  eventDate,
  organizationName,
  avatar,
  smallLogo,
}: IEventItem) {
  return (
    <ItemContainer>
      <PictureContainer>
        <img src={avatar} className="object-fill h-full w-full" />
      </PictureContainer>
      <Box className={"flex flex-col gap-2 flex-1"}>
        {isGroup ? null : (
          <Box className="flex items-center gap-2 mb-1" width={"100%"}>
            <LogoContainer>
              <img
                src={smallLogo}
                alt=""
                className="object-fill w-full h-full"
              />
            </LogoContainer>
            <Typography fontSize={"10px"} fontWeight={600} lineHeight={"16px"}>
              {organizationName}
            </Typography>
          </Box>
        )}

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
          {organizationName}
        </Typography>
        {isGroup ? (
          <Typography fontSize={"14px"} fontWeight={550} lineHeight={"20px"}>
            {memberAmount}K members
          </Typography>
        ) : (
          <Typography fontSize={"12px"} fontWeight={400} lineHeight={"18px"}>
            {eventDate?.toLocaleDateString()}
          </Typography>
        )}
        <Typography
          zIndex={1}
          fontSize={"12px"}
          fontWeight={400}
          lineHeight={"18px"}
        >
          {eventDate?.toLocaleDateString().split(" ").slice(0, -1).join(" ")}
        </Typography>
      </Box>
      <Box sx={{ height: "32px", width: "88px" }}>
        <YellowButton padding="6px 8px" setFollow={true}>
          {isGroup ? "Follow" : "Register"}
        </YellowButton>
      </Box>
    </ItemContainer>
  );
}

export default EventItem;
