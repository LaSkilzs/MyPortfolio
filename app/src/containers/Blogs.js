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
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    width: "80vw",
    marginLeft: "5rem",
    height: "10vh",
    padding: "2rem"
  },
  wrapper: {
    border: "4px solid white",
    padding: "1rem",
    margin: "auto",
    textAlign: "center",
    margin: "1rem",
    width: "19vw"
  },
  img: {
    width: "19vw",
    height: "23vh"
  }
});
const Blogs = props => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Header name={"Blogs"} />
      <Grid container className={classes.grid}>
        {blogs.map(blog => (
          <Grid item md={4} key={blog.id}>
            <div className={classes.wrapper}>
              <img src={blog.image} alt="image" className={classes.img} />
              <p>{blog.summary}</p>

              <a href={blog.url}>read more</a>
            </div>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Blogs;
