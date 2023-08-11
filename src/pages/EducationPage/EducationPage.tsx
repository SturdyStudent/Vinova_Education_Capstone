import React, { useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import BackHeader from "../../components/BackHeader/BackHeader";
import EducationContentTab from "../../components/EducationContentTab/EducationContentTab";
import EducationCourseTab from "../../components/EducationCourseTab/EducationCourseTab";
import Navigator from "../../components/Navigator/Navigator";
import EducationTab from "./containers/EducationTab";
import { educationTabList } from "../../assets/js/default-props";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function EducationTabPanel({ children, index, value }: TabPanelProps) {
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
  padding: "0px 16px !important",
  background: "white",
  minHeight: "calc(100vh - 112px)",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  marginBottom: "50px",
  "& .indicator": {
    display: "flex",
    justifyContent: "center",
    "& > span": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "white",
    },
  },
  "& .flexContainer": {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // width:'fit-content'
  },
}));

function EducationPage() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <BackHeader pageName="Education" />
      <PageContainer>
        <EducationTab
          tabList={educationTabList}
          value={value}
          handleChange={handleChange}
        />
        <EducationTabPanel value={value} index={0}>
          <EducationContentTab />
        </EducationTabPanel>
        <EducationTabPanel value={value} index={1}>
          <EducationCourseTab />
        </EducationTabPanel>
      </PageContainer>
      <Navigator />
    </div>
  );
}

export default EducationPage;
