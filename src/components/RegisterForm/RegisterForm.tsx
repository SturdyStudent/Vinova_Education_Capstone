import { useForm } from "react-hook-form";
import {
  FormLabel,
  TextField,
  Typography,
  styled,
  Button,
  FormGroup,
  Box,
} from "@mui/material";
import AlertIcon from "../../assets/icons/alertCircle.svg";
import { useEffect, useRef, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import { localUserSignup } from "../../services/utils";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  acceptTrybe: boolean;
  acceptFintech: boolean;
  acceptSubscribe: boolean;
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
  acceptTrybe: yup.bool().oneOf([true]).required(),
  acceptFintech: yup.bool().oneOf([true]).required(),
  acceptSubscribe: yup.bool().oneOf([true]).required(),
});

interface IRegisterForm {
  openSuccesModal: React.Dispatch<React.SetStateAction<boolean>>;
}

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

export default function RegisterForm({ openSuccesModal }: IRegisterForm) {
  const [isEmailDuplicate, setIsEmailDuplicate] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      acceptFintech: false,
      acceptSubscribe: false,
      acceptTrybe: false,
    },
  });

  const watchTrybe = watch("acceptTrybe");
  const watchFintech = watch("acceptFintech");
  const watchSubscribe = watch("acceptSubscribe");

  const refSubmit = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    refSubmit.current?.setAttribute("disabled", "true");
  }, []);

  const onSubmit = (data: Inputs) => {
    const { email, lastName, firstName, password } = data;

    if (!localUserSignup({ email, firstName, lastName, password })) {
      setIsEmailDuplicate(true);
      return;
    }
    setIsEmailDuplicate(false);
    openSuccesModal(true);
  };
  console.log("errors", errors);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-3"
        noValidate
        style={{ gap: "6px" }}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <FormLabel sx={{ color: "white" }}>First name</FormLabel>
        <StyledTextField
          placeholder="Type your first name"
          inputProps={{
            style: {
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 14,
              paddingRight: 14,
            },
          }}
          error={!!errors.firstName}
          fullWidth
          {...register("firstName")}
        />
        {errors.firstName && (
          <Typography
            color={"#F5A3A3"}
            zIndex={1}
            fontSize={"14px"}
            lineHeight={"20px"}
          >
            Please enter your first name
          </Typography>
        )}
        <FormLabel sx={{ color: "white" }} className="mt-5">
          Last name
        </FormLabel>
        <StyledTextField
          placeholder="Type your last name"
          inputProps={{
            style: {
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 14,
              paddingRight: 14,
            },
          }}
          fullWidth
          {...register("lastName")}
        />
        {errors.lastName && (
          <Typography
            color={"#F5A3A3"}
            zIndex={1}
            fontSize={"14px"}
            lineHeight={"20px"}
          >
            Please enter your last name
          </Typography>
        )}
        <FormLabel sx={{ color: "white", fontSize: "14px" }} className="mt-5">
          Email
        </FormLabel>
        <div className="relative">
          <StyledTextField
            placeholder="Type your email"
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
            {...register("email")}
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
            placeholder="Type your password"
            fullWidth
            {...register("password")}
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
              <input
                type="checkbox"
                {...register("acceptTrybe")}
                style={{ background: "#fef0c7", overflow: "hidden" }}
              />
            </div>
            <Typography>
              I agree to Trybe's{" "}
              <span
                style={{ color: "#05B0D6" }}
                className=":hover: cursor-pointer"
              >
                terms and conditions, end user license agreement,
              </span>{" "}
              and privacy policy{" "}
            </Typography>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <input
                type="checkbox"
                {...register("acceptFintech")}
                style={{ background: "#fef0c7", overflow: "hidden" }}
              />
            </div>
            <Typography>
              I agree to Tribe Fintech's{" "}
              <span
                style={{ color: "#05B0D6" }}
                className=":hover: cursor-pointer"
              >
                terms and conditions end user license agreement,
              </span>{" "}
              and
              <span
                style={{ color: "#05B0D6" }}
                className=":hover: cursor-pointer"
              >
                {" "}
                privacy policy
              </span>
            </Typography>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <input
                type="checkbox"
                {...register("acceptSubscribe")}
                style={{ background: "#fef0c7", overflow: "hidden" }}
              />
            </div>
            <Typography>
              Keep me updated on Trybe news, events and offers{" "}
            </Typography>
          </div>
          {(!watchFintech || !watchSubscribe || !watchTrybe) && (
            <Typography
              color={"#F5A3A3"}
              zIndex={1}
              fontSize={"14px"}
              lineHeight={"20px"}
            >
              Please check all terms and conditions
            </Typography>
          )}
          {isEmailDuplicate ? (
            <div>
              <Typography
                color={"#F5A3A3"}
                zIndex={1}
                fontSize={"14px"}
                lineHeight={"20px"}
              >
                Your email is duplicate
              </Typography>
            </div>
          ) : null}
        </FormGroup>
        <AuthButton
          sx={{
            background: "#FDC600",
            color: "black",
            ":disabled": {
              background: "#A9A9A9",
              color: "white",
            },
            ":hover": {
              background: "#A9A9A9",
              color: "white",
            },
          }}
          ref={refSubmit}
          disabled={(!watchFintech || !watchSubscribe || !watchTrybe) && true}
          variant="contained"
          type="submit"
        >
          <Typography fontSize={"16px"} fontWeight={600}>
            Register
          </Typography>
        </AuthButton>
      </form>
      <DevTool control={control} />
    </>
  );
}
