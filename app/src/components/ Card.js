import React from "react";
import { Grid } from "@material-ui/core";
import me from "../images/me.jpg";

const Card = props => {
  return (
    <Grid item md={4}>
      <div style={{ marginLeft: "15px" }}>
        <img src={me} alt="me" />
      </div>
    </Grid>
  );
};

export default Card;
