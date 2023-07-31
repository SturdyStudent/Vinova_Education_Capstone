import React from 'react';
import {
  Box, Typography
} from "@mui/material";
import { useTransactionStyle as useStyles } from "./styles";
import caretLeft from '../../../assets/icons/caretLeftIcon.svg';
import caretRight from '../../../assets/icons/caretRightIcon.svg';

function Pagination({paginList}) {
    const classes = useStyles();

  return (
    <Box width={'100%'}>
    <div className={classes.pagination}>
      <Box className={classes.paginButton}><img src={caretLeft} alt='' /></Box>
      {
        paginList.map(item => (
          <Typography className={classes.paginButton}>{item}</Typography>
        ))
      }
      <Box>
        <img src={caretRight} alt='' />
      </Box>
    </div>
  </Box>
  )
}

export default Pagination