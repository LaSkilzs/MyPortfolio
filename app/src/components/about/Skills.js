import React, { Component } from "react";
import { Grid, Typography, List, ListItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import interestStyles from "../../assets/interestStyles";
import skills from "../../utils/skills";
import { typography } from "@material-ui/system";

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
        <Typography variant="h4" className={classes.head}>
          Technical Skillset
        </Typography>
        <List className={classes.list}>
          {this.state.skills.map(skill => (
            <Grid item md={2} key={skill.id}>
              <ListItem style={{ fontSize: "1.3rem" }}>{skill.icon}</ListItem>

              <ListItem className={classes.name}>{skill.name}</ListItem>
            </Grid>
          ))}
        </List>
      </Grid>
    );
  }
}

export default withStyles(interestStyles)(Skills);
