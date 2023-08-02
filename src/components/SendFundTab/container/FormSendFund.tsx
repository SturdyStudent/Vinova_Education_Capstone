import { Box, Button, Stack, styled, Container } from "@mui/material";
import PlaceHolder from "../../PlaceHolder/PlaceHolder";
import SummaryCard from "./SummaryCard";
import SendFundInput from "./SendFundInput";
import SendFundSelect from "./SendFundSelect";
import { SendFundInputlist } from "../../../assets/js/default-props";

function FormSendFund() {
  const FormContainer = styled(Container)(() => ({
    width: "100%",
    padding: "0 30px",
    marginTop: "31px",
  }));

  const SizedBox = styled(Box)(() => ({
    height: "50px",
  }));

  const SubmitButton = styled(Button)(({ theme }) => ({
    padding: "12px 30px",
    color: "white",
    background: theme.palette.secondary.main,
    borderRadius: "30px",
    marginBottom: "30px",
    border: "none",
    width: "80%",
  }));

  return (
    <FormContainer>
      <form>
        {SendFundInputlist.map((list, index, array) =>
          list.length == 0 ? (
            <>
              <SizedBox />
              <hr />
              <SizedBox />
            </>
          ) : (
            <>
              {list.map((item, index, array) => (
                <Stack>
                  {item.isSelect ? (
                    <>
                      <SendFundSelect {...item} />
                      {array.length > 1 && index != array.length - 1 ? (
                        <PlaceHolder />
                      ) : null}
                    </>
                  ) : (
                    <>
                      <SendFundInput {...item} />
                      {array.length > 1 && index != array.length - 1 ? (
                        <PlaceHolder />
                      ) : null}
                    </>
                  )}
                </Stack>
              ))}
              {list.length == 0 || array[index + 1].length == 0 ? null : (
                <PlaceHolder height={30} />
              )}
            </>
          )
        )}
        <SummaryCard />
        <Box textAlign={"center"}>
          <SubmitButton>Submit</SubmitButton>
        </Box>
      </form>
    </FormContainer>
  );
}

export default FormSendFund;
