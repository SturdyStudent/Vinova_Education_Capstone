import { Box, Typography, styled } from "@mui/material";
import React, { useState, useEffect } from "react";

interface ICategoryButton {
  children: string | JSX.Element | JSX.Element[] | JSX.Element;
  selectAll: boolean;
  setSelectAll: React.Dispatch<React.SetStateAction<boolean>>;
  isSelectAllButton?: boolean;
}

function CategoryButton({
  children,
  selectAll,
  setSelectAll,
  isSelectAllButton,
}: ICategoryButton) {
  const CategoryButtonContainer = styled(Box)(() => ({
    padding: "4px 12px",
    borderRadius: "16px",
    border: "1px solid var(--gray-200, #E6E6E6)",
    width: "fit-content",
    background: !isSelectAllButton
      ? isSelected
        ? "var(--primary-500, #FDC600)"
        : "white"
      : selectAll
      ? "var(--primary-500, #FDC600)"
      : "white",
    ":hover": {
      cursor: "pointer",
      background: "#dcdcdc",
    },
  }));

  const [isSelected, setSelect] = useState(false);

  useEffect(() => {
    if (selectAll) {
      setSelect(false);
    }
  }, [selectAll]);

  return (
    <CategoryButtonContainer
      onClick={() => {
        if (isSelectAllButton) {
          setSelectAll(!selectAll);
        } else {
          setSelectAll(false);
          setSelect(!isSelected);
        }
      }}
    >
      <Typography
        fontSize={"14px"}
        lineHeight={"20px"}
        color={"black"}
        fontWeight={600}
        whiteSpace={"nowrap"}
      >
        {children}
      </Typography>
    </CategoryButtonContainer>
  );
}

export default CategoryButton;
