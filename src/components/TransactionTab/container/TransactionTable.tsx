import { Box, Typography, Stack, styled } from "@mui/material";
import Pagination from "./Pagination";
import { ITransactionInfo } from "../../../services/interface";

interface ITransactionTable {
  transactionList: Array<ITransactionInfo>;
}

interface ITransactionRow {
  isEven: boolean;
}

const TransactionTableRow = styled(Stack)(({ isEven }: ITransactionRow) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "17px",
  backgroundColor: isEven ? "#f5f5f5" : "white",
}));

function TransactionTable({ transactionList }: ITransactionTable) {
  return (
    <div>
      <Box sx={{ marginTop: "28px" }}>
        {transactionList.map((item, index) => (
          <TransactionTableRow isEven={index % 2 == 0}>
            <div>
              <Typography textAlign={"left"} fontWeight={500}>
                {item.orderStatus}
              </Typography>
              <Typography textAlign={"left"}>{item.orderDate}</Typography>
              <Typography textAlign={"left"} sx={{ marginTop: "4px" }}>
                {item.remarks}
              </Typography>
            </div>
            <div>
              <Typography textAlign={"right"} fontWeight={600}>
                {item.amount.toFixed(2)} {item.currency}
              </Typography>
              <Typography textAlign={"right"}>{item.action}</Typography>
            </div>
          </TransactionTableRow>
        ))}
      </Box>
      <Pagination />
    </div>
  );
}

export default TransactionTable;
