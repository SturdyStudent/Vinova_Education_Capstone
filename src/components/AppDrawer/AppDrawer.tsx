import { styled, Drawer } from "@mui/material";
import { drawerItemList } from "../../assets/js/default-props";
import DrawerItemList from "./containers/DrawerItemList";
import DrawerHeader from "./containers/DrawerHeader";
interface IAppDrawer {
  openNavBar?: boolean;
  setOpenNavbar: OpenDrawerFunction;
}
const StyledDrawer = styled(Drawer)(() => ({
  position: "relative",
  width: "252px !important",
  color: "#808080",
}));

type OpenDrawerFunction = (isOpen: boolean) => void;

function AppDrawer({ openNavBar, setOpenNavbar }: IAppDrawer) {
  return (
    <StyledDrawer
      anchor="left"
      open={openNavBar}
      PaperProps={{
        style: {
          color: "#808080",
          borderRadius: "0 10px 10px 0",
          width: "252px",
        },
      }}
      transitionDuration={{ appear: 500, enter: 500, exit: 500 }}
      onClose={() => setOpenNavbar(false)}
    >
      <DrawerHeader />
      <DrawerItemList drawerItemList={drawerItemList} />
    </StyledDrawer>
  );
}

export default AppDrawer;
