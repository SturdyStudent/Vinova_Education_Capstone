import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { useDashboardStyles as useStyles } from "./styles";
import { useTheme } from "@emotion/react";

interface IWalletNav {
  functionNavList: Array<string>;
}

function WalletNav({ functionNavList }: IWalletNav) {
  const classes = useStyles();

  return (
    <Box className={classes.walletNav}>
      <Grid item sm={12} md={5}>
        <Typography fontSize={"25px"} fontWeight={400}>
          My Wallets
        </Typography>
      </Grid>
      <Grid className={classes.gridContainer} container spacing={0}>
        {functionNavList.map((item, index) => (
          <Grid
            item
            className={classes.functionNavHolder}
            sx={{
              boxSizing: "border-box",
              padding: `6px ${index % 2 === 1 ? "0px" : "2px"} 6px ${
                index % 2 === 1 ? "2px" : "0px"
              }`,
            }}
            xs={6}
            md={6}
          >
            <Button
              className={classes.functionNav}
              sx={{
                textTransform: "none",
                ":hover": {
                  background: "#1F3684",
                  color: "white",
                },
              }}
            >
              {item}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default WalletNav;
