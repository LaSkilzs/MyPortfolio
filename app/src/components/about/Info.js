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
      <Grid
        item
        md={8}
        style={{
          margin: "auto",
          marginTop: "1rem",
          padding: "3rem",
          height: "30rem",
          boxShadow: "inset 0 0 10px #000000"
        }}
      >
        <Typography
          variant="h3"
          style={{
            fontSize: "2rem",
            color: "white",
            textAlign: "center",
            fontWeight: "bold"
          }}
        >
          My Story
        </Typography>
        <Typography style={{ fontSize: "1rem", color: "white" }}>
          <p>
            Lsorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            praesentium recusandae ex deserunt qui? Facere facilis est incidunt
            quia harum, itaque minus possimus nam. Nobis excepturi ab voluptatum
            neque quam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo, qui. Velit voluptatem, doloremque rem inventore, hic
            rerum eligendi similique temporibus sequi, recusandae dolore aut nam
            soluta expedita adipisci amet at! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Velit, illum. Vitae unde excepturi
            sequi, odit aliquam doloribus. Possimus animi dolorem ullam nesciunt
            voluptate culpa, corrupti maiores exercitationem dignissimos atque
            doloribus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            praesentium recusandae ex deserunt qui? Facere facilis est incidunt
            quia harum, itaque minus possimus nam. Nobis excepturi ab voluptatum
            neque quam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo, qui. Velit voluptatem, doloremque rem inventore, hic
            rerum eligendi similique temporibus sequi, recusandae dolore aut nam
            soluta expedita adipisci amet at! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Velit, illum. Vitae unde excepturi
            sequi, odit aliquam doloribus. Possimus animi dolorem ullam nesciunt
            voluptate culpa, corrupti maiores exercitationem dignissimos atque
            doloribus!
          </p>
        </Typography>
      </Grid>
    );
  }
}

export default Info;
