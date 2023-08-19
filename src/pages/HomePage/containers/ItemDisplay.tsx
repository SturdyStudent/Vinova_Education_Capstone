import React from "react";
import { Container, Box, Typography, Button, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface IDisplayItem {
  itemName: string;
  route: string;
}

function ItemDisplay({ itemName, route }: IDisplayItem) {
  const ItemsDisplay = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "35px",
    zIndex: 1,
  }));
  const ViewButton = styled(Button)(() => ({
    padding: "0 !important",
  }));
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const handleNavigate = (route: string) => {
    navigate(route);
  };

  return (
    <ItemsDisplay>
      <Typography
        zIndex={1}
        color={"black"}
        fontSize={"18px"}
        fontWeight={600}
        lineHeight={"28px"}
      >
        {itemName}
      </Typography>
      <ViewButton onClick={() => handleNavigate(route)}>
        <Typography textTransform={"none"} fontSize={"14px"}>
          View all
        </Typography>
      </ViewButton>
    </ItemsDisplay>
  );
}

export default ItemDisplay;
