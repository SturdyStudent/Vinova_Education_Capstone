import React from "react";
import { Box } from "@mui/material";
import { useSendFundStyle as useStyles } from "./styles";

interface ISendFundSelect {
  isLeft?: boolean;
  isRight?: boolean;
  label: string;
  options: Array<string>;
}

function SendFundSelect({ isLeft, isRight, label, options }: ISendFundSelect) {
  const classes = useStyles();
  return (
    <Box
      className={classes.inputItem}
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
        <select className={classes.select}>
          {options &&
            options.map((item) => (
              <option className={classes.option}>{item}</option>
            ))}
        </select>
      </Box>
    </Box>
  );
}

export default SendFundSelect;
