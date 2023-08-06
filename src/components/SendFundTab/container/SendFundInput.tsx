import { Box, Input, styled } from "@mui/material";
import { IInput } from "../../../services/interface";

function SendFundInput({ label, placeHolder, type, value, onChange }: IInput) {
  const StyledInput = styled(Input)(() => ({
    width: "100%",
    background: "#F5F5F5",
    padding: "4px 0 3px 15px",
    border: "none",
    borderBottom: "#1F3684 1.5px solid",
  }));
  const InputHolder = styled(Box)(() => ({
    boxSizing: "border-box",
    width: "100%",
    paddingLeft: "0 !important",
    paddingRight: "0 !important",
  }));
  return (
    <InputHolder>
      <Box color={"#1F3684"} width={"100%"}>
        <label>{label}</label>
        <Box height={"9px"} />
        <StyledInput
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
          type={type}
        />
      </Box>
    </InputHolder>
  );
}

export default SendFundInput;
