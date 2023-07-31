import React from "react";
import { Box, Typography } from "@mui/material";
import { useTransactionStyle as useStyles } from "./styles";
import caretLeft from "../../../assets/icons/caretLeft.svg";
import caretRight from "../../../assets/icons/caretRight.svg";

function Pagination() {
  const classes = useStyles();

  return (
    <Box width={"100%"}>
      <div className={classes.pagination}>
        <Box className={classes.paginButton}>
          <img src={caretLeft} alt="" />
        </Box>
        {[1, 2, 3, 4, 5].map((item) => (
          <Typography className={classes.paginButton}>{item}</Typography>
        ))}
        <Box>
          <img src={caretRight} alt="" />
        </Box>
      </div>
    </Box>
  );
}

export default Pagination;
