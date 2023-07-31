import React from 'react';
import { Box, Typography } from '@mui/material';
import { useDashboardStyles as useStyles } from './styles';

function WelcomePanel() {
    const classes = useStyles();

  return (
    <Box className={`${classes.container} ${classes.welcomePanel}`}>
        <Box sx={{textAlign: 'left'}}>
            <Typography fontWeight={600}fontSize={'25px'}>Welcome Back, John</Typography>
            <Typography>Account number: 100TestMe98</Typography>
        </Box>
        <Box className={classes.loginInfo}>
            <Typography>Your last login was 11:12 AM on</Typography>
            <Typography>Wednesday 7th July, 2021 (Singapore)</Typography>
        </Box>
  </Box>
  )
}

export default WelcomePanel