import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { useSendFundStyle as useStyles } from './styles';
function SummaryCard() {
    const classes = useStyles();
  return (
    <div>
        <Typography textAlign={'left'} className={classes.label} fontSize={'18px'} fontWeight={600}>
            Summary
        </Typography>
        <Box className={classes.summaryContainer} maxWidth={'none'}>
            <Box className={classes.summaryItem}>
                <Typography>Transfer amount</Typography>
                <Typography>1,000.00 EUR</Typography>
            </Box>
            <Box className={classes.summaryItem}>
                <Typography>Fee</Typography>
                <Typography>10.00 EUR</Typography>
            </Box>
            <Box className={classes.summaryResult}>
                <Typography>Recipient will receive</Typography>
                <Typography fontWeight={'600'}>990.00 EUR</Typography>
            </Box>
        </Box>
        <Typography fontStyle={'italic'} className={classes.noteText} textAlign={'left'} marginTop={'50px'} marginBottom={'30px'}>
            Should the selected day be a holiday, the transfer will be executed the
            coming work day. 
            <Divider sx={{height: '10px'}} />
            Please note, amount can't be greater than account balance. If amount is
            equal to account balance, transfer fee will be deducted from the amount
            transferred to beneficiary.
        </Typography>
    </div>
  )
}

export default SummaryCard