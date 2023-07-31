import React from "react";
import Header from "../Header/Header";
import { Box } from "@mui/material";
import { useDashboardStyles as useStyles } from "./container/styles";
import WelcomePanel from "./container/WelcomePanel";
import WalletNav from "./container/WalletNav";
import WalletDetail from "./container/WalletDetail";
import WalletTable from "./container/WalletTable";
import { ITransactionInfo } from "../../services/interface";

const functionNavList: Array<string> = [
  "Send Funds",
  "Crypto",
  "Securities",
  "View Transactions",
];

const transactionList: Array<ITransactionInfo> = [
  {
    orderDate: "2021-07-13",
    action: "Send",
    amount: 435.0,
    currency: "EUR",
    remarks: "",
    orderStatus: "Success",
  },
  {
    orderDate: "2021-07-13",
    action: "Receive",
    amount: 143.0,
    currency: "EUR",
    remarks: "Pay back from Louis",
    orderStatus: "Success",
  },
  {
    orderDate: "2021-07-13",
    action: "Send",
    amount: 765.0,
    currency: "EUR",
    remarks: "",
    orderStatus: "Failed",
  },
  {
    orderDate: "2021-07-13",
    action: "Send",
    amount: 264.0,
    currency: "EUR",
    remarks: "",
    orderStatus: "Success",
  },
  {
    orderDate: "2021-07-13",
    action: "Send",
    amount: 343.0,
    currency: "EUR",
    remarks: "",
    orderStatus: "Success",
  },
];

function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <WelcomePanel />
      <Box className={classes.container}>
        <WalletNav functionNavList={functionNavList} />
      </Box>
      <div className={classes.container} style={{ marginBottom: "112px" }}>
        <WalletDetail />
        <Box sx={{ height: "46px" }} />
        <WalletTable transactionList={transactionList} />
      </div>
    </div>
  );
}

export default Dashboard;
