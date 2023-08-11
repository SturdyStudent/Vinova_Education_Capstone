import { Box, Typography, Stack, styled, Select } from "@mui/material";
import CaretDown from "../../../assets/icons/caretDown.svg";

interface ISort {
  navButtonList: Array<string>;
}

const StyledSelect = styled(Select)(({ theme }) => ({
  borderRadius: "30px",
  border: `1px solid ${theme.palette.secondary.main}`,
  paddingRight: "40px",
  fontSize: "18px",
  color: theme.palette.secondary.main,
  appearance: "none",
  backgroundPosition: `calc(100% - 12px) center !important`,
  background: `url(${CaretDown}) no-repeat`,
  backgroundColor: "transparent",
  "& svg": {
    display: "none",
  },
}));

function Sort({ navButtonList }: ISort) {
  return (
    <Stack gap={"37px"} justifyContent={"center"} marginTop={"32px"}>
      <Box display={"flex"} gap="37px">
        {navButtonList &&
          navButtonList.map((item) => (
            <Typography color={"#1F3684"}>{item}</Typography>
          ))}
      </Box>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <StyledSelect defaultValue={0} className="appearance-none">
          <option value={0}>Sort Order Date</option>
        </StyledSelect>
        <StyledSelect defaultValue={0}>
          <option value={0}>EUR</option>
        </StyledSelect>
      </div>
    </Stack>
  );
}

export default Sort;
