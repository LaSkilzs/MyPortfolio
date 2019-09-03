import React, { Component } from "react";
import { InputBase, Button } from "@material-ui/core";

class Form extends Component {
  render() {
    return (
      <React.Fragment>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50vw",
            margin: "0 auto",
            height: "45vh",
            alignItems: "center"
          }}
        >
          <InputBase
            placeholder="name"
            style={{
              background: "white",
              padding: "1rem",
              borderRadius: 10,
              width: "30vw",
              fontSize: "1rem",
              margin: "1rem"
            }}
          />
          <InputBase
            placeholder="email"
            style={{
              background: "white",
              padding: "1rem",
              borderRadius: 10,
              width: "30vw",
              fontSize: "1rem",
              margin: "1rem"
            }}
          />
          <InputBase
            placeholder="message"
            row="6"
            style={{
              background: "white",
              padding: "1rem",
              borderRadius: 10,
              width: "30vw",
              fontSize: "1rem",
              margin: "1rem"
            }}
          />
          <Button
            style={{
              color: "white",
              padding: "1rem",
              border: "2px white solid",
              width: "15vw",
              fontSize: "1rem",
              margin: "1rem"
            }}
          >
            Submit
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
