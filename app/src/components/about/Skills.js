import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: {}
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
          More Skills Needed;
        </Typography>
      </Grid>
    );
  }
}

export default Skills;
