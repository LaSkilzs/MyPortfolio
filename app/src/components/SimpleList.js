import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

const theme = createMuiTheme({
  overrides: {
    MuiList: {
      root: {
        [breakpoints.down(1100)]: {
          // display: "flex",
          // backgroundColor: "black"
        }
      }
    },
    MuiListItem: {
      root: {
        [breakpoints.down(1100)]: {}
      }
    }
  }
});

const SimpleList = props => {
  return (
    <MuiThemeProvider theme={theme}>
      <List>
        <Typography
          variant="h3"
          component="h3"
          style={{
            marginLeft: "20px",
            marginTop: "20px",
            marginBottom: "20px",
            color: "#1f1823",
            fontFamily: "Great Vibes, cursive"
          }}
        >
          La
        </Typography>
        <Divider />
        {props.items.map((link, index) => (
          <ListItem key={index} style={{ marginTop: "2rem" }}>
            {link}
          </ListItem>
        ))}
      </List>
    </MuiThemeProvider>
  );
};

export default SimpleList;
