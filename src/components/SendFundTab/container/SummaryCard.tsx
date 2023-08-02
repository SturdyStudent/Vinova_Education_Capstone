import { Box, Typography, styled } from "@mui/material";
function SummaryCard() {
  const SummaryItem = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "22px",
    paddingRight: "22px",
  }));

  const SummaryResult = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 22px",
    background: "#F9F3ED",
    alignItems: "center",
    marginTop: "13px",
  }));

  return (
    <div>
      <Typography
        textAlign={"left"}
        color={"#1F3684"}
        fontSize={"18px"}
        fontWeight={600}
      >
        Summary
      </Typography>
      <Box margin={"20px 0"} width="100%">
        <SummaryItem>
          <Typography>Transfer amount</Typography>
          <Typography>1,000.00 EUR</Typography>
        </SummaryItem>
        <SummaryItem>
          <Typography>Fee</Typography>
          <Typography>10.00 EUR</Typography>
        </SummaryItem>
        <SummaryResult>
          <Typography>Recipient will receive</Typography>
          <Typography fontWeight={"600"}>990.00 EUR</Typography>
        </SummaryResult>
      </Box>
      <Typography
        fontStyle={"italic"}
        textAlign={"left"}
        marginTop={"50px"}
        marginBottom={"30px"}
      >
        Should the selected day be a holiday, the transfer will be executed the
        coming work day.
        <Box height={"10px"} />
        Please note, amount can't be greater than account balance. If amount is
        equal to account balance, transfer fee will be deducted from the amount
        transferred to beneficiary.
      </Typography>
    </div>
  );
}

export default SummaryCard;
