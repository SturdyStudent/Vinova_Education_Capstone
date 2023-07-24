import React from "react";
import { Box, Typography, styled } from "@mui/material";
import BackHeader from "../../components/BackHeader/BackHeader";
import EventItem from "../../components/EventItem/EventItem";

function GroupPage() {
  const PageContainer = styled(Box)(({ theme }) => ({
    padding: "24px 16px !important",
    background: "white",
    minHeight: "calc(100vh - 112px)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  }));

  return (
    <div>
      <BackHeader pageName="Groups" />
      <PageContainer>
        <Typography
          fontSize={"16px"}
          fontWeight={600}
          lineHeight={"24px"}
          color={"black"}
        >
          Join a community!
        </Typography>
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
      </PageContainer>
    </div>
  );
}

export default GroupPage;
