import { Box, Typography } from "@mui/material";
import { useSendFundStyle as useStyles } from "./styles";

function TitlePanel() {
  const classes = useStyles();

  return (
    <Box className={`${classes.titlePanel} ${classes.container}`}>
      <Typography fontSize={"25px"}>Transfer of Funds</Typography>
    </Box>
  );
}

export default TitlePanel;
