import React from "react";
import Header from "../components/Header";
import BtnGroup from "../components/BtnGroup";
import { Paper, Grid } from "@material-ui/core";
import { projBtns } from "../utils/variables";
import projects from "../utils/projects";
import styles from "../assets/aboutStyles";
import { withStyles } from "@material-ui/core/styles";
import { languageIncluded } from "../utils/functions";
import Front from "../components/project/Front";
import Back from "../components/project/Back";
import ProjectModal from "../components/ProjectModal";

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

  handleImage = id => {
    let newProjects = [...this.state.projects];
    newProjects.map(project => {
      if (project.id === id) {
        project["back"] = !project["back"];
      }
    });
    this.setState({ projects: newProjects });
  };

  filtered = () => {
    return this.state.projects.map((project, idx) => {
      if (project.back)
        return (
          <ProjectModal
            key={idx}
            handleImage={this.handleImage}
            project={project}
          />
          // <Back key={idx} handleImage={this.handleImage} project={project} />
        );
      else
        return (
          <Front key={idx} handleImage={this.handleImage} project={project} />
        );
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.paper}>
        <Header name={"Projects"} />
        <BtnGroup names={projBtns} handleClick={this.handleClick} />
        <Grid container className={classes.grid}>
          {this.filtered()}
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(Portfolio);
