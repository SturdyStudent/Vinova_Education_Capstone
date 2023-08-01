import { Box, Container, Typography, styled } from "@mui/material";
import Logo from "../../assets/img/Logo.png";

interface ITrybeLogo {
  width: number;
  height: number;
}

function TrybeLogo({ width, height }: ITrybeLogo) {
  const LogoContainer = styled(Container)(() => ({
    width: `${width}px`,
    height: `${height}px`,
    textAlign: "center",
    padding: "0 !important",
    zIndex: 1,
  }));
  return (
    <LogoContainer>
      <Box width={"45px"} height={"45px"} className={"mx-auto"}>
        <img src={Logo} className="object-cover h-full w-full" />
      </Box>
      <Typography fontSize={"40px"} fontWeight={600} textAlign={"center"}>
        Trybe
      </Typography>
      <Typography
        fontSize={"18px"}
        fontWeight={600}
        lineHeight={"10px"}
        textAlign={"right"}
      >
        Beta
      </Typography>
    </LogoContainer>
  );
}

export default TrybeLogo;
