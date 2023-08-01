import { Container, Box, styled, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../assets/css/commonStyles.css";
import MemberCard from "../../components/MemberCard/MemberCard";

import BackHeader from "../../components/BackHeader/BackHeader";
import { cardMemberList } from "../../assets/js/default-props";

const PageContainer = styled(Container)(() => ({
  padding: "24px 16px !important",
  background: "white",
}));

const MemberCardHolder = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "16px",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  },
}));
function MemberPage() {
  return (
    <>
      <BackHeader pageName="Members" />
      <PageContainer>
        <Typography
          fontSize={"16px"}
          fontWeight={600}
          lineHeight={"24px"}
          color={"black"}
        >
          Get to know other members!
        </Typography>
        <Box height={"16px"} />
        <MemberCardHolder>
          {cardMemberList.map((item) => (
            <MemberCard {...item} />
          ))}
        </MemberCardHolder>
      </PageContainer>
    </>
  );
}

export default MemberPage;
