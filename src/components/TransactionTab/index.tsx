import React from "react";
import { Container } from "@mui/material";
import { useTransactionStyle as useStyles } from "./container/styles";
import WelcomePanel from "./container/WelcomePanel";
import Sort from "./container/Sort";
import TransactionTable from "./container/TransactionTable";
import { ITransactionInfo } from "../../services/interface";

const transactionList: Array<ITransactionInfo> = [
  {
    orderDate: "2021-07-13",
    action: "Send",
    amount: 343,
    currency: "EUR",
    orderStatus: "Success",
  },
  {
    orderDate: "2021-07-13",
    action: "Receive",
    amount: 533,
    currency: "EUR",
    remarks: "Pay back from Louis",
    orderStatus: "Success",
  },
  {
    orderDate: "2021-07-13",
    action: "Send",
    amount: 654,
    currency: "EUR",
    orderStatus: "Failed",
  },
  {
    orderDate: "2021-07-13",
    action: "Send",
    amount: 164,
    currency: "EUR",
    orderStatus: "Success",
  },
  {
    orderDate: "2021-07-13",
    action: "Send",
    amount: 873,
    currency: "EUR",
    orderStatus: "Success",
  },
  {
    orderDate: "2021-07-13",
    action: "Send",
    amount: 542,
    currency: "EUR",
    remarks: "Pay back from Louis",
    orderStatus: "Success",
  },
  {
    orderDate: "2021-07-13",
    action: "Send",
    amount: 653,
    currency: "EUR",
    orderStatus: "Success",
  },
  {
    orderDate: "2021-07-13",
    action: "Send",
    amount: 243,
    currency: "EUR",
    orderStatus: "Success",
  },
  {
    orderDate: "2021-07-13",
    action: "Send",
    amount: 735,
    currency: "EUR",
    orderStatus: "Failed",
  },
  {
    orderDate: "2021-07-13",
    action: "Receive",
    amount: 345,
    currency: "EUR",
    orderStatus: "Success",
  },
  {
    orderDate: "2021-07-13",
    action: "Send",
    amount: 635,
    currency: "EUR",
    orderStatus: "Success",
  },
  {
    orderDate: "2021-07-13",
    action: "Send",
    amount: 241,
    currency: "EUR",
    orderStatus: "Success",
  },
];

function MyTransaction() {
  const classes = useStyles();

  const navButtonList: Array<string> = ["Fund", "Securities", "Crypto"];

  return (
    <div>
      <WelcomePanel />
      <Container className={classes.container}>
        <Sort navButtonList={navButtonList} />
        <TransactionTable transactionList={transactionList} />
      </Container>
    </div>
  );
}

export default MyTransaction;
