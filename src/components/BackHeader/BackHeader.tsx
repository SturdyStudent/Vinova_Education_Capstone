import {
  styled,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { GraySearch, GrayMessenger } from "../../assets/icons";
import { useNavigate } from "react-router-dom";

interface IBackHeader {
  pageName: string;
  removeBackIcon?: boolean;
}

function BackHeader({ pageName, removeBackIcon }: IBackHeader) {
  const BackHeader = styled(AppBar)(() => ({
    position: "relative",
    justifyContent: "center",
    padding: "16px !important",
    background: "white",
    color: "#101828",
    boxShadow: "none",
    borderBottom: "1px solid #f2f2f2",
  }));
  const navigate = useNavigate();

  return (
    <BackHeader>
      <Toolbar sx={{ padding: "0 !important", minHeight: "0 !important" }}>
        {removeBackIcon ? (
          ""
        ) : (
          <IconButton
            sx={{ padding: "0 !important" }}
            onClick={() => navigate(-1)}
          >
            <ChevronLeftIcon
              sx={{ width: "35px", height: "35px", color: "#101828" }}
            />
          </IconButton>
        )}
        <Typography
          fontSize={"18px"}
          fontWeight={600}
          lineHeight={"28px"}
          className="flex-1"
          sx={{ marginLeft: "16px" }}
        >
          {pageName}
        </Typography>
        <Box className={"flex gap-4 items-center"}>
          <IconButton sx={{ padding: "0 !important" }} className="w-6 h-6">
            <img src={GraySearch} alt="search" />
          </IconButton>
          <IconButton sx={{ padding: "0 !important" }} className="w-6 h-6">
            <img src={GrayMessenger} alt="message" style={{ fill: "black" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </BackHeader>
  );
}

export default BackHeader;
