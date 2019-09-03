import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {}
    };
  }
  render() {
    return (
      <Grid item md={8}>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          praesentium recusandae ex deserunt qui? Facere facilis est incidunt
          quia harum, itaque minus possimus nam. Nobis excepturi ab voluptatum
          neque quam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo, qui. Velit voluptatem, doloremque rem inventore, hic rerum
          eligendi similique temporibus sequi, recusandae dolore aut nam soluta
          expedita adipisci amet at! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Velit, illum. Vitae unde excepturi sequi, odit
          aliquam doloribus. Possimus animi dolorem ullam nesciunt voluptate
          culpa, corrupti maiores exercitationem dignissimos atque doloribus!
        </Typography>
      </Grid>
    );
  }
}

export default Info;
