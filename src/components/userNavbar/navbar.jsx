import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background:
      "linear-gradient(45deg, rgba(29, 157, 210, 1) 0%, rgba(1, 154, 66, 1) 100%)",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background:
      "linear-gradient(180deg, rgba(29, 157, 210, 1) 0%, rgba(1, 154, 66, 1) 100%)",
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  margin: {
    margin: theme.spacing(1),
  },
}));
const buttonstyle = {
  background: "#292770",
};
const iconstyle = {
  color: "#ffffff",
};
const textstyle = {
  color: "#ffffff",
};
export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            HRESOURCIFY
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {[
              "Dashboard",
              "Tasks",
              "Performance",
              "Attendace",
              "Leaves",
              "Benefits",
              "Calendar",
              "Personal Info",
            ].map((text, index) => (
              <ListItem style={buttonstyle} button key={text}>
                <ListItemIcon style={iconstyle}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText style={textstyle} primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}
