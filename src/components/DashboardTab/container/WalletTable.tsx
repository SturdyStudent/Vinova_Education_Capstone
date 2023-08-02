import {
  Box,
  Hidden,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  styled,
  Stack,
} from "@mui/material";
import { ITransactionInfo } from "../../../services/interface";

interface IWalletTable {
  transactionList: ITransactionInfo[];
}
interface TableRowProp {
  isEven: boolean;
}

function WalletTable({ transactionList }: IWalletTable) {
  const StyledTableHead = styled(TableHead)(() => ({
    borderBottom: "1px solid black",
    color: "#1F3684",
    "& th": { borderBottom: "1.5px solid #37383d", color: "#1F3684" },
  }));
  const MobileTableRow = styled(Stack)(({ isEven }: TableRowProp) => ({
    backgroundColor: isEven ? "#f5f5f5" : "white",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "17px",
  }));

  const DesktopTableRow = styled(TableRow)(({ isEven }: TableRowProp) => ({
    backgroundColor: isEven ? "#f5f5f5" : "white",
    "& td": { border: 0 },
  }));

  return (
    <div>
      <Hidden mdDown>
        <Table>
          <StyledTableHead>
            <TableCell>
              <Box>
                <div>Order Date</div>
              </Box>
            </TableCell>
            <TableCell>Action</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Currency</TableCell>
            <TableCell>Remarks</TableCell>
            <TableCell>Order Status</TableCell>
          </StyledTableHead>
          {transactionList &&
            transactionList.map((item, index) => (
              <DesktopTableRow isEven={index % 2 == 0}>
                <TableCell>
                  <Box>
                    <div>{item.orderDate}</div>
                  </Box>
                </TableCell>
                <TableCell>{item.action}</TableCell>
                <TableCell>{item.amount}</TableCell>
                <TableCell>{item.currency}</TableCell>
                <TableCell>{item.remarks}</TableCell>
                <TableCell>{item.orderStatus}</TableCell>
              </DesktopTableRow>
            ))}
        </Table>
      </Hidden>
      <Hidden mdUp>
        <Box>
          {transactionList.map((item, index) => (
            <MobileTableRow isEven={index % 2 == 0}>
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
            </MobileTableRow>
          ))}
        </Box>
      </Hidden>
    </div>
  );
}

export default WalletTable;
