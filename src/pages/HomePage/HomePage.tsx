import { Container, Box, styled } from "@mui/material";
import Header from "../../components/Header/Header";
import Navigator from "../../components/Navigator/Navigator";
import {
  cardMemberList,
  communityCardList,
  coursesCardList,
} from "../../assets/js/default-props";
import { EventCardList } from "../../assets/js/default-props";
import ToolSetup from "./containers/ToolSetup";
import MemberRow from "./containers/MemberRow";
import CoursesRow from "./containers/CoursesRow";
import EventRow from "./containers/EventRow";
import CommunityRow from "./containers/CommunityRow";

function HomePage() {
  const SizedBox = styled(Box)(() => ({
    height: "24px",
  }));

  return (
    <Box className="relative pb-16 bg-white">
      <Header />
      <Container className="px-4 py-6">
        <ToolSetup />
        <SizedBox />
        <MemberRow cardMemberList={cardMemberList} />
        <SizedBox />
        <CommunityRow communityCardList={communityCardList} />
        <SizedBox />
        <CoursesRow coursesCardList={coursesCardList} />
        <SizedBox />
        <EventRow EventCardList={EventCardList} />
      </Container>
      <Navigator />
    </Box>
  );
}

export default HomePage;
