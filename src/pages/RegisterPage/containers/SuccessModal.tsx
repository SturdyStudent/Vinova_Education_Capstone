import { SetStateAction, Dispatch } from "react";
import { styled, Drawer, Typography, Box, Button } from "@mui/material";
import SuccessIcon from "../../../assets/img/successIcon.png";
import { useNavigate } from "react-router-dom";

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

interface ISuccessModal {
  setOpenNavbar: Dispatch<SetStateAction<boolean>>;
  openNavbar: boolean;
}

function SuccessModal({ setOpenNavbar, openNavbar }: ISuccessModal) {
  const navigate = useNavigate();

  return (
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
      <AuthButton
        sx={{ background: "#FDC600", marginTop: "100px" }}
        onClick={() => navigate("/login")}
      >
        <Typography fontSize={"16px"} fontWeight={600} color={"black"}>
          Continue
        </Typography>
      </AuthButton>
    </SuccessModalContainer>
  );
}

export default SuccessModal;
