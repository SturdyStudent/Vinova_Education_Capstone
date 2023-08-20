import {
  Box,
  TableCell,
  TableRow,
  Typography,
  styled,
  Button,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { IProducts } from "../../../services/interface";
import { useNavigate } from "react-router-dom";

interface TableRowProp {
  isEven: boolean;
}

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

interface IProductList {
  currentItems: IProducts[];
  searchResultString: string;
  setDeleteItem: React.Dispatch<React.SetStateAction<number>>;
  setConfirmDelete: React.Dispatch<React.SetStateAction<boolean>>;
  isNotFound: boolean;
}

function ProductList({
  currentItems,
  searchResultString,
  setDeleteItem,
  setConfirmDelete,
  isNotFound,
}: IProductList) {
  const navigate = useNavigate();
  return currentItems.length > 0 ? (
    currentItems.map((item, index) => (
      <DesktopTableRow
        key={item.id}
        // ref={itemsPerPage === index + 1 ? lastProductRef : null}
        isEven={index % 2 == 0}
      >
        <TableCell>{item.id}</TableCell>
        <TableCell>{item.title}</TableCell>
        <TableCell>{item.price.toLocaleString()}$</TableCell>
        <TableCell>{item.category}</TableCell>
        <TableCell>
          <Box width={"40px"} height={"50px"}>
            <img src={item.images[0]} className="object-cover h-full w-full" />
          </Box>
        </TableCell>
        <TableCell>
          <EditButton onClick={() => navigate(`/edit/${item.id || 0}`)}>
            Edit
          </EditButton>
          <DeleteButton
            onClick={() => {
              setConfirmDelete(true);
              setDeleteItem(item.id || 0);
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
        <Box display={"flex"} justifyContent={"center"} height={"300px"}>
          <Typography color={"#1F3684"}>
            There is no results for "{searchResultString}"
          </Typography>
        </Box>
      </TableCell>
    </DesktopTableRow>
  ) : (
    <DesktopTableRow isEven={false}>
      <TableCell colSpan={6} className="flex justify-center text-center">
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
  );
}

export default ProductList;
