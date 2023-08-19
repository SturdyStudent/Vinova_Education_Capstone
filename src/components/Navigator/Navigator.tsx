import { navLinks } from "../../assets/js/default-props";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  styled,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import { ReactSVG } from "react-svg";

const NavigatorContainer = styled(BottomNavigation)(() => ({
  background: "black !important",
  zIndex: 100,
  position: "fixed",
  bottom: 0,
  width: "100%",
  maxWidth: "640px",
}));
const NavigatorAction = styled(BottomNavigationAction)(() => ({
  fontSize: "10px !important",
  fontWeight: 500,
  lineHeight: "16px",
  fill: "#999999",
  zIndex: 100,
}));

function Navigator() {
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
    <NavigatorContainer value={value} onChange={handleChange} showLabels>
      {navLinks.map((item) => (
        <NavigatorAction
          label={item.label}
          value={item.label}
          icon={<ReactSVG src={item.icon} />}
          key={item.label}
          sx={{
            color: "#999999",
            "&.Mui-selected": {
              color: "#fdc600",
            },
          }}
        />
      ))}
    </NavigatorContainer>
  );
}

export default Navigator;
