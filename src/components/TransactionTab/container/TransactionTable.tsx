import React from "react";
import {
  Box,
  Typography,
  Hidden,
  TableHead,
  Table,
  TableRow,
  TableCell,
} from "@mui/material";
import { useTransactionStyle as useStyles } from "./styles";
import updownArrow from "../../../assets/icons/updown.svg";
import Pagination from "./Pagination";
import { ITransactionInfo } from "../../../services/interface";

interface ITransactionTable {
  transactionList: Array<ITransactionInfo>;
}

function TransactionTable({ transactionList }: ITransactionTable) {
  const classes = useStyles();

  return (
    <div>
      <Box sx={{ marginTop: "28px" }}>
        {transactionList.map((item, index) => (
          <Box
            className={classes.mobileTableItem}
            sx={{ backgroundColor: `${index % 2 === 0 ? "#f5f5f5" : ""}` }}
          >
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
          </Box>
        ))}
      </Box>
      <Pagination />
    </div>
  );
}

export default TransactionTable;
