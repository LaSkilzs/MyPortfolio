import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import BtnGroup from "./BtnGroup";
import { aboutBtns, cardBtns } from "../utils/variables";

function FootDash(props) {
  return (
    <React.Fragment>
      <Grid item md={4}>
        <div style={{ marginLeft: 10 }}>
          <Typography variant="h5">La Tarisha Fountain, MBA</Typography>
          <Typography variant="h5">
            Product Manager, Full Stack Developer
          </Typography>
        </div>
        <div style={{ marginLeft: 5 }}>
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
