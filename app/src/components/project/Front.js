import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../assets/aboutStyles";

const Front = props => {
  const { classes, project } = props;

  return (
    <React.Fragment>
      <Grid item md={4} key={project.id}>
        <img src={project.image} alt="projects" className={classes.img} />
        <p onClick={() => props.handleImage(project.id)} className={classes.p}>
          {project.title}
        </p>
      </Grid>
    </React.Fragment>
  );
};

export default withStyles(styles)(Front);
