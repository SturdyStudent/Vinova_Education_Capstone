import BottomNavigation from "@mui/material/BottomNavigation/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction/BottomNavigationAction";
import { useNavigatorStyles } from "./NavigatorStyles";
import { navLinks } from "../../assets/js/default-props";

function Navigator() {
  const classes = useNavigatorStyles();

  return (
    <BottomNavigation showLabels className={classes.navigatorContainer}>
      {navLinks.map((item) => (
        <BottomNavigationAction
          label={item.label}
          icon={<img src={item.icon} />}
          className={classes.navigatorAction}
          sx={{ "& span": { fontSize: "10px !important", marginTop: "5px" } }}
        />
      ))}
    </BottomNavigation>
  );
}

export default Navigator;
