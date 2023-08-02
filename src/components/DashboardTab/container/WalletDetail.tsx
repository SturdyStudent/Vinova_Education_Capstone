import { Box, Typography, Button, styled } from "@mui/material";

function WalletDetail() {
  const WalletHolder = styled(Box)(({ theme }) => ({
    display: "flex",
    borderTop: "solid black 1px",
    borderBottom: "solid black 1px",
    flexDirection: "row",
    [theme?.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  }));

  const WalletDetail = styled(Box)(({ theme }) => ({
    width: "50%",
    textAlign: "center",
    color: "#1F3684",
    padding: "37px 0",
    maxWidth: "none",
    background: "#f5f5f5",
    [theme?.breakpoints.down("md")]: {
      width: "100%",
    },
  }));

  const DetailButton = styled(Button)(() => ({
    padding: "17px 30px",
    margin: "0 auto",
    marginTop: "30px ",
    borderRadius: "30px",
    background: "transparent",
    width: "fit-content",
    border: `#1F3684 1px solid !important`,
    textTransform: "none",
    ":hover": { backgroundColor: `#1F3684`, color: "white" },
  }));

  return (
    <WalletHolder>
      <WalletDetail>
        <Typography>Funds Wallet</Typography>
        <Typography fontSize={"25px"} fontWeight={600}>
          1,000,000.00 EUR
        </Typography>
        <DetailButton>View Detail</DetailButton>
      </WalletDetail>
      <WalletDetail sx={{ backgroundColor: "white" }}>
        <Typography>Crypto Wallet</Typography>
        <Typography fontSize={"25px"} fontWeight={600}>
          1,000,000.00 EUR
        </Typography>
        <DetailButton>View Detail</DetailButton>
      </WalletDetail>
    </WalletHolder>
  );
}

export default WalletDetail;
