import React from "react";
import { Box, Input, Typography, Divider } from "@mui/material";
import { useSendFundStyle as useStyles } from "./styles";
import PlaceHolder from "./PlaceHolder";
import SummaryCard from "./SummaryCard";
import SendFundInput from "./SendFundInput";
import SendFundSelect from "./SendFundSelect";

function FormSendFund() {
  const classes = useStyles();
  return (
    <form className={classes.container} style={{ marginTop: "31px" }}>
      <Box className={classes.inputRow}>
        <SendFundInput
          isLeft={true}
          label={"Amount"}
          type={"number"}
          placeholder={"0.00"}
        />
        <PlaceHolder />
        <SendFundSelect label={"Currency"} options={["EUR", "GBP", "USD"]} />
        <PlaceHolder />
        <SendFundSelect
          label={"SEPA or SWIFT"}
          isLeft={false}
          isRight={true}
          options={["SEPA", "SWIFT"]}
        />
      </Box>
      <hr className={classes.hr} />
      <Box className={classes.inputRow}>
        <SendFundSelect
          label={"IBAN"}
          options={["Send"]}
          isLeft={true}
          isRight={false}
        />
        <PlaceHolder />
        <SendFundInput
          label={"BIG/SWIFT"}
          placeholder={"Type here"}
          type={"text"}
          isLeft={true}
          isRight={true}
        />
      </Box>
      <Box className={classes.inputRow} marginTop={"30px"}>
        <SendFundInput
          label={"Receiving Bank"}
          placeholder={"Type here"}
          type={"text"}
          isLeft={true}
          isRight={false}
        />
        <PlaceHolder />
        <SendFundInput
          label={"Receiving Bank Address"}
          placeholder={"Type here"}
          type={"text"}
          isLeft={false}
          isRight={true}
          isFull={true}
        />
      </Box>
      <hr className={classes.hr} />
      <Box className={classes.inputRow}>
        <SendFundInput
          label={"Beneficiary"}
          placeholder={"Type here"}
          type={"text"}
          isLeft={true}
          isRight={false}
        />
        <PlaceHolder />
        <SendFundInput
          label={"Beneficiary Address"}
          placeholder={"Type here"}
          type={"text"}
          isLeft={false}
          isRight={true}
          isFull={true}
        />
      </Box>
      <Box className={classes.inputRow} marginTop={"30px"}>
        <SendFundInput
          isLeft={true}
          label={"City"}
          type={"number"}
          placeholder={"Type here"}
        />
        <PlaceHolder />
        <SendFundInput
          label={"Postal/ Zip code"}
          isLeft={true}
          isRight={true}
          placeholder={"Type here"}
        />
        <PlaceHolder />
        <SendFundInput
          label={"Country"}
          placeholder={"Type here"}
          isLeft={false}
          isRight={true}
        />
      </Box>
      <Box className={classes.inputRow} marginTop={"30px"}>
        <SendFundInput
          isLeft={true}
          label={"Transfer Date"}
          isRight={false}
          type={"date"}
          placeholder={"Type here"}
        />
        <PlaceHolder />
        <SendFundInput
          label={"Message to beneficiary"}
          isFull={true}
          isLeft={false}
          isRight={true}
          placeholder={"Type here"}
        />
      </Box>
      <hr className={classes.hr} />
      <SummaryCard />
      <div className={classes.submitHolder}>
        <button className={classes.submitButton}>Submit</button>
      </div>
    </form>
  );
}

export default FormSendFund;
