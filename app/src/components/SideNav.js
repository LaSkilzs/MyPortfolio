import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Drawer } from "@material-ui/core";
import List from "./SimpleList";
import sideLinks from "../utils/sideLinks";
import "../containers/css/sidenav.css";

const drawerWidth = 100;
const breakpoints = createBreakpoints({});

const theme = createMuiTheme({
  overrides: {
    MuiDrawer: {
      paper: {
        width: drawerWidth,
        backgroundColor: "white",
        [breakpoints.down(1100)]: {}
      }
    }
  }
});

const SideNav = props => {
  return (
    <MuiThemeProvider theme={theme}>
      <Drawer variant="permanent">
        <List items={sideLinks} />
      </Drawer>
    </MuiThemeProvider>
  );
};
export default SideNav;
