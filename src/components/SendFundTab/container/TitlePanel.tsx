import { Box, styled, Typography } from "@mui/material";

function TitlePanel() {
  const PanelContainer = styled(Box)(({ theme }) => ({
    background: theme.palette.secondary.light,
    color: theme.palette.secondary.main,
    paddingTop: "23px",
    paddingBottom: "23px",
    textAlign: "left",
    padding: "30px",
  }));

  return (
    <PanelContainer>
      <Typography fontSize={"25px"}>Transfer of Funds</Typography>
    </PanelContainer>
  );
}

export default TitlePanel;
