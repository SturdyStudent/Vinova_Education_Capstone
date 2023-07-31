import React from "react";
import { Box, Typography, styled } from "@mui/material";
import BackHeader from "../../components/BackHeader/BackHeader";
import EventItem from "../../components/EventItem/EventItem";
import { eventItemList } from "../../assets/js/default-props";

function EventPage() {
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
      <BackHeader pageName="Event" />
      <PageContainer>
        <Typography
          fontSize={"16px"}
          fontWeight={600}
          lineHeight={"24px"}
          color={"black"}
        >
          Participate in our awesome events!
        </Typography>
        {eventItemList.map((item) => (
          <EventItem {...item} />
        ))}
      </PageContainer>
    </div>
  );
}

export default EventPage;
