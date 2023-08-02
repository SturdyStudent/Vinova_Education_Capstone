import { Container } from "@mui/material";
import { useTransactionStyle as useStyles } from "./container/styles";
import WelcomePanel from "./container/WelcomePanel";
import Sort from "./container/Sort";
import TransactionTable from "./container/TransactionTable";
import { transactionList } from "../../assets/js/default-props";

function MyTransaction() {
  const navButtonList: Array<string> = ["Fund", "Securities", "Crypto"];

  return (
    <div>
      <WelcomePanel />
      <Container>
        <Sort navButtonList={navButtonList} />
        <TransactionTable transactionList={transactionList} />
      </Container>
    </div>
  );
}

export default MyTransaction;
