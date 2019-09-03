import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import me from "../images/me.jpg";

const useStyles = makeStyles({
  div: {
    marginLeft: 15,
    display: "flex",
    justifyContent: "center"
  },
  img: {
    borderRadius: "50%",
    border: "5px solid white"
  }
});

const Card = props => {
  const classes = useStyles();
  return (
    <Grid item md={4}>
      <div className={classes.div}>
        <img className={classes.img} src={me} alt="me" />
      </div>
    </Grid>
  );
};

export default Card;
