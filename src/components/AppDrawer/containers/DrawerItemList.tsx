import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  styled,
} from "@mui/material";
import { IDrawerItem } from "../../../services/interface";
import { ReactSVG } from "react-svg";

interface IDrawerItemList {
  drawerItemList: Array<IDrawerItem>;
}

function DrawerItemList({ drawerItemList }: IDrawerItemList) {
  const StyledListItem = styled(ListItem)(() => ({
    ":hover": {
      background: "#e5e5e5",
      color: "black",
      cursor: "pointer",
    },
  }));

  return (
    <List>
      {drawerItemList &&
        drawerItemList.map((item, index) => (
          <div key={index}>
            <StyledListItem>
              <span>
                <ReactSVG src={item.icon} />
              </span>
              <ListItemText>
                <Typography
                  paddingLeft={"8px"}
                  lineHeight={"20px"}
                  fontSize={"14px"}
                >
                  {item.label}
                </Typography>
              </ListItemText>
            </StyledListItem>
            <Divider />
          </div>
        ))}
    </List>
  );
}

export default DrawerItemList;
