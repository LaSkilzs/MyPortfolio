import React, { Component } from "react";
import { Grid, Typography, List, ListItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import interestStyles from "../../assets/interestStyles";
import interests from "../../utils/interests";
import MobileStepper from "../DotMobileStepper";

class Interests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interests: interests,
      showHobby: false
    };
  }

  interestList = () => {
    return this.state.interests.filter(
      interest => interest.type === "interest"
    );
  };
  hobbyList = () =>
    this.state.interests.filter(interest => interest.type === "hobby");

  handleLeft = () => this.setState({ showHobby: !this.state.showHobby });
  handleRight = () => this.setState({ showHobby: !this.state.showHobby });

  render() {
    console.log(this.state.showHobby);
    let { classes } = this.props;
    return (
      <Grid item md={8} className={classes.container}>
        {this.state.showHobby ? (
          <React.Fragment>
            <Typography variant="h4">Hobbies</Typography>
            <Typography className={classes.paragraph}>
              I like to consider myself very diverse in my hobbies. I am avivd
              sports enthusiam, having recieve a full athletic scholarship, and
              winning the MSG Golden Gloves Tournament. In addition, I enjoy
              being outdoors, hiking,skiing, canoeing and much more. Strategic
              board games, reading about history are a few things that I enjoy.
            </Typography>
            <List className={classes.list}>
              {this.hobbyList().map(interest => (
                <Grid item md={2} key={interest.id}>
                  <ListItem>{interest.icon}</ListItem>
                  <ListItem>{interest.name}</ListItem>
                </Grid>
              ))}
            </List>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography variant="h4">Interests</Typography>
            <Typography className={classes.paragraph}>
              Techncially, I am interested in how things are connected that is
              one of the reasons, I chose full stack development. Understanding
              the power and challenges of inteconnectedness via technology. My
              other interests involve full stack development and enterprise
              software.
            </Typography>
            <List className={classes.list}>
              {this.interestList().map(interest => (
                <Grid item md={2} key={interest.id}>
                  <ListItem>{interest.icon}</ListItem>
                  <ListItem>{interest.name}</ListItem>
                </Grid>
              ))}
            </List>
          </React.Fragment>
        )}

        <MobileStepper
          steps={1}
          handleLeft={this.handleLeft}
          handleRight={this.handleRight}
        />
      </Grid>
    );
  }
}

export default withStyles(interestStyles)(Interests);
