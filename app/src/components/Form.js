import React, { Component } from "react";
import { InputBase, Button } from "@material-ui/core";

class Form extends Component {
  render() {
    return (
      <React.Fragment>
        <form>
          <InputBase placeholder="name" />
          <InputBase placeholder="email" />
          <InputBase placeholder="message" row="6" />
          <Button>Submit</Button>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
