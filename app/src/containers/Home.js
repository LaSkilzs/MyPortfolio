import React from "react";
import { Paper, Button, makeStyles } from "@material-ui/core";
import clouds from "../images/clouds.jpg";

const useStyles = makeStyles({
  paper: {
    margin: 0,
    height: "105vh",
    width: "105vw",
    backgroundImage: `url(https://cdn.pixabay.com/photo/2019/05/22/20/38/lavender-4222480_1280.jpg)`,
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
    border: "white 2px solid",
    margin: "0 auto"
  }
});

const Home = () => {
  const classes = useStyles();
  console.log("Hey");

  return (
    <Paper className={classes.paper}>
      {/* <Button className={classes.btn} color="primary">
        View Work
      </Button> */}
    </Paper>
  );
};

export default Home;
