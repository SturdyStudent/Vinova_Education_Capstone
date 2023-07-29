import { makeStyles } from "@mui/styles";

export const useNavigatorStyles = makeStyles(() => ({
  navigatorContainer: {
    background: "black !important",
    color: "white !important",
    position: "fixed",
    bottom: 0,
    width: "100%",
    maxWidth: "640px",
  },
  navigatorAction: {
    fontSize: "10px !important",
    fontWeight: 500,
    lineHeight: "16px",
    color: "#999999 !important",
  },
}));
