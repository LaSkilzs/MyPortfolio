import React from "react";
import { makeStyles, Paper } from "@material-ui/core";

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
const Github = props => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <h2 style={{ color: "black", marginLeft: "100px" }}>Github</h2>;
    </Paper>
  );
};

export default Github;
