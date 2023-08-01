import React from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { ITabHandler } from "../../../services/interface";

interface IEducationTab {
  tabList: Array<ITabHandler>;
  value: any;
  handleChange: React.SetStateAction<any>;
}

function EducationTab({ tabList, value, handleChange }: IEducationTab) {
  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          {tabList.map((item) => (
            <Tab
              label={item.label}
              sx={{ textTransform: "none !important", width: "50%" }}
            />
          ))}
        </Tabs>
      </Box>
    </div>
  );
}

export default EducationTab;
