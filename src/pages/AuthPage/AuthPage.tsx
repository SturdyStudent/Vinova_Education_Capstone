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

interface IStyledButton {
  isSignup: boolean;
  value: string;
}

function AuthPage() {
  const PageContainer = styled(Container)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    padding: "16px",
    backgroundImage:
      "linear-gradient(to bottom, #00000028 5%, #000000e6),url(./public/phoneWallpaper.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    justifyContent: "center",
  }));
  const LogoContainer = styled(Container)(() => ({
    width: "131px",
    height: "120px",
    textAlign: "center",
    padding: "0 !important",
  }));
  const ButtonContainer = styled(Box)(() => ({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginTop: "20px",
    width: "100%",
    maxWidth: "350px",
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

    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
  }));
  const FooterLogoContainer = styled(Box)(() => ({
    width: "190px",
    height: "40px",
    position: "absolute",
    bottom: "31px",
  }));

  const StyledAuthButton = ({ isSignup, value }: IStyledButton) => (
    <AuthButton sx={{ background: isSignup ? "white" : "#FDC600" }}>
      <Typography
        fontSize={"16px"}
        fontWeight={600}
        color={isSignup ? "#FDC600" : "black"}
      >
        {value}
      </Typography>
    </AuthButton>
  );

  return (
    <>
      <PageContainer>
        <Box height={"160px"} />
        <TrybeLogo width={131} height={119} />
        <ButtonContainer>
          <StyledAuthButton isSignup={true} value="Signup" />
          <StyledAuthButton isSignup={false} value="Login" />
        </ButtonContainer>
        <FooterLogoContainer>
          <img src={FooterLogo} className="object-fill w-full h-full" />
        </FooterLogoContainer>
      </PageContainer>
    </>
  );
}

export default AuthPage;
