import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import BtnGroup from "./BtnGroup";
import { aboutBtns, cardBtns } from "../utils/variables";

const useStyles = makeStyles({
  titles: {
    padding: "1rem",
    marginLeft: "1rem",
    textAlign: "center",
    fontFamily: "Slabo 27px serif",
    fontWeight: "bold",
    color: "white"
  }
});
function FootDash(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item md={4}>
        <div className={classes.titles}>
          <Typography variant="h5">La Tarisha Fountain, MBA</Typography>
          <Typography variant="h5">
            Product Manager, Full Stack Developer
          </Typography>
        </div>
        <div className={classes.links} style={{ marginLeft: 5 }}>
          <BtnGroup names={cardBtns} />
        </div>
      </Grid>
      <Grid item md={8}>
        <BtnGroup names={aboutBtns} />
      </Grid>
    </React.Fragment>
  );
}

export default FootDash;
