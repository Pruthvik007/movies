import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { CONSTANTS } from "../Helpers/Constants";
import AutoComplete from "./Common/MUI/AutoComplete";

export default function Header({ setType }) {
  const [state, setState] = React.useState(false);
  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState((s) => !s);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <List>
        {[CONSTANTS.MOVIES, CONSTANTS.SHOWS].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={(e) => {
                setType(text);
              }}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[CONSTANTS.PEOPLE, CONSTANTS.ALL].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              disabled
              onClick={(e) => {
                setType(text);
              }}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div>
            <React.Fragment>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={toggleDrawer()}
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor={"left"} open={state} onClose={toggleDrawer()}>
                {list()}
              </Drawer>
            </React.Fragment>
          </div>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              FLIX-ZON
            </Typography>
          <AutoComplete searchFor={CONSTANTS.ALL} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
