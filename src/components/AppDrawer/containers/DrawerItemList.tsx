import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { IDrawerItem } from "../../../services/interface";
import { ReactSVG } from "react-svg";

interface IDrawerItemList {
  drawerItemList: Array<IDrawerItem>;
}

function DrawerItemList({ drawerItemList }: IDrawerItemList) {
  return (
    <List>
      {drawerItemList &&
        drawerItemList.map((item, index) => (
          <div key={index}>
            <ListItem>
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
            </ListItem>
            <Divider />
          </div>
        ))}
    </List>
  );
}

export default DrawerItemList;
