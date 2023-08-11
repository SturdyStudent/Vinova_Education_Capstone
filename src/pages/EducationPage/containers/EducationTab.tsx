import React from "react";
import { Box, Tabs, Tab, styled } from "@mui/material";
import { ITabHandler } from "../../../services/interface";

interface IEducationTab {
  tabList: Array<ITabHandler>;
  value: any;
  handleChange: React.SetStateAction<any>;
}

function EducationTab({ tabList, value, handleChange }: IEducationTab) {
  return (
    <div>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            sx: {
              backgroundColor: "#cca000",
              width: "20% !important",
              marginLeft: "15%",
            },
          }}
          centered
        >
          {tabList.map((item) => (
            <Tab
              label={item.label}
              sx={{
                textTransform: "none !important",
                width: "50%",
                "&.Mui-selected": {
                  color: "#cca000",
                },
              }}
            />
          ))}
        </Tabs>
      </Box>
    </div>
  );
}

export default EducationTab;
