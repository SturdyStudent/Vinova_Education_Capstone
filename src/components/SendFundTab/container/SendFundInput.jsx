import React from 'react';
import { Box, Input } from '@mui/material';
import { useSendFundStyle as useStyles } from './styles';

function SendFundInput({isLeft, isRight, label, placeholder, type, isFull}) {
    const classes = useStyles();
    return (
    <Box className={isFull ? classes.inputItem2 : classes.inputItem} paddingRight={isLeft ?? '10px'} paddingLeft={isRight ?? '10px'}>
        <Box sx={{width: '100%', '& label': {textAlign: 'left', display: 'block', paddingBottom: '9px'}}} >
            <label className={classes.label}>{label}</label>
            <Input
                className={classes.input}
                placeholder={placeholder}
                type={type}
            />
        </Box>
    </Box>
  )
}

export default SendFundInput