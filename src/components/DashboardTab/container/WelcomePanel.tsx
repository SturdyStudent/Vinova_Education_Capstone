import { Box, Typography, styled } from "@mui/material";
import { useDashboardStyles as useStyles } from "./styles";

function WelcomePanel() {
  const TimeDetailHolder = styled(Box)(({ theme }) => ({
    textAlign: "right",
    [theme?.breakpoints.down("md")]: {
      textAlign: "left",
    },
  }));

  const WelcomePanel = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "51px 30px",
    flexDirection: "row",
    backgroundColor: "#F9F3ED",
    [theme?.breakpoints?.down("md")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "27px",
    },
  }));

  return (
    <WelcomePanel>
      <Box sx={{ textAlign: "left" }}>
        <Typography fontWeight={600} fontSize={"25px"}>
          Welcome Back, John
        </Typography>
        <Typography>Account number: 100TestMe98</Typography>
      </Box>
      <TimeDetailHolder>
        <Typography>Your last login was 11:12 AM on</Typography>
        <Typography>Wednesday 7th July, 2021 (Singapore)</Typography>
      </TimeDetailHolder>
    </WelcomePanel>
  );
}

export default WelcomePanel;
