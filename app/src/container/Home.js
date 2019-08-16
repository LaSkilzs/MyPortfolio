import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

class Home extends Component {
  render() {
    return (
      <Paper>
        <Typography variant="h1" component="h2">
          La Fountain
        </Typography>
        <Typography variant="h3" component="h3">
          Creator
        </Typography>
        <Button>View My Work</Button>
      </Paper>
    );
  }
}

export default Home;
