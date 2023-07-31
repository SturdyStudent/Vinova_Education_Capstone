import React from 'react';
import { Box } from '@mui/material';
import { useSendFundStyle as useStyles } from './styles';


function SendFundSelect({isLeft, isRight, label, options}) {
    const classes = useStyles();
    return (
    <Box className={classes.inputItem} paddingRight={isLeft ?? '10px'} paddingLeft={isRight ?? '10px'}>
        <Box sx={{width: '100%', '& label': {textAlign: 'left', display: 'block', paddingBottom: '9px'}}} >
            <label className={classes.label}>{label}</label>
            <select
                className={classes.select}
                >
                {
                    options && options.map(item => (

                        <option className={classes.option}>{item}</option>
                    ))
                }
            </select>
        </Box>
    </Box>
  )
}

export default SendFundSelect