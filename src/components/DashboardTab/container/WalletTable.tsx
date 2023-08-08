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
  Grid,
  Button,
  TextField,
  Select,
  MenuItem,
  SelectChangeEvent,
  IconButton,
} from "@mui/material";
import React, { useState, useEffect, FormEventHandler } from "react";
import { IProducts, ITransactionInfo } from "../../../services/interface";
import {
  deleteProduct,
  getLimitedProducts,
  getProductCategories,
  searchProducts,
} from "../../../services/api";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { AddCircle } from "@mui/icons-material";
import { priceOptions } from "../../../assets/js/default-props";
import { deleteLocalProduct, parseArray } from "../../../services/utils";
import {
  DELETE_PRODUCT_LIST,
  PRODUCT_DATA,
} from "../../../assets/js/constants";

interface IWalletTable {
  transactionList: ITransactionInfo[];
}
interface TableRowProp {
  isEven: boolean;
}

function WalletTable({ transactionList }: IWalletTable) {
  const [baseProductData, setBaseProducts] = useState<IProducts[]>([]);
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
  const [categories, setCategories] = useState<string[]>([]);
  const [category, setCategory] = useState("Category");
  const [price, setPrice] = useState(0);
  const [searchString, setSearchString] = useState("");

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

  const CreateButton = styled(Button)(() => ({
    textTransform: "none",
    background: "#eb5202",
    padding: "5px 10px",
    borderRadius: "5px",
    color: "white",
    fontSize: "16px",
    marginLeft: "20px",
  }));

  const SearchButton = styled(Button)(() => ({
    background: "#eb5202",
    border: "1px solid #eb5202",
    color: "white",
    "&:hover": {
      color: "black",
    },
  }));

  const SearchInput = styled(TextField)(() => ({
    "& input": {
      padding: "8px",
    },
    "& label": {
      transform: "translate(14px, 7px) scale(1)",
    },
    "& label.Mui-focused": {
      transform: "translate(14px, -9px) scale(0.75)",
    },
  }));

  const searchProduct = () => {
    searchProducts({ query: searchString })
      .then((result) => setProductList(result.data.products as IProducts[]))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getProductCategories()
      .then((result) => {
        setCategories(result.data);
      })
      .catch((e) => console.log(e));

    getLimitedProducts({ limit: 20, skip: 0 })
      .then((result) => {
        const savedProductsList: IProducts[] = parseArray(
          localStorage.getItem(PRODUCT_DATA)
        );
        const productList: IProducts[] = result.data.products;

        savedProductsList.map((savedProduct) => {
          const index = productList.findIndex(
            (product) => product.id === savedProduct.id
          );
          productList[index] = savedProduct;
        });

        const deletedProducts = parseArray(
          localStorage.getItem(DELETE_PRODUCT_LIST)
        );
        const filteredList = productList.filter(
          (item) => !deletedProducts.includes(item.id)
        );

        setProductList(filteredList);
        setBaseProducts(filteredList);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    let filterList: IProducts[] = baseProductData?.filter(
      (product) => product.category == category || category == "Category"
    );

    filterList = filterList.filter(
      (product) =>
        (product.price <= priceOptions[price - 1]?.to &&
          product.price >= priceOptions[price - 1]?.from) ||
        price == 0
    );

    setProductList(filterList);
  }, [category, price]);

  const navigate = useNavigate();

  return (
    <Box padding={"0 15px"}>
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
    </Box>
  );
}

export default WalletTable;
