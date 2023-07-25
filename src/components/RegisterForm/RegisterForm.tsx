import { useForm, SubmitHandler } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  TextField,
  Typography,
  styled,
  Button,
  FormGroup,
  Box,
} from "@mui/material";
import AlertIcon from "../../assets/icons/alert-circle.svg";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
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
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <FormControl
      onSubmit={void handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-3"
      sx={{ gap: "6px" }}
    >
      {/* register your input into the hook by invoking the "register" function */}
      <FormLabel sx={{ color: "white" }}>First name</FormLabel>
      <StyledTextField
        defaultValue="test"
        {...register("example")}
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
      <FormLabel sx={{ color: "white" }} className="mt-5">
        Last name
      </FormLabel>
      <StyledTextField
        defaultValue="test"
        {...register("example")}
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
      <FormLabel sx={{ color: "white", fontSize: "14px" }} className="mt-5">
        Email
      </FormLabel>
      <div className="relative">
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
      <Typography color={"#F5A3A3"} fontSize={"14px"} lineHeight={"20px"}>
        Please enter a valid email address.
      </Typography>
      <FormLabel sx={{ color: "white" }} className="mt-5">
        Password
      </FormLabel>
      <div className="relative">
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
      {errors.exampleRequired && (
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
      <AuthButton sx={{ background: "#FDC600" }}>
        <Typography fontSize={"16px"} fontWeight={600} color={"black"}>
          Register
        </Typography>
      </AuthButton>
    </FormControl>
  );
}
