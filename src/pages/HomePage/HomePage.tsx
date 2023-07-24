import React from "react";
import { Container, Box, Typography, Button, styled } from "@mui/material";
import { useHomePageStyles } from "./HomePageStyles";
import { renderDefaultTheme as theme } from "../../theme/styles";
import ItemDisplay from "./container/ItemDisplay";
import MemberCard from "../../components/MemberCard/MemberCard";
import BackgroundPanel1 from "../../assets/img/bg-1.png";
import UserAvatar1 from "../../assets/img/member-1.jpg";
import CommunityLogo1 from "../../assets/img/commu1.jpg";
import CommunityLogo2 from "../../assets/img/commu2.png";
import CommunityLogo3 from "../../assets/img/commu3.png";
import CommunityCard from "../../components/CommunityCard/CommunityCard";
import CoursesCard from "../../components/CourseCard/CourseCard";
import avatar1 from "../../assets/img/avatar1.png";
import SmallLogo1 from "../../assets/img/smallLogo1.jpg";
import SmallLogo2 from "../../assets/img/smallLogo2.png";
import SmallLogo3 from "../../assets/img/smallLogo3.jpg";
import Carousel from "react-material-ui-carousel";
import EventImg from "../../assets/img/event_img.jpg";
import EventCard from "../../components/EventCard/EventCard";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../assets/css/commonStyles.css";
import { Pagination } from "swiper/modules";
import Header from "../../components/Header/Header";
import Navigator from "../../components/Navigator/Navigator";

function HomePage() {
  const classes = useHomePageStyles();
  const ToolSetup = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
  }));
  const SetupButton = styled(Button)(({ theme }) => ({
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
  const communitySettings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    vertical: false,
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
          slidesToShow: 3,
        },
      },
    ],
  };
  const courseSettings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    // responsive: [
    //   {
    //     breakpoint: 1000,
    //     settings: {
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 560,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    // ],
  };

  const membersObject = [
    {
      backgroundPanel: BackgroundPanel1,
      profilePic: UserAvatar1,
      industry: "Home Decor",
      memberName: "Mziwothando Maliti",
      companyName: "Mheza Engineering Pty",
    },
    {
      backgroundPanel: BackgroundPanel1,
      profilePic: UserAvatar1,
      industry: "Home Decor",
      memberName: "Mziwothando Maliti",
      companyName: "Mheza Engineering Pty",
    },
    {
      backgroundPanel: BackgroundPanel1,
      profilePic: UserAvatar1,
      industry: "Home Decor",
      memberName: "Mziwothando Maliti",
      companyName: "Mheza Engineering Pty",
    },
    {
      backgroundPanel: BackgroundPanel1,
      profilePic: UserAvatar1,
      industry: "Home Decor",
      memberName: "Mziwothando Maliti",
      companyName: "Mheza Engineering Pty",
    },
    {
      backgroundPanel: BackgroundPanel1,
      profilePic: UserAvatar1,
      industry: "Home Decor",
      memberName: "Mziwothando Maliti",
      companyName: "Mheza Engineering Pty",
    },
  ];

  return (
    <>
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
        <ItemDisplay itemName="Get to know other members!" />
        <Slider {...memberSettings}>
          <MemberCard
            backgroundPanel={BackgroundPanel1}
            profilePic={UserAvatar1}
            industry="Home Decor"
            memberName="Mziwothando Maliti"
            companyName="Mheza Engineering Pty"
          />
          <MemberCard
            backgroundPanel={BackgroundPanel1}
            profilePic={UserAvatar1}
            industry="Home Decor"
            memberName="Mziwothando Maliti"
            companyName="Mheza Engineering Pty"
          />
          <MemberCard
            backgroundPanel={BackgroundPanel1}
            profilePic={UserAvatar1}
            industry="Home Decor"
            memberName="Mziwothando Maliti"
            companyName="Mheza Engineering Pty"
          />
          <MemberCard
            backgroundPanel={BackgroundPanel1}
            profilePic={UserAvatar1}
            industry="Home Decor"
            memberName="Mziwothando Maliti"
            companyName="Mheza Engineering Pty"
          />
          <MemberCard
            backgroundPanel={BackgroundPanel1}
            profilePic={UserAvatar1}
            industry="Home Decor"
            memberName="Mziwothando Maliti"
            companyName="Mheza Engineering Pty"
          />
          <MemberCard
            backgroundPanel={BackgroundPanel1}
            profilePic={UserAvatar1}
            industry="Home Decor"
            memberName="Mziwothando Maliti"
            companyName="Mheza Engineering Pty"
          />
          <MemberCard
            backgroundPanel={BackgroundPanel1}
            profilePic={UserAvatar1}
            industry="Home Decor"
            memberName="Mziwothando Maliti"
            companyName="Mheza Engineering Pty"
          />
          <MemberCard
            backgroundPanel={BackgroundPanel1}
            profilePic={UserAvatar1}
            industry="Home Decor"
            memberName="Mziwothando Maliti"
            companyName="Mheza Engineering Pty"
          />
        </Slider>
        <SizedBox />
        <ItemDisplay itemName="Join a community!" />
        <div className="flex overflow-hidden items-start">
          <Slider {...communitySettings}>
            <CommunityCard logo={CommunityLogo1} communityName="BrownSense" />
            <CommunityCard
              logo={CommunityLogo2}
              communityName="Mzansi-Preneurs"
            />
            <CommunityCard logo={CommunityLogo3} communityName="XENA" />
          </Slider>
        </div>
        <SizedBox />
        <ItemDisplay itemName="Courses for you" />
        <div className="flex overflow-hidden items-start gap-3">
          <CoursesCard
            brandName="Meta"
            smallLogo={SmallLogo1}
            avatar={avatar1}
            courseTitle="Engage with your customer"
            duration="19 mins"
          />
          <CoursesCard
            brandName="Meta"
            smallLogo={SmallLogo1}
            avatar={avatar1}
            courseTitle="Engage with your customer"
            duration="19 mins"
          />
          <CoursesCard
            brandName="Meta"
            smallLogo={SmallLogo1}
            avatar={avatar1}
            courseTitle="Engage with your customer"
            duration="19 mins"
          />
        </div>
        <SizedBox />
        <ItemDisplay itemName="Events" />
        <EventCard
          brandName="Meta"
          smallLogo={SmallLogo1}
          avatar={EventImg}
          courseTitle="2023 Small Business "
          duration="19 mins"
        />
      </PageContainer>
    </>
  );
}

export default HomePage;
