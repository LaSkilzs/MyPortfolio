import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../assets/aboutStyles";

const Back = props => {
  const { classes, project } = props;
  return (
    <Grid
      item
      md={4}
      key={project.id}
      onClick={() => props.handleImage(project.id)}
    >
      <p className={classes.p}>Skills: {project.language}</p>
      <p className={classes.summary}>Summary: {project.summary}</p>
      <p className={classes.contact}>
        <span className={classes.span}>{project.links["github"]}s</span>
        <span className={classes.span}>{project.links["youtube"]}</span>
        <span className={classes.span}>{project.links["deployed"]}</span>
      </p>
    </Grid>
  );
};

export default withStyles(styles)(Back);
