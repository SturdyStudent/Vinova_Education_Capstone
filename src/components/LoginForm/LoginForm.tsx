import { useForm, SubmitHandler } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  TextField,
  Typography,
  styled,
  Button,
  Input,
  Box,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState, MouseEventHandler } from "react";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const [showPassword, setShowPassword] = useState(false);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  console.log(watch("example")); // watch input value by passing the name of it
  const StyledTextField = styled(Input)(() => ({
    display: "flex",
    alignItems: "center",
    width: "100%",
    gap: "8px",
    alignSelf: "stretch",
    background: "white",
    borderRadius: "8px",
    border: "1px solid #EB4747",
    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
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
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <FormControl
      onSubmit={void handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-3"
      sx={{ gap: "6px" }}
    >
      <FormLabel
        sx={{
          color: "white",
          fontSize: "14px",
          "&.Mui-focused": {
            color: "white",
          },
        }}
        className="mt-5"
      >
        Email
      </FormLabel>
      <StyledTextField
        defaultValue="test"
        {...register("example")}
        type="email"
        inputProps={{
          style: {
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 14,
            paddingRight: 14,
          },
        }}
        fullWidth
      />

      <Typography color={"#F5A3A3"} fontSize={"14px"} lineHeight={"20px"}>
        Please enter a valid email address.
      </Typography>
      <FormLabel
        sx={{
          color: "white",
          "&.Mui-focused": {
            color: "white",
          },
        }}
        className="mt-5"
      >
        Password
      </FormLabel>
      <StyledTextField
        defaultValue="test"
        {...register("example")}
        type="password"
        inputProps={{
          style: {
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 14,
            paddingRight: 14,
          },
        }}
        fullWidth
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />

      <div className="mt-6">
        <Typography color={"#fff"} fontSize={"12px"} lineHeight={"20px"}>
          Forgot your password?
        </Typography>
      </div>
      <AuthButton sx={{ background: "#FDC600", marginTop: "46px" }}>
        <Typography fontSize={"16px"} fontWeight={600} color={"black"}>
          Login
        </Typography>
      </AuthButton>
    </FormControl>
  );
}
