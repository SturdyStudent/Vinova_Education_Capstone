import React from "react";
import { Button, Container, Box, Typography } from "@mui/material";
import BadgeIcon from "../../assets/img/gold_badge.png";

function LevelBadge() {
  return (
    <Box
      className="py-2 px-3 rounded-lg flex flex-row justify-between items-center"
      sx={{ background: "rgba(255, 255, 255, 0.50)" }}
    >
      <Box className="flex flex-1 items-center">
        <img src={BadgeIcon} width={"28px"} height={"28px"} />
        <Typography className="pl-4" color={"white"} fontSize={"16px"}>
          Basic Level
        </Typography>
      </Box>
      <button
        className="bg-white border py-2 px-3 rounded-lg"
        style={{ borderColor: "#CCA000" }}
      >
        <Typography color={"#CCA000"} fontWeight={600}>
          Update
        </Typography>
      </button>
    </Box>
  );
}

export default LevelBadge;
