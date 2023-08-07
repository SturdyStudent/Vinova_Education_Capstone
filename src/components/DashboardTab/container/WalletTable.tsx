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
  getLimitedProducts,
  getProductCategories,
  searchProducts,
} from "../../../services/api";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { AddCircle } from "@mui/icons-material";
import { priceOptions } from "../../../assets/js/default-props";

interface IWalletTable {
  transactionList: ITransactionInfo[];
}
interface TableRowProp {
  isEven: boolean;
}

function WalletTable() {
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
        setProductList(result.data.products);
        setBaseProducts(result.data.products);
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
      <Stack
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <Typography
          fontSize={"25px"}
          textAlign={"center"}
          color={"#1F3684"}
          fontWeight={400}
        >
          All Products
        </Typography>
        <CreateButton onClick={() => navigate("/edit")} endIcon={<AddCircle />}>
          Create Product
        </CreateButton>
      </Stack>
      <Grid
        container
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        marginTop={"20px"}
      >
        <Grid display={"flex"} alignItems={"center"} item md={5}>
          <SearchInput
            type="search"
            id="search"
            label="Search"
            value={searchString}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchString(e.target.value)
            }
            sx={{ width: "calc(100%-50px)" }}
          />
          <SearchButton onClick={() => searchProduct()}>
            <SearchIcon />
          </SearchButton>
        </Grid>
        <Grid
          item
          md={7}
          paddingLeft={"15px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-end"}
          gap={"15px"}
        >
          <Box>
            <Select
              fullWidth={true}
              size="small"
              defaultValue={"Category"}
              onChange={(e: SelectChangeEvent<unknown>) =>
                setCategory(e.target.value as string)
              }
              value={category}
            >
              <MenuItem value={"Category"}>All Category</MenuItem>
              {categories.map((item) => (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box width={"max-content"}>
            <Select
              fullWidth={true}
              size="small"
              defaultValue={0}
              onChange={(e: SelectChangeEvent<unknown>) =>
                setPrice(e.target.value as number)
              }
              value={price}
            >
              <MenuItem value={0} key={0}>
                All Price
              </MenuItem>
              {priceOptions.map((item, index) => (
                <MenuItem value={index + 1} key={index + 1}>
                  {index == 0 ? (
                    <>
                      {"<"} {item.to}$
                    </>
                  ) : index == priceOptions.length - 1 ? (
                    <>
                      {">"} {item.from}$
                    </>
                  ) : (
                    <>
                      {item.from}$ - {item.to}$
                    </>
                  )}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Grid>
      </Grid>
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
    </Box>
  );
}

export default WalletTable;
