import { Grid, Typography, styled, Button, Stack } from "@mui/material";

function WelcomePanel() {
  const StyledButton = styled(Button)(({ theme }) => ({
    padding: "17px 30px",
    borderRadius: "30px",
    border: `1px solid ${theme.palette.secondary.main}`,
    background: "transparent",
    textTransform: "none",
    color: theme.palette.secondary.main,
    justifyContent: "center",
    width: "150px",
  }));

  const WelcomePanel = styled(Grid)(({ theme }) => ({
    color: theme.palette.secondary.main,
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.secondary.light,
    paddingTop: "25px",
    paddingBottom: "25px",
    alignItems: "center",
    textAlign: "center",
  }));

  return (
    <WelcomePanel container>
      <Grid item sm={12} textAlign={"center"}>
        <Typography fontSize={"25px"}>My Transaction</Typography>
      </Grid>
      <Grid item sm={12} textAlign={"center"}>
        <Stack
          justifyContent={"center"}
          color={"#1F3684"}
          alignItems={"center"}
          padding={0}
          gap={"12px"}
          marginTop={"32px"}
        >
          <Stack flexDirection={"row"} gap={"12px"} justifyContent={"center"}>
            <StyledButton>Send Funds</StyledButton>
            <StyledButton>Crypto</StyledButton>
          </Stack>
          <StyledButton>Securities</StyledButton>
        </Stack>
      </Grid>
    </WelcomePanel>
  );
}

export default WelcomePanel;
