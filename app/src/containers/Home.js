import React from "react";
import { Paper, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    margin: 0,
    height: "105vh",
    width: "105vw",
    backgroundImage: `url(https://images.pexels.com/photos/1807085/pexels-photo-1807085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  btn: {
    color: "white",
    fontWeight: "bold",
    fontSize: "2rem",
    fontFamily: "Slabo 27px serif",
    background: "transparent",
    width: "30%",
    marginBottom: "20rem",
    border: "white 2px solid",
    margin: "0 auto"
  }
});

const Home = () => {
  const classes = useStyles();
  console.log("Hey");

  return (
    <Paper className={classes.paper}>
      <Button className={classes.btn} color="primary">
        View Work
      </Button>
    </Paper>
  );
};

export default Home;
