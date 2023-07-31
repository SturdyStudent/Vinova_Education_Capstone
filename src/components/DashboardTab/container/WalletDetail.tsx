import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useDashboardStyles as useStyles } from "./styles";
import { useTheme } from "@emotion/react";

function WalletDetail() {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box className={`${classes.walletHolder} `}>
      <Box className={classes.walletDetail} sx={{ background: "#f5f5f5" }}>
        <Typography>Funds Wallet</Typography>
        <Typography fontSize={"25px"} fontWeight={600}>
          1,000,000.00 EUR
        </Typography>
        <Button
          className={classes.detailButton}
          sx={{ ":hover": { backgroundColor: `#1F3684`, color: "white" } }}
        >
          View Detail
        </Button>
      </Box>
      <Box className={classes.walletDetail}>
        <Typography>Crypto Wallet</Typography>
        <Typography fontSize={"25px"} fontWeight={600}>
          1,000,000.00 EUR
        </Typography>
        <Button
          className={classes.detailButton}
          sx={{
            ":hover": {
              backgroundColor: `#1F3684`,
              color: "white",
              textTransform: "none",
            },
          }}
        >
          View Detail
        </Button>
      </Box>
    </Box>
  );
}

export default WalletDetail;
