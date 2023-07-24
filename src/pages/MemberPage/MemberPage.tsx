import {
  Container,
  Box,
  Button,
  styled,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Swiper styles
import { GraySearch, GrayMessenger } from "../../assets/icons";
import "swiper/css";
import "swiper/css/pagination";
import "../../assets/css/commonStyles.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MemberCard from "../../components/MemberCard/MemberCard";
import {
  MemberPic1,
  MemberPic2,
  MemberPic3,
  MemberPic4,
  MemberPic5,
  MemberPic6,
  MemberPic7,
  MemberPic8,
  MemberPic9,
  MemberPic10,
  MemberBackground1,
  MemberBackground2,
  MemberBackground3,
  MemberBackground4,
  MemberBackground5,
  MemberBackground6,
  MemberBackground7,
  MemberBackground8,
  MemberBackground9,
  MemberBackground10,
} from "../../assets/img";
import BackHeader from "../../components/BackHeader/BackHeader";

function MemberPage() {
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
    background: "white",
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
  const memberList = [
    {
      backgroundPanel: MemberBackground1,
      profilePic: MemberPic1,
      memberName: "Luan Naidoo",
      companyName: "Speaker Store",
      industry: "Apparel & Fashion",
    },
    {
      backgroundPanel: MemberBackground2,
      profilePic: MemberPic2,
      memberName: "Annika Zulu",
      companyName: "Olivia Co.",
      industry: "Apparel & Fashion",
    },
    {
      backgroundPanel: MemberBackground3,
      profilePic: MemberPic3,
      memberName: "Ainah Nwadike",
      companyName: "Senai",
      industry: "Jewelry",
    },
    {
      backgroundPanel: MemberBackground4,
      profilePic: MemberPic4,
      memberName: "Elna Khosa",
      companyName: "Golden Beauty",
      industry: "Health & Beauty",
    },
    {
      backgroundPanel: MemberBackground5,
      profilePic: MemberPic5,
      memberName: "Olivia Rhye",
      companyName: "The Jolly Co.",
      industry: "Apparel & Fashion",
    },
    {
      backgroundPanel: MemberBackground6,
      profilePic: MemberPic6,
      memberName: "Bongani Mbatha",
      companyName: "ShutterScape",
      industry: "Photography Services",
    },
    {
      backgroundPanel: MemberBackground7,
      profilePic: MemberPic7,
      memberName: "Ingrid Eckstein",
      companyName: "Isis Designer Goldsmith",
      industry: "Apparel & Fashion",
    },
    {
      backgroundPanel: MemberBackground8,
      profilePic: MemberPic8,
      memberName: "Lulama Ndlovu",
      companyName: "LO Lasers",
      industry: "Apparel & Fashion",
    },
    {
      backgroundPanel: MemberBackground9,
      profilePic: MemberPic9,
      memberName: "Apparel & Fashion",
      companyName: "CoralBloom Studio",
      industry: "Home Decor",
    },
    {
      backgroundPanel: MemberBackground10,
      profilePic: MemberPic10,
      memberName: "Linda Dube",
      companyName: "Timeless Memories",
      industry: "Textiles",
    },
  ];
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
  const MemberCardHolder = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "16px",
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    },
  }));

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
          {memberList.map((item) => (
            <MemberCard {...item} />
          ))}
        </MemberCardHolder>
      </PageContainer>
    </>
  );
}

export default MemberPage;
