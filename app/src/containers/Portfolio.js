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
  }
});
const Portfolio = props => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Header name={"Portfolio"} />
      <BtnGroup names={projBtns} />
      <Grid container>
        {projects.map(project => (
          <Card key={project.id}>
            <img
              src={project.image}
              alt="image"
              style={{ width: 200, height: 200 }}
            />
          </Card>
        ))}
      </Grid>
    </Paper>
  );
};

export default Portfolio;
