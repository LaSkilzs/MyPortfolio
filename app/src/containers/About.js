import React from "react";
import Header from "../components/Header";
import Card from "../components/ Card";
import changer from "../utils/functions";
import FootDash from "../components/FootDash";
import { Paper, Grid } from "@material-ui/core";
import styles from "../assets/aboutStyles";
import { withStyles } from "@material-ui/core/styles";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoGrid: "Info"
    };
  }

  handleClick = name => this.setState({ infoGrid: name });

  render() {
    const { classes } = this.props;
    let info = changer(this.state.infoGrid);

    return (
      <Paper className={classes.paper}>
        <Header name={"About Me"} />
        <Grid container>
          <Card />
          {info}
          <FootDash handleClick={this.handleClick} />
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(About);
