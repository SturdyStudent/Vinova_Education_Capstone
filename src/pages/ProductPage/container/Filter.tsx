import { Box, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import React from "react";
import { priceOptions } from "../../../assets/js/default-props";

interface IFilter {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  categories: string[];
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
}

function Filter({
  setCategory,
  category,
  categories,
  price,
  setPrice,
}: IFilter) {
  return (
    <div>
      <Box>
        <Select
          fullWidth={true}
          size="small"
          defaultValue={"Category"}
          onChange={(e: SelectChangeEvent<unknown>) =>
            setCategory(e.target.value as string)
          }
          value={category}
        >
          <MenuItem value={"Category"}>All Category</MenuItem>
          {categories.map((item) => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box width={"max-content"}>
        <Select
          fullWidth={true}
          size="small"
          defaultValue={0}
          onChange={(e: SelectChangeEvent<unknown>) =>
            setPrice(e.target.value as number)
          }
          value={price}
        >
          <MenuItem value={0} key={0}>
            All Price
          </MenuItem>
          {priceOptions.map((item, index) => (
            <MenuItem value={index + 1} key={index + 1}>
              {index == 0 ? (
                <>
                  {"<"} {item.to}$
                </>
              ) : index == priceOptions.length - 1 ? (
                <>
                  {">"} {item.from}$
                </>
              ) : (
                <>
                  {item.from}$ - {item.to}$
                </>
              )}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </div>
  );
}

export default Filter;
