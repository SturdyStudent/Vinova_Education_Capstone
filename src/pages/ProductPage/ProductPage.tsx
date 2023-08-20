import { Box, TableHead, styled, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { IProducts } from "../../services/interface";
import {
  getLimitedProducts,
  getProductCategories,
  searchProducts,
} from "../../services/api";
import { priceOptions } from "../../assets/js/default-props";
import { parseArray } from "../../services/utils";
import { DELETE_PRODUCT_LIST, PRODUCT_DATA } from "../../assets/js/constants";
import BackHeader from "../../components/BackHeader/BackHeader";
import ConfirmDeleteDialog from "./container/ConfirmDeleteDialog";
import Search from "./container/Search";
import PageTitle from "./container/PageTitle";
import Paginate from "./container/Paginate";
import Filter from "./container/Filter";
import ProductTable from "./container/ProductTable";

enum LoadType {
  Pagination = "Pagination",
  Load_More = "Load_More",
  Infinity_Load = "Infinity_Load",
}

function ProductPage() {
  const [baseProductData, setBaseProducts] = useState<IProducts[]>([]);
  const [productList, setProductList] = useState<IProducts[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [category, setCategory] = useState("Category");
  const [price, setPrice] = useState(0);
  const [searchString, setSearchString] = useState("");
  const [searchResultString, setSearchResultString] = useState("");
  const [itemOffset, setItemOffset] = useState(0);
  const [deletedItem, setDeleteItem] = useState<number>(-1);
  const [isNotFound, setNotFound] = useState(false);
  const [openConfirmDelete, setConfirmDelete] = useState<boolean>(false);
  const [loadType, setLoadType] = useState<LoadType>(LoadType.Pagination);

  const StyledTableHead = styled(TableHead)(() => ({
    borderBottom: "1px solid black",
    color: "#1F3684",
    "& th": { borderBottom: "1.5px solid #37383d", color: "#1F3684" },
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

  return (
    <>
      <BackHeader pageName="Product" />
      <Box padding={"30px 15px"}>
        <PageTitle loadType={loadType} setLoadType={setLoadType} />
        <Grid
          container
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          marginTop={"20px"}
        >
          <Grid display={"flex"} alignItems={"center"} item xs={5}>
            <Search
              searchString={searchString}
              searchProduct={searchProduct}
              setSearchResultString={setSearchResultString}
              setSearchString={setSearchString}
            />
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
            <Filter
              setCategory={setCategory}
              category={category}
              categories={categories}
              price={price}
              setPrice={setPrice}
            />
          </Grid>
        </Grid>
        <ConfirmDeleteDialog
          deletedItem={deletedItem || 0}
          setProductList={setProductList}
          productList={productList}
          openConfirmDelete={openConfirmDelete}
          setConfirmDelete={setConfirmDelete}
        />
        <ProductTable
          loadType={loadType}
          searchResultString={searchResultString}
          setItemsPerPage={setItemsPerPage}
          productList={productList}
          itemsPerPage={itemsPerPage}
          currentItems={currentItems}
          setDeleteItem={setDeleteItem}
          setConfirmDelete={setConfirmDelete}
          isNotFound={isNotFound}
        />
      </Box>
      <Paginate
        loadType={loadType}
        handlePageClick={handlePageClick}
        pageCount={pageCount}
        loadMoreProducts={loadMoreProducts}
      />
      <Box height={"50px"} />
    </>
  );
}

export default ProductPage;
