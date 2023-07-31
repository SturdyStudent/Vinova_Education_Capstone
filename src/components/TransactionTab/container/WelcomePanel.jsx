import React from "react";
import {
  Box,
  Grid,
  Typography
} from "@mui/material";
import { useTransactionStyle as useStyles } from "./styles";

function WelcomePanel() {
  const classes = useStyles();

  return (
    <Grid className={`${classes.welcomePanel} ${classes.container}`} container>
      <Grid item sm={12} md className={classes.welcomePanelItem}>
        <Typography fontSize={"25px"}>My Transaction</Typography>
      </Grid>
      <Grid item sm={12} md className={classes.welcomePanelItem}>
        <Box className={classes.buttonHolder}>
          <div className={classes.buttonHolder1}>
            <button className={classes.button}>Send Funds</button>
            <button className={classes.button}>Crypto</button>
          </div>
          <button className={classes.button}>Securities</button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default WelcomePanel;
