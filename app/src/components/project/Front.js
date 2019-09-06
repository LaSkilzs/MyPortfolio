import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../assets/aboutStyles";

const Front = props => {
  const { classes, project } = props;

  return (
    <React.Fragment>
      <Grid item md={4} key={project.id}>
        <div className={classes.div}>
          <img
            onClick={() => props.handleImage(project.id)}
            src={project.image}
            alt="projects"
            className={classes.img}
          />
          <p
            onClick={() => props.handleTitle(project.id)}
            className={classes.p}
          >
            {project.title}
          </p>
        </div>
      </Grid>
    </React.Fragment>
  );
};

export default withStyles(styles)(Front);
