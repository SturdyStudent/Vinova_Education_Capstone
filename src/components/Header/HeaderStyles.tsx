import { makeStyles } from "@mui/styles";

export const useHeaderStyles = makeStyles(() => ({
  headerContaier: {
    position: "relative !important" as "relative",
    padding: "28px 16px 10px 16px !important" as "padding",
    top: 0,
    left: 0,
    right: 0,
  },
  drawer: {
    width: "252px",
  },
}));
