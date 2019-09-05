import React from "react";
import Header from "../components/Header";
import BtnGroup from "../components/BtnGroup";
import { Paper, Grid } from "@material-ui/core";
import { projBtns } from "../utils/variables";
import projects from "../utils/projects";
import styles from "../assets/aboutStyles";
import { withStyles } from "@material-ui/core/styles";
import { languageIncluded } from "../utils/functions";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: projects,
      back: false
    };
  }

  handleClick = category => {
    let newProjects = [...projects];
    if (category.toLowerCase() === "all")
      this.setState({ projects: newProjects });
    else
      newProjects = projects.filter(project =>
        languageIncluded(category, project.language)
      );

    this.setState({ projects: newProjects });
  };

  handleImage = () => console.log("well");

  handleBack = () => console.log();
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.paper}>
        <Header name={"Portfolio"} />
        <BtnGroup names={projBtns} handleClick={this.handleClick} />
        <Grid container className={classes.grid}>
          {this.state.projects.map(project => {
            if (this.state.back) {
              return (
                <Grid
                  item
                  md={4}
                  key={project.id}
                  onClick={() => this.handleImage(project.id)}
                >
                  <p className={classes.p}>Skills: {project.language}</p>
                  <p className={classes.summary}>Summary: {project.summary}</p>
                  <p className={classes.contact}>
                    <span className={classes.span}>
                      {project.links["github"]}
                    </span>
                    <span className={classes.span}>
                      {project.links["youtube"]}
                    </span>
                    <span className={classes.span}>
                      {project.links["deployed"]}
                    </span>
                  </p>
                </Grid>
              );
            } else {
              return (
                <Grid item md={4} key={project.id}>
                  <img
                    src={project.image}
                    alt="projects"
                    className={classes.img}
                    onClick={this.handleImage}
                  />
                  <p
                    onClick={() => this.handleImage(project.id)}
                    className={classes.p}
                  >
                    {project.title}
                  </p>
                </Grid>
              );
            }
          })}
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(Portfolio);
