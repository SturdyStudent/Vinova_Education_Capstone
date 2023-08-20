import { Table, TableCell, TableHead, Typography, styled } from "@mui/material";
import { IProducts } from "../../../services/interface";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductList from "../container/ProductList";
import { LoadType } from "../../../services/interface";
import { SetStateAction } from "react";

const StyledTableHead = styled(TableHead)(() => ({
  borderBottom: "1px solid black",
  color: "#1F3684",
  "& th": { borderBottom: "1.5px solid #37383d", color: "#1F3684" },
}));
interface IProductTable {
  loadType: string;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
  itemsPerPage: number;
  productList: IProducts[];
  searchResultString: string;
  currentItems: IProducts[];
  setDeleteItem: React.Dispatch<React.SetStateAction<number>>;
  setConfirmDelete: React.Dispatch<React.SetStateAction<boolean>>;
  isNotFound: boolean;
}
function ProductTable({
  loadType,
  setItemsPerPage,
  itemsPerPage,
  productList,
  searchResultString,
  currentItems,
  setDeleteItem,
  setConfirmDelete,
  isNotFound,
}: IProductTable) {
  return (
    <Table>
      <StyledTableHead>
        <TableCell>ID</TableCell>
        <TableCell>Title</TableCell>
        <TableCell>Price</TableCell>
        <TableCell>Category</TableCell>
        <TableCell>Image</TableCell>
        <TableCell>Actions</TableCell>
      </StyledTableHead>
      {loadType === LoadType.Infinity_Load ? (
        <InfiniteScroll
          next={() => {
            setTimeout(() => {
              setItemsPerPage(itemsPerPage + 5);
            }, 500);
          }}
          hasMore={itemsPerPage < productList.length}
          loader={
            <Typography
              color={"black"}
              fontSize={"18px"}
              textAlign={"center"}
              marginTop={"10px"}
            >
              Loading...
            </Typography>
          }
          dataLength={currentItems.length}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          pullDownToRefreshThreshold={50}
        >
          <ProductList
            currentItems={currentItems}
            searchResultString={searchResultString}
            setDeleteItem={setDeleteItem}
            setConfirmDelete={function (value: SetStateAction<boolean>): void {
              throw new Error("Function not implemented.");
            }}
            isNotFound={false}
          />
        </InfiniteScroll>
      ) : (
        <ProductList
          currentItems={currentItems}
          searchResultString={searchResultString}
          setConfirmDelete={setConfirmDelete}
          setDeleteItem={setDeleteItem}
          isNotFound={isNotFound}
        />
      )}
    </Table>
  );
}

export default ProductTable;
