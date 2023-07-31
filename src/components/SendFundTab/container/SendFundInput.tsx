import React from "react";
import { Box, Input } from "@mui/material";
import { useSendFundStyle as useStyles } from "./styles";

interface ISendFundInput {
  isLeft?: boolean;
  isRight?: boolean;
  label: string;
  placeholder: string;
  type?: string;
  isFull?: boolean;
}

function SendFundInput({
  isLeft,
  isRight,
  label,
  placeholder,
  type,
  isFull,
}: ISendFundInput) {
  const classes = useStyles();
  return (
    <Box
      className={isFull ? classes.inputItem2 : classes.inputItem}
      paddingRight={isLeft ? "10px" : 0}
      paddingLeft={isRight ? "10px" : 0}
    >
      <Box
        sx={{
          width: "100%",
          "& label": {
            textAlign: "left",
            display: "block",
            paddingBottom: "9px",
          },
        }}
      >
        <label className={classes.label}>{label}</label>
        <Input
          className={classes.input}
          placeholder={placeholder}
          type={type}
        />
      </Box>
    </Box>
  );
}

export default SendFundInput;
