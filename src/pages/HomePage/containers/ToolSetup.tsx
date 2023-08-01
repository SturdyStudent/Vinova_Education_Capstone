import { Box, Typography, Stack } from "@mui/material";
import YellowButton from "../../../components/YellowStyledButton/YellowButton";

function ToolSetup() {
  return (
    <Stack
      display={"flex"}
      justifyContent={"space-between"}
      flexDirection={"row"}
    >
      <Box>
        <Typography
          textAlign={"left"}
          color={"black"}
          fontSize={"18px"}
          fontWeight={600}
        >
          Your Tools
        </Typography>
        <Typography fontSize={"14px"} color={"black"}>
          You haven't setup any tools yet
        </Typography>
      </Box>
      <Box alignSelf={"end"}>
        <YellowButton>Setup</YellowButton>
      </Box>
    </Stack>
  );
}

export default ToolSetup;
