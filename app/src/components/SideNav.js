import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Drawer } from "@material-ui/core";
import List from "./SimpleList";
import { Link } from "react-router-dom";
import "../containers/css/sidenav.css";

const drawerWidth = 100;

const sideLinks = [
  <Link to="/">
    <i className="fas fa-home" />
  </Link>,
  <Link to="/about">
    <i className="far fa-address-card" />
  </Link>,
  <Link to="/portfolio">
    <i className="fas fa-briefcase" />
  </Link>,
  <Link to="/blogs">
    <i className="far fa-file-word" />
  </Link>,
  <Link to="/contact">
    <i className="fas fa-envelope-open-text" />
  </Link>,
  <a href="https://github.com/LaSkilzs">
    <i className="fab fa-github-alt" />
  </a>,
  <a href="https://www.linkedin.com/in/la-fountain-649253112/">
    <i className="fab fa-linkedin" />
  </a>,
  <a href="/twitter">
    <i className="fab fa-twitter" />
  </a>
];

const theme = createMuiTheme({
  overrides: {
    MuiDrawer: {
      paper: {
        width: drawerWidth,
        backgroundColor: "white"
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
