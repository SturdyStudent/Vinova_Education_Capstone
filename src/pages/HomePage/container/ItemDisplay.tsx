import React from "react";
import { Container, Box, Typography, Button, styled } from "@mui/material";

interface IDisplayItem {
  itemName: string;
}

function ItemDisplay({ itemName }: IDisplayItem) {
  const ItemsDisplay = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "35px",
  }));
  const ViewButton = styled(Button)(() => ({
    padding: "0 !important",
  }));

  return (
    <ItemsDisplay>
      <Typography fontSize={"18px"} fontWeight={600} lineHeight={"28px"}>
        {itemName}
      </Typography>
      <ViewButton>
        <Typography textTransform={"none"} fontSize={"14px"}>
          View all
        </Typography>
      </ViewButton>
    </ItemsDisplay>
  );
}

export default ItemDisplay;
