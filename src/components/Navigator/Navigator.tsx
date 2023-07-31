import BottomNavigation from "@mui/material/BottomNavigation/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction/BottomNavigationAction";
import { useNavigatorStyles } from "./NavigatorStyles";
import { navLinks } from "../../assets/js/default-props";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../../assets/icons/home.svg";
import { ReactSVG } from "react-svg";

function Navigator() {
  const classes = useNavigatorStyles();
  const [value, setValue] = useState(location.pathname.slice(1));
  const navigate = useNavigate();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setValue("Home");
        break;
      case "/education":
        setValue("Education");
        break;
      case "/group":
        setValue("Community");
        break;
      case "/dashboard":
        setValue("Dashboard");
        break;
      default:
        break;
    }
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    navigate(navLinks.filter((item) => item.label == newValue)[0].url);
    setValue(newValue);
  };
  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      className={classes.navigatorContainer}
    >
      {navLinks.map((item) => (
        <BottomNavigationAction
          label={item.label}
          value={item.label}
          icon={<ReactSVG src={item.icon} />}
          className={classes.navigatorAction}
          key={item.label}
          sx={{
            color: "#999999",
            "&.Mui-selected": {
              color: "#fdc600",
            },
          }}
        />
      ))}
    </BottomNavigation>
  );
}

export default Navigator;
