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
      blogs: blogs,
      show: []
    };
  }

  componentDidMount() {}

  handleClick = () => {
    if (this.state.start < this.state.show.length) {
      this.setState({ start: this.state.start + 1 });
    } else {
      this.setState({ start: 0 });
    }
  };

  render() {
    let showBlog = num => this.state.blogs[num];
    console.log(showBlog);
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <Header name={"Blogs"} />
        <Grid container className={classes.grid}>
          <div className={classes.chev}>
            <i className="fas fa-chevron-left" style={{ color: "white" }}></i>
          </div>

          {/* {this.state.blogs.map(blog => ( */}
          <Grid item md={4} key={showBlog(0).id}>
            <Card className={classes.wrapper}>
              <img
                src={showBlog(0).image}
                alt="blogs"
                className={classes.img}
              />
              <p>{showBlog(0).summary}</p>

              <Button className={classes.button}>
                <a className={classes.a} href={showBlog(0).url}>
                  read more
                </a>
              </Button>
            </Card>
          </Grid>
          {/* ))} */}
          <div className={classes.chev}>
            <i className="fas fa-chevron-right" style={{ color: "white" }}></i>
          </div>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(blogStyles)(Blogs);
