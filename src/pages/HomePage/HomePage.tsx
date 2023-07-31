import { Container, Box, Typography, Button, styled } from "@mui/material";
import { useHomePageStyles } from "./HomePageStyles";
import ItemDisplay from "./container/ItemDisplay";
import MemberCard from "../../components/MemberCard/MemberCard";
import CommunityCard from "../../components/CommunityCard/CommunityCard";
import CoursesCard from "../../components/CourseCard/CourseCard";
import EventCard from "../../components/EventCard/EventCard";
import Slider, { Settings } from "react-slick";
import Header from "../../components/Header/Header";
import Navigator from "../../components/Navigator/Navigator";
import {
  EventCardList,
  cardMemberList,
  communityCardList,
  coursesCardList,
} from "../../assets/js/default-props";

function HomePage() {
  const classes = useHomePageStyles();
  const ToolSetup = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-between",
  }));
  const SetupButton = styled(Button)(() => ({
    borderRadius: "8px",
    border: "1px solid var(--primary-500, #FDC600)",
    background: "var(--primary-500, #FDC600)",

    /* Shadow/xs */
    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
    padding: "8px 14px",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    textTransform: "none",
  }));
  const PageContainer = styled(Container)(() => ({
    padding: "24px 16px !important",
  }));
  const SizedBox = styled(Box)(() => ({
    height: "24px",
  }));

  const memberSettings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    draggable: true,
    arrows: false,
    className: "overflow-none",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const courseSettings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    vertical: false,
    draggable: true,
    arrows: false,
    className: "overflow-none",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <Box className="relative pb-16 bg-white">
      <Header />
      <PageContainer className={`${classes.pageContaier}`}>
        <ToolSetup>
          <Box>
            <Typography textAlign={"left"} fontSize={"18px"} fontWeight={600}>
              Your Tools
            </Typography>
            <Typography fontSize={"14px"}>
              You haven't setup any tools yet
            </Typography>
          </Box>
          <Box>
            <SetupButton>
              <Typography fontSize={"14px"} fontWeight={600}>
                Setup
              </Typography>
            </SetupButton>
          </Box>
        </ToolSetup>
        <SizedBox />
        <ItemDisplay itemName="Get to know other members!" route="/member" />
        <Slider {...memberSettings}>
          {cardMemberList.map((item, index) => (
            <MemberCard
              key={index}
              backgroundPanel={item.backgroundPanel}
              profilePic={item.profilePic}
              industry={item.industry}
              memberName={item.memberName}
              companyName={item.companyName}
            />
          ))}
        </Slider>
        <SizedBox />
        <ItemDisplay itemName="Join a community!" route="/group" />
        <div className="overflow-hidden">
          <Slider {...courseSettings}>
            {communityCardList.map((item, index) => (
              <CommunityCard
                key={index}
                logo={item.logo}
                communityName={item.communityName}
              />
            ))}
          </Slider>
        </div>
        <SizedBox />
        <ItemDisplay itemName="Courses for you" route="/education" />
        <div className="overflow-hidden">
          <Slider {...courseSettings}>
            {coursesCardList.map((item, index) => (
              <CoursesCard
                key={index}
                brandName={item.brandName}
                smallLogo={item.smallLogo}
                avatar={item.avatar}
                courseTitle={item.courseTitle}
                duration={item.duration}
              />
            ))}
          </Slider>
        </div>
        <SizedBox />
        <ItemDisplay itemName="Events" route="/event" />
        {EventCardList.map((item) => (
          <>
            <EventCard
              brandName={item.brandName}
              avatar={item.avatar}
              courseTitle={item.courseTitle}
              smallLogo={item.smallLogo}
              date={item.date}
              to={item.to}
              from={item.from}
            />
            <Box height={"16px"} />
          </>
        ))}
      </PageContainer>
      <Navigator />
    </Box>
  );
}

export default HomePage;
