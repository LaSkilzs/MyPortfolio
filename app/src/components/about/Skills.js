import React, { Component } from "react";
import { Grid, Typography, List, ListItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import interestStyles from "../../assets/interestStyles";
import skills from "../../utils/skills";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: skills
    };
  }
  render() {
    let { classes } = this.props;
    return (
      <Grid item md={8} className={classes.container}>
        <Typography className={classes.paragraph}>
          Techncially, I am interested in how things are connected that is one
          of the reasons, I chose full stack development. Understanding the
          power and challenges of inteconnectedness via technology. My other
          skills involve full stack development and enterprise software.
        </Typography>
        <List className={classes.list}>
          {this.state.skills.map(skill => (
            <Grid item md={2} key={skill.id}>
              <ListItem>{skill.icon}</ListItem>
              <ListItem className={classes.name}>{skill.name}</ListItem>
            </Grid>
          ))}
        </List>
      </Grid>
    );
  }
}

export default withStyles(interestStyles)(Skills);
