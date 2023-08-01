import React, { useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import BackHeader from "../../components/BackHeader/BackHeader";
import Navigator from "../../components/Navigator/Navigator";
import Dashboard from "../../components/DashboardTab/Index";
import MyTransaction from "../../components/TransactionTab";
import SendFund from "../../components/SendFundTab";
import DashboardTabs from "./containers/DashboardTabs";
import { tabList } from "../../assets/js/default-props";
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

const PageContainer = styled(Box)(() => ({
  background: "white",
  minHeight: "calc(100vh - 112px)",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  marginBottom: "50px",
}));

function DashboardPage() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <BackHeader pageName="Dashboard" removeBackIcon={true} />
      <PageContainer>
        <DashboardTabs
          tabList={tabList}
          value={value}
          handleChange={handleChange}
        />
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
