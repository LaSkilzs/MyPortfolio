import React from "react";
import Header from "../components/Header";
import { Paper, Card, Button, Grid } from "@material-ui/core";
import blogs from "../utils/blogs";
import { withStyles } from "@material-ui/core/styles";
import blogStyles from "../assets/blogStyles";

class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      blogs: blogs
    };
  }

  handleRight = () => {
    console.log("right", this.state.start);
    if (this.state.start < this.state.blogs.length - 2) {
      this.setState({ start: this.state.start + 1 });
    } else {
      this.setState({ start: 0 });
    }
  };
  handleLeft = () => {
    if (this.state.start < this.state.blogs.length && this.state.start !== 0) {
      this.setState({ start: this.state.start - 1 });
    } else {
      this.setState({ start: this.state.blogs.length - 1 });
    }
  };

  render() {
    let num = this.state.start;
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <Header name={"Blogs"} />
        <Grid container className={classes.grid}>
          <div className={classes.chev}>
            <i
              className="fas fa-chevron-left"
              style={{ color: "white" }}
              onClick={() => this.handleLeft()}
            ></i>
          </div>
          <Grid item md={4} key={this.state.blogs[num].id}>
            <Card className={classes.wrapper}>
              <img
                src={this.state.blogs[num].image}
                alt="blogs"
                className={classes.img}
              />
              <p>{this.state.blogs[num].summary}</p>
              <Button className={classes.button}>
                <a className={classes.a} href={this.state.blogs[num].url}>
                  read more
                </a>
              </Button>
            </Card>
          </Grid>
          <div className={classes.chev}>
            <i
              className="fas fa-chevron-right"
              style={{ color: "white" }}
              onClick={() => this.handleRight()}
            ></i>
          </div>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(blogStyles)(Blogs);
