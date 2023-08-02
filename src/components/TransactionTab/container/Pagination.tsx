import { Box, Typography, styled } from "@mui/material";
import caretLeft from "../../../assets/icons/caretLeft.svg";
import caretRight from "../../../assets/icons/caretRight.svg";

function Pagination() {
  const PaginationContainer = styled(Box)(() => ({
    fontSize: "16px",
    margin: "40px auto",
    display: "flex",
    width: "206px",
    gap: "19px",
  }));

  const PaginButton = styled(Box)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontSize: "16px",
    padding: 0,
  }));

  return (
    <Box width={"100%"}>
      <PaginationContainer>
        <PaginButton>
          <img src={caretLeft} alt="" />
        </PaginButton>
        {[1, 2, 3, 4, 5].map((item) => (
          <Typography fontSize={"16px"} color={"#1F3684"}>
            {item}
          </Typography>
        ))}
        <Box>
          <img src={caretRight} alt="" />
        </Box>
      </PaginationContainer>
    </Box>
  );
}

export default Pagination;
