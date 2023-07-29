import { makeStyles } from "@mui/styles";

export const useNavigatorStyles = makeStyles(() => ({
  navigatorContainer: {
    background: "black !important",

    position: "fixed",
    bottom: 0,
    width: "100%",
    maxWidth: "640px",
  },
  navigatorAction: {
    fontSize: "10px !important",
    fontWeight: 500,
    lineHeight: "16px",
    fill: "#999999",
    color: "#fdc600",
    "&.css-i4bv87-MuiSvgIcon-root": {
      color: "white",
      fill: "#fdc600 !important",
    },
  },
}));
