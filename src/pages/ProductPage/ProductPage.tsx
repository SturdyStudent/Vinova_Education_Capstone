import {
  Box,
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
  SvgIcon,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { IProducts } from "../../services/interface";
import {
  getLimitedProducts,
  getProductCategories,
  searchProducts,
} from "../../services/api";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { AddCircle } from "@mui/icons-material";
import { priceOptions } from "../../assets/js/default-props";
import { deleteLocalProduct, parseArray } from "../../services/utils";
import { DELETE_PRODUCT_LIST, PRODUCT_DATA } from "../../assets/js/constants";
import BackHeader from "../../components/BackHeader/BackHeader";
import ReactPaginate from "react-paginate";
import LeftCaret from "../../assets/icons/caretLeft.svg";
import RightCaret from "../../assets/icons/caretRight.svg";
import { ReactSVG } from "react-svg";

interface TableRowProp {
  isEven: boolean;
}

function ProductPage() {
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
  const [itemOffset, setItemOffset] = useState(0);

  const StyledTableHead = styled(TableHead)(() => ({
    borderBottom: "1px solid black",
    color: "#1F3684",
    "& th": { borderBottom: "1.5px solid #37383d", color: "#1F3684" },
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
    color: "black",
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
    "& div": {
      width: "100% !important",
    },
    "& label": {
      transform: "translate(14px, 7px) scale(1)",
    },
    "& label.Mui-focused": {
      transform: "translate(14px, -9px) scale(0.75)",
    },
  }));

  const itemsPerPage = 5;
  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = productList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(productList.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % productList.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

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
          if (index >= 0) {
            productList[index] = savedProduct;
          } else {
            productList.push(savedProduct);
          }
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
    <>
      <BackHeader pageName="Product" />
      <Box padding={"30px 15px"}>
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
          <CreateButton
            onClick={() => navigate("/edit")}
            endIcon={<AddCircle />}
          >
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
          <Grid display={"flex"} alignItems={"center"} item xs={5}>
            <SearchInput
              type="search"
              id="search"
              label="Search"
              value={searchString}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchString(e.target.value)
              }
            />
            <SearchButton onClick={() => searchProduct()}>
              <SearchIcon />
            </SearchButton>
          </Grid>
          <Grid
            item
            xs={7}
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
        <Table>
          <StyledTableHead>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>price</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Actions</TableCell>
          </StyledTableHead>
          {currentItems &&
            currentItems.map((item, index) => (
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
                  <EditButton onClick={() => navigate(`/edit/${item.id || 0}`)}>
                    Edit
                  </EditButton>
                  <DeleteButton
                    onClick={() => {
                      deleteLocalProduct(item.id || 0);
                      setProductList(
                        productList.filter((product) => item.id != product.id)
                      );
                    }}
                  >
                    Delete
                  </DeleteButton>
                </TableCell>
              </DesktopTableRow>
            ))}
        </Table>
      </Box>
      <Box textAlign={"center"} display={"flex"} justifyContent={"center"}>
        <ReactPaginate
          breakLabel="..."
          nextLabel={<ReactSVG src={RightCaret} />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={<ReactSVG src={LeftCaret} />}
          renderOnZeroPageCount={null}
          className="flex text-lg gap-4 mx-auto items-center text-blue-900"
        />{" "}
      </Box>
    </>
  );
}

export default ProductPage;
