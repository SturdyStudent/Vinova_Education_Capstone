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
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import { IProducts, ITransactionInfo } from "../../../services/interface";
import { getLimitedProducts } from "../../../services/api";
import { useNavigate } from "react-router-dom";

interface IWalletTable {
  transactionList: ITransactionInfo[];
}
interface TableRowProp {
  isEven: boolean;
}

function WalletTable() {
  const [productList, setProductList] = useState<IProducts[]>([
    {
      id: 0,
      title: "",
      brand: "",
      price: 0,
      category: "",
      images: [""],
    },
  ]);
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

  const EditButton = styled(Button)(() => ({
    background: "blue",
    color: "white",
    textTransform: "none",
    padding: "5px 0px",
    marginRight: "5px",
  }));

  const DeleteButton = styled(Button)(() => ({
    background: "red",
    color: "white",
    textTransform: "none",
    padding: "5px 0",
  }));

  const DesktopTableRow = styled(TableRow)(({ isEven }: TableRowProp) => ({
    backgroundColor: isEven ? "#f5f5f5" : "white",
    "& td": { border: 0 },
  }));

  useEffect(() => {
    getLimitedProducts({ limit: 20, skip: 0 })
      .then((result) => setProductList(result.data.products))
      .catch((e) => console.log(e));
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <Typography
        fontSize={"25px"}
        textAlign={"center"}
        color={"#1F3684"}
        fontWeight={400}
      >
        Products
      </Typography>
      <Button>Create Product</Button>
      <Hidden mdDown>
        <Table>
          <StyledTableHead>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>price</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Actions</TableCell>
          </StyledTableHead>
          {productList &&
            productList.map((item, index) => (
              <DesktopTableRow key={item.id} isEven={index % 2 == 0}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.price.toLocaleString()}$</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>
                  <Box width={"40px"} height={"50px"}>
                    <img
                      src={item.images[0]}
                      className="object-cover h-full w-full"
                    />
                  </Box>
                </TableCell>
                <TableCell>
                  <EditButton onClick={() => navigate(`/edit/${item.id}`)}>
                    Edit
                  </EditButton>
                  <DeleteButton>Delete</DeleteButton>
                </TableCell>
              </DesktopTableRow>
            ))}
        </Table>
      </Hidden>
      {/* <Hidden mdUp>
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
      </Hidden> */}
    </div>
  );
}

export default WalletTable;
