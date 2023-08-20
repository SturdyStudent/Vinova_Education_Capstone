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
  TableBody,
  List,
} from "@mui/material";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { deleteLocalProduct } from "../../../services/utils";
import { IProducts } from "../../../services/interface";
import SearchIcon from "@mui/icons-material/Search";

interface ISearch {
  searchString: string;
  searchProduct: () => void;
  setSearchResultString: React.Dispatch<React.SetStateAction<string>>;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
}
const SearchButton = styled(Button)(() => ({
  background: "#eb5202",
  border: "1px solid #eb5202",
  color: "white",
  "&:hover": {
    color: "black",
  },
}));

function Search({
  searchString,
  searchProduct,
  setSearchResultString,
  setSearchString,
}: ISearch) {
  return (
    <Stack flexDirection={"row"}>
      {" "}
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
    </Stack>
  );
}

export default Search;
