import React from "react";
import { Grid, List, ListItem, Typography } from "@material-ui/core";
import experience from "../../utils/experience";
import MobileStepper from "../DotMobileStepper";
import { withStyles } from "@material-ui/core/styles";
import expStyles from "../../assets/expStyles";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: experience,
      start: 0
    };
  }

  handleRight = () => {
    console.log("right", this.state.start);
    if (this.state.start < this.state.experience.length - 1) {
      this.setState({ start: this.state.start + 1 });
    } else {
      this.setState({ start: 0 });
    }
  };
  handleLeft = () => {
    if (
      this.state.start < this.state.experience.length - 1 &&
      this.state.start !== 0
    ) {
      this.setState({ start: this.state.start - 1 });
    } else {
      this.setState({ start: 0 });
    }
  };

  render() {
    const { classes } = this.props;
    let num = this.state.start;
    console.log(num);
    console.log(this.state.experience);

    return (
      <Grid item md={8} className={classes.item}>
        <List className={classes.list}>
          <React.Fragment>
            <Grid item md={8} className={classes.head}>
              <ListItem>{this.state.experience[num].name}</ListItem>
              <ListItem>{this.state.experience[num].location}</ListItem>
            </Grid>
            <Grid item md={8} className={classes.data}>
              <ListItem>{this.state.experience[num].position}</ListItem>
              <ListItem>{this.state.experience[num].date}</ListItem>
            </Grid>
            <Grid item md={8} className={classes.response}>
              {this.state.experience[num].responsibilities.map((resp, idx) => (
                <ListItem key={idx}>{resp}</ListItem>
              ))}
            </Grid>
            <Grid item md={12}>
              <Typography variant="h6" style={{ marginLeft: "20rem" }}>
                {"Technologies Used:"}
              </Typography>
            </Grid>
            <Grid item md={8}>
              <ListItem className={classes.skills}>
                {this.state.experience[num].skills.map((skill, idx) => (
                  <span className={classes.listskill} key={idx}>
                    {skill}
                  </span>
                ))}
              </ListItem>
            </Grid>

            <Grid item md={12}>
              <ListItem>
                <MobileStepper
                  steps={5}
                  handleLeft={this.handleLeft}
                  handleRight={this.handleRight}
                />
              </ListItem>
            </Grid>
          </React.Fragment>
        </List>
      </Grid>
    );
  }
}

export default withStyles(expStyles)(Experience);
