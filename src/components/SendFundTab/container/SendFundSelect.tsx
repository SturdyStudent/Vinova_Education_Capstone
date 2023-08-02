import { useState } from "react";
import { Box, styled, Select } from "@mui/material";
import { IInput } from "../../../services/interface";
import CaretDown from "../../../assets/icons/caretDown.svg";

function SendFundSelect({ label, selectOptions = [""] }: IInput) {
  const [value, setValue] = useState<string>(selectOptions[0]);

  const StyledSelect = styled(Select)(() => ({
    width: "100%",
    backgroundColor: "#F5F5F5",
    border: "none",
    padding: "0 !important",
    appearance: "none",
    backgroundPosition: `calc(100% - 12px) center !important`,
    background: `url(${CaretDown}) no-repeat`,
    borderBottom: `#1F3684 2px solid`,
    "& div": {
      padding: "8px 0 8px 15px",
      background: "#f5f5f5",
    },
  }));

  const SizedBox = styled(Box)(() => ({
    height: "9px",
  }));

  return (
    <Box>
      <label style={{ color: "#1F3684" }}>{label}</label>
      <SizedBox />
      <StyledSelect
        value={value}
        onChange={(e) => setValue(e.target.value as string)}
      >
        {selectOptions &&
          selectOptions.map((item) => (
            <option value={item} className="p-3">
              {item}
            </option>
          ))}
      </StyledSelect>
    </Box>
  );
}

export default SendFundSelect;
