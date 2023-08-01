import { Box, Tabs, Tab } from "@mui/material";
import { ITabHandler } from "../../../services/interface";

interface IDashboardTab {
  tabList: Array<ITabHandler>;
  value: any;
  handleChange: React.SetStateAction<any>;
}

function DashboardTabs({ tabList, value, handleChange }: IDashboardTab) {
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider", padding: "none" }}>
      <Tabs value={value} onChange={handleChange}>
        {tabList.map((item) => (
          <Tab
            label={item.label}
            sx={{ textTransform: "none !important", width: "33.3333%" }}
          />
        ))}
      </Tabs>
    </Box>
  );
}

export default DashboardTabs;
