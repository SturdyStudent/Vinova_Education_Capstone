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
import { IRegisterForm } from "../../services/interface";
import _ from "lodash";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { parseArray } from "../../services/utils";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

type Inputs = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(/^(?=.*d).{8,}$/)
    .min(8)
    .required(),
});

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [loginFail, setLoginFail] = useState<boolean>(false);
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const credentials: IRegisterForm[] = parseArray(
      localStorage.getItem("USER_INFO")
    );
    const loginSuccess = credentials.some(
      (item) => item.email == data.email && item.password == data.password
    );
    if (loginSuccess) {
      navigate("/");
    } else {
      setLoginFail(true);
      return;
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-3"
      noValidate
      style={{ gap: "6px" }}
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
        placeholder="Type your email"
        {...register("email")}
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

      {errors.email && (
        <Typography
          zIndex={1}
          color={"#F5A3A3"}
          fontSize={"14px"}
          lineHeight={"20px"}
        >
          Please enter a valid email address.
        </Typography>
      )}
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
        placeholder="Type your password"
        type="password"
        inputProps={{
          style: {
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 14,
            paddingRight: 14,
          },
        }}
        {...register("password")}
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
      {errors.password ? (
        <Typography
          zIndex={1}
          color={"#F5A3A3"}
          fontSize={"14px"}
          lineHeight={"20px"}
        >
          Password must contains at least 8 characters and 1 number
        </Typography>
      ) : (
        ""
      )}
      {loginFail && (
        <Typography
          zIndex={1}
          color={"#F5A3A3"}
          fontSize={"14px"}
          lineHeight={"20px"}
        >
          Incorrect username or password
        </Typography>
      )}
      <div className="mt-6 z-10">
        <Typography color={"#fff"} fontSize={"12px"} lineHeight={"20px"}>
          Forgot your password?
        </Typography>
      </div>
      <AuthButton
        type="submit"
        sx={{ background: "#FDC600", marginTop: "46px" }}
      >
        <Typography fontSize={"16px"} fontWeight={600} color={"black"}>
          Login
        </Typography>
      </AuthButton>
    </form>
  );
}
