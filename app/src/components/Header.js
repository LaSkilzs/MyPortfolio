import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center"
  },
  header: {
    color: "white",
    marginTop: "1rem",
    marginBottom: "1rem",
    fontFamily: "Slabo 27px serif",
    fontWeight: "bold",
    textShadow:
      "1px 0px #7163b2, 0px 1px #7163b2,2px 1px #7163b2, 1px 2px #7163b2,3px 2px #7163b2, 2px 3px #7163b2,4px 3px #7163b2, 3px 4px #7163b2,5px 4px #7163b2, 4px 5px #7163b2,6px 5px #7163b2, 5px 6px #7163b2,7px 6px #7163b2, 6px 7px #7163b2,8px 7px #7163b2, 7px 8px #7163b2,8px 8px #7163b2"
  }
});

const Header = props => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Typography variant="h1" className={classes.header}>
        {props.name}
      </Typography>
    </Grid>
  );
};

export default Header;
