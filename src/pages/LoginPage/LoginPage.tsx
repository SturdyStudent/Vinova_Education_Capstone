import "../../assets/css/commonStyles.css";
import { Box, Container, styled } from "@mui/material";
import TrybeLogo from "../../components/TrybeLogo/TrybeLogo";
import FooterLogo from "../../assets/img/FooterLogo.png";
import LoginForm from "./containers/LoginForm";

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
  height: "100%",
  width: "100%",
  backgroundBlendMode: "multiply",
  backgroundImage:
    "linear-gradient(359.94deg, #231F20 13.3%, rgba(43, 40, 41, 0.83) 41.52%, rgba(69, 68, 70, 0.36) 78.3%, rgba(88, 89, 91, 0) 98.82%), url(./public/backgroundEmployee1.png)",
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

function LoginPage() {
  return (
    <>
      <PageContainer>
        <Box height={"30px"} />
        <TrybeLogo width={106} height={101} />
        <Box height={"136px"} />
        <Wallpaper />
        <LoginForm />
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
