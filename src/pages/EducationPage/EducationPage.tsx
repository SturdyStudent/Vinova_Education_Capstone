import React, { useState } from "react";
import { Box, Typography, styled, Tabs, Tab } from "@mui/material";
import BackHeader from "../../components/BackHeader/BackHeader";
import EventItem from "../../components/EventItem/EventItem";
import EducationContentTab from "../../components/EducationContentTab/EducationContentTab";
import EducationCourseTab from "../../components/EducationCourseTab/EducationCourseTab";

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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function EducationPage() {
  const [value, setValue] = useState(0);

  const PageContainer = styled(Box)(({ theme }) => ({
    padding: "0px 16px !important",
    background: "white",
    minHeight: "calc(100vh - 112px)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  }));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <BackHeader pageName="Groups" />
      <PageContainer>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab
              label="Content"
              {...a11yProps(0)}
              className="w-1/2 normal-case"
              sx={{ textTransform: "none !important" }}
            />
            <Tab
              label="Courses"
              {...a11yProps(1)}
              className="w-1/2 text-center normal-case"
              sx={{ textTransform: "none !important" }}
            />
          </Tabs>
        </Box>
        <EducationTabPanel value={value} index={0}>
          <EducationContentTab />
        </EducationTabPanel>
        <EducationTabPanel value={value} index={1}>
          <EducationCourseTab />
        </EducationTabPanel>
      </PageContainer>
    </div>
  );
}

export default EducationPage;
