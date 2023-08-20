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

interface IConfirmDelete {
  deletedItem: number;
  setProductList: React.Dispatch<React.SetStateAction<IProducts[]>>;
  productList: IProducts[];
  openConfirmDelete: boolean;
  setConfirmDelete: React.Dispatch<React.SetStateAction<boolean>>;
}

function ConfirmDeleteDialog({
  deletedItem,
  setProductList,
  productList,
  openConfirmDelete,
  setConfirmDelete,
}: IConfirmDelete) {
  return (
    <Dialog open={openConfirmDelete} onClose={() => setConfirmDelete(false)}>
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
  );
}

export default ConfirmDeleteDialog;
