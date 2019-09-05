import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";

class Interests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interests: {}
    };
  }
  render() {
    return (
      <Grid
        item
        md={8}
        style={{
          margin: "auto",
          padding: "5rem",
          height: "20rem"
        }}
      >
        <Typography style={{ fontSize: "1rem", color: "white" }}>
          My interests are requested..
        </Typography>
      </Grid>
    );
  }
}

export default Interests;
