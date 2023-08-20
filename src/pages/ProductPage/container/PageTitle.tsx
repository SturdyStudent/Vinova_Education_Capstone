import {
  Typography,
  styled,
  Stack,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import React from "react";

import { useNavigate } from "react-router-dom";
import { AddCircle } from "@mui/icons-material";

enum LoadType {
  Pagination = "Pagination",
  Load_More = "Load_More",
  Infinity_Load = "Infinity_Load",
}

const CreateButton = styled(Button)(() => ({
  textTransform: "none",
  background: "#eb5202",
  padding: "5px 10px",
  borderRadius: "5px",
  color: "white",
  fontSize: "16px",
  marginLeft: "20px",
}));

interface IPageTitle {
  loadType: string;
  setLoadType: React.Dispatch<React.SetStateAction<LoadType>>;
}
function PageTitle({ loadType, setLoadType }: IPageTitle) {
  const navigate = useNavigate();
  return (
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
          <MenuItem value={LoadType.Infinity_Load} key={LoadType.Infinity_Load}>
            Infinity Scroll
          </MenuItem>
        </Select>
      </Stack>
      <CreateButton onClick={() => navigate("/edit")} endIcon={<AddCircle />}>
        Create Product
      </CreateButton>
    </Stack>
  );
}

export default PageTitle;
