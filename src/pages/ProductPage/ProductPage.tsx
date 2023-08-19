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
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import React, { useState, useEffect, useRef, useCallback } from "react";
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

enum LoadType {
  Pagination = "Pagination",
  Load_More = "Load_More",
  Infinity_Load = "Infinity_Load",
}

function ProductPage() {
  const [baseProductData, setBaseProducts] = useState<IProducts[]>([]);
  const [loading, setIsLoading] = useState(false);
  const [hasMore, setHasmore] = useState(true);
  const [productList, setProductList] = useState<IProducts[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [category, setCategory] = useState("Category");
  const [price, setPrice] = useState(0);
  const [searchString, setSearchString] = useState("");
  const [searchResultString, setSearchResultString] = useState("");
  const [itemOffset, setItemOffset] = useState(0);
  const [openConfirmDelete, setConfirmDelete] = useState<boolean>(false);
  const [deletedItem, setDeleteItem] = useState<number>();
  const [isNotFound, setNotFound] = useState(false);
  const [loadType, setLoadType] = useState<LoadType>(LoadType.Pagination);

  const observer = useRef();
  const lastProductRef = (node: any) => {
    if (loading) return false;
    if (observer.current) {
      (observer.current as any).disconnect();
    }
    (observer.current as any) = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setItemsPerPage(itemsPerPage + 5);
      }
    });
  };
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

  const LoadMoreButton = styled(Button)(() => ({
    background: "#2271b1",
    border: "none",
    textTransform: "none",
  }));

  const [itemsPerPage, setItemsPerPage] = useState(5);
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

  const loadMoreProducts = () => {
    setItemsPerPage(itemsPerPage + 5);
  };

  const searchProduct = () => {
    setNotFound(false);
    searchProducts({ query: searchString })
      .then((result) => {
        const data: IProducts[] = result.data.products;
        setProductList(data);
        if (data.length == 0) {
          setNotFound(true);
        }
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getProductCategories()
      .then((result) => {
        setCategories(result.data);
      })
      .catch((e) => console.log(e));

    getLimitedProducts({ limit: 100, skip: 0 })
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

    switch (loadType) {
      case LoadType.Pagination:
        setItemsPerPage(5);
        break;
      case LoadType.Infinity_Load:
        setItemsPerPage(5);
        break;
      case LoadType.Load_More:
        setItemsPerPage(5);
        break;
    }
  }, [loadType]);

  useEffect(() => {
    let filterList: IProducts[] = baseProductData?.filter(
      (product) => product.category == category || category == "Category"
    );

    filterList = filterList.filter(
      (product) =>
        (product.price <= priceOptions[price - 1]?.to &&
          product.price > priceOptions[price - 1]?.from) ||
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
          <Stack flexDirection={"row"} gap={"15px"}>
            <Typography
              fontSize={"25px"}
              textAlign={"center"}
              color={"#1F3684"}
              fontWeight={400}
              alignSelf={"center"}
            >
              All Products
            </Typography>
            <Select
              defaultValue={LoadType.Pagination}
              value={loadType}
              onChange={(e) => {
                setLoadType(e.target.value as LoadType);
              }}
            >
              <MenuItem value={LoadType.Pagination} key={LoadType.Pagination}>
                Paginate
              </MenuItem>
              <MenuItem value={LoadType.Load_More} key={LoadType.Load_More}>
                Load more
              </MenuItem>
              <MenuItem
                value={LoadType.Infinity_Load}
                key={LoadType.Infinity_Load}
              >
                Infinity Scroll
              </MenuItem>
            </Select>
          </Stack>
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
            <TextField
              type="search"
              id="search"
              label="Search"
              value={searchString}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  searchProduct();
                  setSearchResultString(searchString);
                }
              }}
              required
              sx={{ ".MuiFormLabel-root[data-shrink=false]": { top: "-6px" } }}
              InputProps={{ style: { height: "40px" } }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchString(e.target.value)
              }
            />
            <SearchButton
              onClick={() => {
                setSearchResultString(searchString);
                searchProduct();
              }}
            >
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
        <Dialog
          open={openConfirmDelete}
          onClose={() => setConfirmDelete(false)}
        >
          <DialogTitle id="alert-dialog-title">{"Delete"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete this item?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setConfirmDelete(false)}>Cancel</Button>
            <Button
              onClick={() => {
                deleteLocalProduct(deletedItem || 0);
                setProductList(
                  productList.filter((product) => deletedItem != product.id)
                );
                setConfirmDelete(false);
              }}
              autoFocus
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
        <Table>
          <StyledTableHead>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Actions</TableCell>
          </StyledTableHead>
          {currentItems.length > 0 ? (
            currentItems.map((item, index) => (
              <DesktopTableRow
                key={item.id}
                ref={itemsPerPage === index + 1 ? lastProductRef : null}
                isEven={index % 2 == 0}
              >
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
                      setConfirmDelete(true);
                      setDeleteItem(item.id);
                    }}
                  >
                    Delete
                  </DeleteButton>
                </TableCell>
              </DesktopTableRow>
            ))
          ) : isNotFound ? (
            <DesktopTableRow isEven={false}>
              <TableCell colSpan={6} className="flex justify-center">
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  height={"300px"}
                >
                  <Typography color={"#1F3684"}>
                    There is no results for "{searchResultString}"
                  </Typography>
                </Box>
              </TableCell>
            </DesktopTableRow>
          ) : (
            <DesktopTableRow isEven={false}>
              <TableCell
                colSpan={6}
                className="flex justify-center text-center"
              >
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  height={"300px"}
                  alignItems={"center"}
                >
                  <CircularProgress color="secondary" />
                </Box>
              </TableCell>
            </DesktopTableRow>
          )}
        </Table>
      </Box>
      {loadType == LoadType.Pagination ? (
        <Box textAlign={"center"} display={"flex"} justifyContent={"center"}>
          <ReactPaginate
            breakLabel="..."
            nextLabel={<ReactSVG src={RightCaret} />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            activeClassName="font-bold text-xl"
            previousLabel={<ReactSVG src={LeftCaret} />}
            renderOnZeroPageCount={null}
            className="flex text-lg gap-4 mx-auto items-center text-blue-800"
          />{" "}
        </Box>
      ) : loadType == LoadType.Load_More ? (
        <Box display={"flex"} justifyContent={"center"}>
          <LoadMoreButton onClick={() => loadMoreProducts()}>
            <Typography color={"white"}>Load more</Typography>
          </LoadMoreButton>
        </Box>
      ) : (
        ""
      )}
      <Box height={"50px"} />
    </>
  );
}

export default ProductPage;
