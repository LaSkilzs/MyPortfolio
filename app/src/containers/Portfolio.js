import React from "react";
import Header from "../components/Header";
import BtnGroup from "../components/BtnGroup";
import { makeStyles, Paper, Grid, Card } from "@material-ui/core";
import { projBtns } from "../utils/variables";
import projects from "../utils/projects";

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
  img: {
    width: "24vw",
    height: "20vh",
    padding: "0.5rem"
  }
});

const Portfolio = props => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Header name={"Portfolio"} />
      <BtnGroup names={projBtns} />
      <Grid container className={classes.grid}>
        {projects.map(project => {
          return (
            <Grid item md={4} key={project.id}>
              <img src={project.image} alt="image" className={classes.img} />
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};

export default Portfolio;
