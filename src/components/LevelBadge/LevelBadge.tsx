import { Typography, styled, Button, Stack } from "@mui/material";
import BadgeIcon from "../../assets/img/gold_badge.png";

const UpdateButton = styled(Button)(() => ({
  background: "white",
  border: "1px solid #CCA000",
  padding: "8px 14px",
  borderRadius: "8px",
  textTransform: "none",
}));

function LevelBadge() {
  return (
    <Stack
      bgcolor={"rgba(255, 255, 255, 0.50)"}
      padding={"8px 12px"}
      borderRadius={"8px"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Stack flexDirection={"row"} flex={"1 1 0%"} alignItems={"center"}>
        <img src={BadgeIcon} width={"28px"} height={"28px"} />
        <Typography paddingLeft={"16px"} color={"white"} fontSize={"16px"}>
          Basic Level
        </Typography>
      </Stack>
      <UpdateButton>
        <Typography color={"#CCA000"} fontWeight={600}>
          Update
        </Typography>
      </UpdateButton>
    </Stack>
  );
}

export default LevelBadge;
