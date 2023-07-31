import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { useDashboardStyles as useStyles } from './styles';
import { useTheme } from '@emotion/react';

function WalletNav({functionNavList}) {
    const theme = useTheme();
    const classes = useStyles();

  return (
    <Box className={classes.walletNav}>
    <div item sm={12}>
      <Typography fontSize={'25px'} fontWeight={400}>My Wallets</Typography>
    </div>
    <Grid className={classes.gridContainer} container spacing={0} >
      {
        functionNavList.map((item, index) => (
          <Grid
            item 
            className={classes.functionNavHolder}
            sx=
            {{
              boxSizing: 'border-box', 
              padding: `6px ${(index % 2 === 1 ? '0px' : '6px')} 6px ${(index % 2 === 1 ? '6px' : '0px')}`}}
            sm={6}
            md
          >
            <Button className={classes.functionNav} sx={{':hover': {background: `${theme.palette.primary.blue}`, color: 'white'}}}>
              {item}
            </Button>
          </Grid>
        ))
      }
    </Grid>
  </Box>
  )
}

export default WalletNav