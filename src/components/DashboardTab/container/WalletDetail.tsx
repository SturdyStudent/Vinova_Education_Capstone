import React from "react";
import { Box, Typography, Button, styled, Theme } from "@mui/material";
import { useDashboardStyles as useStyles } from "./styles";
import { useTheme } from "@emotion/react";

function WalletDetail() {
  const classes = useStyles();

  const ViewDetailButton = styled(Button)(() => ({
    width: "50%",
    textAlign: "center",
    color: "#1F3684",
    padding: "17px 30px",
    maxWidth: "none",
    textTransform: "none",
    borderRadius: "30px",
    border: "0.5px solid var(--main-blue, #1F3684)",
    marginTop: "30px",
    ":hover": {
      backgroundColor: `#1F3684`,
      color: "white",
      textTransform: "none",
    },
  }));

  return (
    <Box className={`${classes.walletHolder} `}>
      <Box className={classes.walletDetail} sx={{ background: "#f5f5f5" }}>
        <Typography>Funds Wallet</Typography>
        <Typography fontSize={"25px"} fontWeight={600}>
          1,000,000.00 EUR
        </Typography>
        <ViewDetailButton
          className={classes.detailButton}
          sx={{ ":hover": { backgroundColor: `#1F3684`, color: "white" } }}
        >
          View Detail
        </ViewDetailButton>
      </Box>
      <Box className={classes.walletDetail}>
        <Typography>Crypto Wallet</Typography>
        <Typography fontSize={"25px"} fontWeight={600}>
          1,000,000.00 EUR
        </Typography>
        <ViewDetailButton>View Detail</ViewDetailButton>
      </Box>
    </Box>
  );
}

export default WalletDetail;
