import { Box, Typography, Grid, Button, styled } from "@mui/material";
interface IWalletNav {
  functionNavList: Array<string>;
}

interface IButtonNav {
  isLeftSide: boolean;
}

function WalletNav({ functionNavList }: IWalletNav) {
  const WalletNav = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    color: "#1F3684",
    margin: "50px 0px 30px 0px",
    flexDirection: "column",
    alignItems: "center",
    gap: "0px",
    [theme.breakpoints.up("md")]: {
      margin: "50px 30px 30px 30px",
    },
  }));

  const GridContainer = styled(Grid)(() => ({
    boxSizing: "border-box",
    flexDirection: "row",
    width: "100%",
    gap: "0px",
  }));

  const FunctionNavGrid = styled(Grid)(({ isLeftSide }: IButtonNav) => ({
    color: "#1F3684",
    textAlign: "center",
    boxSizing: "border-box",
    padding: `6px ${isLeftSide ? "0px" : "2px"} 6px ${
      isLeftSide ? "2px" : "0px"
    }`,
  }));

  const ButtonFunctionNav = styled(Button)(() => ({
    borderRadius: "30px",
    background: "transparent",
    padding: "14px 28px",
    border: `1px solid #1F3684`,
    fontSize: "14px",
    textTransform: "none",
    color: "#1F3684",
    width: "100%",
    maxWidth: "250px",
    ":hover": {
      background: "#1F3684",
      color: "white",
    },
  }));

  return (
    <WalletNav>
      <Grid item sm={12} md={5}>
        <Typography fontSize={"25px"} fontWeight={400}>
          My Wallets
        </Typography>
      </Grid>
      <GridContainer container spacing={0}>
        {functionNavList.map((item, index) => (
          <FunctionNavGrid
            key={index}
            item
            color={"#1F3684"}
            textAlign={"center"}
            isLeftSide={index % 2 == 1}
            xs={6}
            md={6}
          >
            <ButtonFunctionNav>{item}</ButtonFunctionNav>
          </FunctionNavGrid>
        ))}
      </GridContainer>
    </WalletNav>
  );
}

export default WalletNav;
