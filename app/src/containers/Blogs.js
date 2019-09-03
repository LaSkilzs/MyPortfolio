import React from "react";
import Header from "../components/Header";
import { makeStyles, Paper, Card, CardContent, Grid } from "@material-ui/core";
import blogs from "../utils/blogs";

const useStyles = makeStyles({
  paper: {
    margin: 0,
    marginLeft: "90px",
    height: "56rem",
    backgroundImage: `url("https://images.pexels.com/photos/971360/pexels-photo-971360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1260")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed"
  }
});
const Blogs = props => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Header name={"Blogs"} />
      <Grid container>
        {blogs.map(blog => (
          <Card key={blog.id}>
            <img
              src={blog.image}
              alt="image"
              style={{ width: 200, height: 200 }}
            />
            <CardContent>{blog.summary}</CardContent>
            <CardContent>
              <a href={blog.url}></a>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Paper>
  );
};

export default Blogs;
