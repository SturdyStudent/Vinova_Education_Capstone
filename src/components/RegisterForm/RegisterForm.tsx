import { useForm, SubmitHandler } from "react-hook-form";
import {
  FormLabel,
  TextField,
  Typography,
  styled,
  Button,
  FormGroup,
  Box,
} from "@mui/material";
import AlertIcon from "../../assets/icons/alert-circle.svg";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(/^(?=.*d).{8,}$/)
    .min(8)
    .required(),
});

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    clearErrors,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>({
    defaultValues: {
      email: "test@gmail",
      firstName: "test",
      lastName: "test",
      password: "password1",
    },
  });

  const onSubmit = (data: Inputs) => console.log(data);

  const StyledTextField = styled(TextField)(() => ({
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

  console.log("submit đi", isSubmitSuccessful);

  return (
    <>
      <form
        onSubmit={(e) => {
          clearErrors();
          handleSubmit(onSubmit);
          e.preventDefault();
        }}
        className="w-full flex flex-col gap-3"
        noValidate
        style={{ gap: "6px" }}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <FormLabel sx={{ color: "white" }}>First name</FormLabel>
        <StyledTextField
          defaultValue="email@test"
          inputProps={{
            style: {
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 14,
              paddingRight: 14,
            },
          }}
          error={!!errors.email}
          helperText={errors.email?.message}
          fullWidth
          {...register("firstName", {
            required: "Email is required",
          })}
        />
        <FormLabel sx={{ color: "white" }} className="mt-5">
          Last name
        </FormLabel>
        <StyledTextField
          defaultValue="test"
          inputProps={{
            style: {
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 14,
              paddingRight: 14,
            },
          }}
          fullWidth
          {...register("lastName", {
            required: "Email is required",
          })}
        />
        ,
        <FormLabel sx={{ color: "white", fontSize: "14px" }} className="mt-5">
          Email
        </FormLabel>
        <div className="relative">
          <StyledTextField
            defaultValue="test"
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
            {...register("email", {
              required: "Email is required",
            })}
          />
          <Box
            width={"20px"}
            height={"20px"}
            position={"absolute"}
            top={12}
            right={14}
          >
            <img src={AlertIcon} className="object-fit h-full w-full" />
          </Box>
        </div>
        {errors.email && (
          <Typography color={"#F5A3A3"} fontSize={"14px"} lineHeight={"20px"}>
            Please enter a valid email address.
          </Typography>
        )}
        <FormLabel sx={{ color: "white" }} className="mt-5">
          Password
        </FormLabel>
        <div className="relative">
          <StyledTextField
            defaultValue="test"
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
            {...register("password", {
              required: "Email is required",
            })}
          />
          <Box
            width={"20px"}
            height={"20px"}
            position={"absolute"}
            top={12}
            right={14}
          >
            <img src={AlertIcon} className="object-fit h-full w-full" />
          </Box>
        </div>
        {errors.password && (
          <Typography color={"#F5A3A3"} fontSize={"14px"} lineHeight={"20px"}>
            Password field must be at least 8 characters and 1 number.
          </Typography>
        )}
        <FormGroup className="flex flex-col gap-6 mb-9 mt-10">
          <div className="flex items-center gap-3">
            <div>
              <input type="checkbox" />
            </div>
            <Typography>
              I agree to Trybe's{" "}
              <span style={{ color: "#05B0D6" }}>
                terms and conditions, end user license agreement,
              </span>
              and privacy policy{" "}
            </Typography>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <input type="checkbox" />
            </div>
            <Typography>
              I agree to Tribe Fintech's{" "}
              <span style={{ color: "#05B0D6" }}>
                terms and conditions end user license agreement
              </span>
              , and
              <span style={{ color: "#05B0D6" }}>privacy policy</span>
            </Typography>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <input type="checkbox" />
            </div>
            <Typography>
              Keep me updated on Trybe news, events and offers{" "}
            </Typography>
          </div>
        </FormGroup>
        <AuthButton
          sx={{ background: "#FDC600" }}
          variant="contained"
          type="submit"
        >
          <Typography fontSize={"16px"} fontWeight={600} color={"black"}>
            Register
          </Typography>
        </AuthButton>
      </form>
      <DevTool control={control} />
    </>
  );
}
