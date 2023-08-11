import { Box, styled } from "@mui/material";
import { useState } from "react";
import OverflowContainer from "../../pages/HomePage/containers/OverflowContainer";
import CategoryButton from "../CategoryButton/CategoryButton";
import { categoryList } from "../../assets/js/default-props";

const CategoryContainer = styled(Box)(() => ({
  padding: "0",
  display: "flex",
  gap: "8px",
}));

function CategoryList() {
  const [selectAll, setSelectAll] = useState(false);

  return (
    <CategoryContainer>
      <OverflowContainer>
        <CategoryButton
          selectAll={selectAll}
          setSelectAll={setSelectAll}
          isSelectAllButton={true}
        >
          All
        </CategoryButton>
        {categoryList.map((item) => (
          <CategoryButton selectAll={selectAll} setSelectAll={setSelectAll}>
            {item}
          </CategoryButton>
        ))}
      </OverflowContainer>
    </CategoryContainer>
  );
}

export default CategoryList;
