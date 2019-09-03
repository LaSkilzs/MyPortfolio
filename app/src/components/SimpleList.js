import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";

const SimpleList = props => {
  return (
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
  );
};

export default SimpleList;
