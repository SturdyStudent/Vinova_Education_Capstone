import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../assets/css/commonStyles.css";
import { Box, Container, Typography, styled } from "@mui/material";
import TrybeLogo from "../../components/TrybeLogo/TrybeLogo";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { useState } from "react";
import { Link } from "react-router-dom";
import SuccessModal from "./containers/SuccessModal";

function RegisterPage() {
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);
  const PageContainer = styled(Container)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    padding: "16px",
    background: "black",
    position: "relative",
  }));
  const Wallpaper = styled(Container)(() => ({
    position: "absolute",
    top: 0,
    height: "511px",
    width: "100%",
    backgroundImage:
      "linear-gradient(359.94deg, #231F20 13.3%, rgba(43, 40, 41, 0.83) 41.52%, rgba(69, 68, 70, 0.36) 78.3%, rgba(88, 89, 91, 0) 98.82%),url(./public/backgroundEmployee2.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    border: "none",
    padding: "",
  }));

  return (
    <PageContainer>
      <Box height={"30px"} />
      <TrybeLogo width={106} height={101} />
      <Box height={"85px"} />
      <Wallpaper />
      <RegisterForm openSuccesModal={setOpenNavbar} />
      <Typography
        marginTop={"20px"}
        marginBottom={"30px"}
        fontSize={"12px"}
        lineHeight={"18px"}
      >
        Got an account?
        <span style={{ color: "#CCA000" }}>
          <Link to={"/login"}> Log in here</Link>
        </span>
      </Typography>
      <SuccessModal setOpenNavbar={setOpenNavbar} openNavbar={openNavbar} />
    </PageContainer>
  );
}

export default RegisterPage;
