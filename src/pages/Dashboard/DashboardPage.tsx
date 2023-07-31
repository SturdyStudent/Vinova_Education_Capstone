import React, { useState } from "react";
import { Box, Typography, styled, Tabs, Tab } from "@mui/material";
import BackHeader from "../../components/BackHeader/BackHeader";
import EventItem from "../../components/EventItem/EventItem";
import EducationContentTab from "../../components/EducationContentTab/EducationContentTab";
import Navigator from "../../components/Navigator/Navigator";
import Dashboard from "../../components/DashboardTab/Index";
import MyTransaction from "../../components/TransactionTab";
import SendFund from "../../components/SendFundTab";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function DashboardTabPanel({ children, index, value }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      <Typography color={"black"}>{children}</Typography>
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function DashboardPage() {
  const [value, setValue] = useState(0);

  const PageContainer = styled(Box)(({ theme }) => ({
    background: "white",
    minHeight: "calc(100vh - 112px)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginBottom: "50px",
  }));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <BackHeader pageName="Dashboard" removeBackIcon={true} />
      <PageContainer>
        <Box sx={{ borderBottom: 1, borderColor: "divider", padding: "none" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab
              label="Dashboard"
              {...a11yProps(0)}
              className="w-1/3 normal-case"
              sx={{ textTransform: "none !important" }}
            />
            <Tab
              label="Transaction"
              {...a11yProps(1)}
              className="w-1/3 text-center normal-case"
              sx={{ textTransform: "none !important" }}
            />
            <Tab
              label="Send Funds"
              {...a11yProps(2)}
              className="w-1/3 text-center normal-case"
              sx={{ textTransform: "none !important" }}
            />
          </Tabs>
        </Box>
        <DashboardTabPanel value={value} index={0}>
          <Dashboard />
        </DashboardTabPanel>
        <DashboardTabPanel value={value} index={1}>
          <MyTransaction />
        </DashboardTabPanel>
        <DashboardTabPanel value={value} index={2}>
          <SendFund />
        </DashboardTabPanel>
      </PageContainer>
      <Navigator />
    </div>
  );
}

export default DashboardPage;
