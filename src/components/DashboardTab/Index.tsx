import { Box, Stack } from "@mui/material";
import WelcomePanel from "./container/WelcomePanel";
import WalletNav from "./container/WalletNav";
import WalletDetail from "./container/WalletDetail";
import WalletTable from "./container/WalletTable";
import {
  transactionList,
  functionNavList,
} from "../../assets/js/default-props";

function Dashboard() {
  return (
    <div>
      <WelcomePanel />
      <WalletNav functionNavList={functionNavList} />
      <Stack marginBottom={"112px"}>
        <WalletDetail />
        <Box sx={{ height: "46px" }} />
        <WalletTable transactionList={transactionList} />
      </Stack>
    </div>
  );
}

export default Dashboard;
