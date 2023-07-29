import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../assets/css/commonStyles.css";
import {
  Box,
  Container,
  Typography,
  styled,
  Button,
  Drawer,
} from "@mui/material";
import Logo from "../../assets/img/Logo.png";
import TrybeLogo from "../../components/TrybeLogo/TrybeLogo";
import SuccessIcon from "../../assets/img/successIcon.png";
import FooterLogo from "../../assets/img/FooterLogo.png";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { useState } from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [openNavbar, setOpenNavbar] = useState<boolean>();
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

  const SuccessModalContainer = styled(Drawer)(() => ({
    width: "360px",
    height: "459px",
    display: "flex",
    flexDirection: "column",
    padding: "15px !important",
  }));
  const AuthButton = styled(Button)(() => ({
    textTransform: "none",
    display: "flex",
    padding: "10px 18px",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flex: "1 0 0",
    borderRadius: "8px",
    border: "1px solid #FDC600",
    fontSize: "16px",
    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
  }));

  return (
    <PageContainer>
      <Box height={"30px"} />
      <TrybeLogo width={106} height={101} />
      <Box height={"85px"} />
      <Wallpaper />
      <RegisterForm />
      <Typography
        sx={{ marginTop: "20px", marginBottom: "30px" }}
        fontSize={"12px"}
        lineHeight={"18px"}
      >
        Got an account?
        <span style={{ color: "#CCA000" }}>
          <Link to={"/login"}> Log in here</Link>
        </span>
      </Typography>
      <Button onClick={() => setOpenNavbar(true)}>test</Button>
      <SuccessModalContainer
        anchor="bottom"
        open={openNavbar}
        onClose={() => setOpenNavbar(false)}
        PaperProps={{
          style: {
            padding: "15px",
            paddingTop: "50px",
            textAlign: "center",
            borderRadius: "30px 30px 0 0",
          },
        }}
      >
        <Typography fontSize={"25px"} fontWeight={600}>
          Success
        </Typography>
        <Box height={"10px"} />
        <Box
          width={"120px"}
          height={"115px"}
          margin={"0 auto"}
          sx={{ padding: "0 !important", marginBottom: "20px" }}
        >
          <img src={SuccessIcon} className="object-fill h-full w-full" />
        </Box>
        <Typography
          fontSize={"16px"}
          width={"80%"}
          margin={"0 auto"}
          color={"black"}
        >
          Thank you for signing up! Please check your email for the verification
          code
        </Typography>
        <AuthButton sx={{ background: "#FDC600", marginTop: "100px" }}>
          <Typography fontSize={"16px"} fontWeight={600} color={"black"}>
            Continue
          </Typography>
        </AuthButton>
      </SuccessModalContainer>
    </PageContainer>
  );
}

export default RegisterPage;
