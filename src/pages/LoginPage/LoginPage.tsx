import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../assets/css/commonStyles.css";
import { Box, Container, Typography, styled, Button } from "@mui/material";
import Logo from "../../assets/img/Logo.png";
import TrybeLogo from "../../components/TrybeLogo/TrybeLogo";
import FooterLogo from "../../assets/img/FooterLogo.png";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import LoginForm from "../../components/LoginForm/LoginForm";

interface IStyledButton {
  isSignup: boolean;
  value: string;
}

function LoginPage() {
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
      "linear-gradient(0deg, #000000 0%, rgba(43, 40, 41, 0.83) 33.00%, rgba(69, 68, 70, 0.36) 67.00%, rgba(88, 89, 91, 0.00) 100%),url(./public/backgroundRegister.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    border: "none",
    padding: "",
  }));

  const FooterLogoContainer = styled(Box)(() => ({
    width: "190px",
    height: "40px",
    position: "relative",
    zIndex: 1,
  }));

  return (
    <>
      <PageContainer>
        <Box height={"30px"} />
        <TrybeLogo width={106} height={101} />
        <Box height={"136px"} />
        <Wallpaper />
        <LoginForm />
        <Typography
          sx={{ marginTop: "32px", marginBottom: "30px" }}
          fontSize={"12px"}
          lineHeight={"18px"}
        >
          Don't have an account?
        </Typography>
        <Typography
          fontSize={"14px"}
          color={"#CCA000"}
          fontWeight={600}
          lineHeight={"20px"}
        >
          Sign up now
        </Typography>
        <Box height={"51px"} />
        <FooterLogoContainer>
          <img src={FooterLogo} className="object-fill w-full h-full" />
        </FooterLogoContainer>
        <Box height={"31px"} />
      </PageContainer>
    </>
  );
}

export default LoginPage;
